import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6;

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpeg)/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `);

  const images = data.allFile.edges.map((edge) =>
    getImage(edge.node.childImageSharp.gatsbyImageData)
  );
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentImageIndex(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeModal();
    } else if (event.key === "ArrowRight") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else if (event.key === "ArrowLeft") {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length),
    onSwipedRight: () =>
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      ),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  return (
    <div className="container mx-auto p-4 z-10 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentImages.map((image, index) => (
          <div
            role="button"
            tabIndex={-12}
            key={index}
            className="overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openModal(indexOfFirstImage + index)}
          >
            <GatsbyImage
              image={image}
              alt={`Gallery image ${index + 1}`}
              className="object-cover object-center w-full h-64"
            />
          </div>
        ))}
      </div>

      <div className="relative flex justify-center mt-4 z-45">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            {...handlers}
          >
            <motion.div
              className="relative lightbox-container"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                tabIndex={-22}
                onClick={closeModal}
                className="close-button"
              >
                &times;
              </button>
              <GatsbyImage
                image={images[currentImageIndex]}
                alt={`Current image ${currentImageIndex + 1}`}
                className="lightbox-image max-w-full max-h-screen"
              />
              <div className="mt-4 flex justify-center space-x-2 lightbox-thumbnail">
                {images.map((thumb, index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 overflow-hidden rounded-lg cursor-pointer ${
                      index === currentImageIndex ? "ring-2 ring-white" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <GatsbyImage
                      image={thumb}
                      alt={`Thumbnail ${index + 1}`}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
