import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HobbyPopup.css";

const popupVariants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: [1.05, 0.97, 1.02, 1], // bounce effect
    opacity: 1,
    transition: { duration: 0.7, times: [0, 0.5, 0.85, 1] },
  },
  exit: {
    scale: [1, 1.03, 0.95, 0.85],
    opacity: 0,
    transition: { duration: 0.55, times: [0, 0.3, 0.6, 1] },
  },
};

const HobbyPopup = ({ hobby, onClose }) => {
  const popupRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Scroll into view and center in viewport when popup opens
  useEffect(() => {
    if (hobby) {
      const timer = setTimeout(() => {
        popupRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100); // 100ms delay to let the pop-in start
      return () => clearTimeout(timer);
    }
  }, [hobby]);

  return (
    <AnimatePresence mode="wait">
      {hobby && (
        <motion.div
          ref={popupRef}
          key="hobby-popup" // fixed key prevents remount flicker
          className="hobby-popup"
          variants={popupVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={() => {
            if (popupRef.current) {
              popupRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "center",
              });
            }
          }}
        >
          <h2 className="hobby-popup-title hobby-popup-text delay-1">
            {hobby.title}
          </h2>

          <p className="hobby-popup-description hobby-popup-text delay-2">
            {hobby.highlightedWords.length === 0
              ? hobby.description
              : hobby.highlightedWords
                  .reduce(
                    (acc, phrase) => {
                      const parts = acc.flatMap((part) => {
                        if (typeof part === "string") {
                          return part.split(new RegExp(`(${phrase})`, "gi"));
                        }
                        return [part];
                      });
                      return parts;
                    },
                    [hobby.description]
                  )
                  .map((part, idx) =>
                    hobby.highlightedWords.some(
                      (phrase) => part.toLowerCase() === phrase.toLowerCase()
                    ) ? (
                      <span key={idx} className="bold-text">
                        {part}
                      </span>
                    ) : (
                      <span key={idx}>{part}</span>
                    )
                  )}
          </p>

          <div className="hobby-popup-images">
            {hobby.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${hobby.title} ${idx + 1}`}
                className={`hobby-popup-image delay-${idx}`}
              />
            ))}
          </div>

          <button
            className="hobby-back-button inherit-cursor"
            onClick={onClose}
            aria-label="Back button"
          >
            &lt;&nbsp;Back
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HobbyPopup;
