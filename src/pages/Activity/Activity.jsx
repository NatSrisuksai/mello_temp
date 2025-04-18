import React, { useState, useEffect, useRef } from "react";

function Activity() {
  const images = [
    { src: "/public/mainActivity.png", alt: "Main Activity" },
    { src: "/public/firstActivity.png", alt: "First Activity" },
    { src: "/public/secondActivity.png", alt: "Second Activity" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const autoSlideInterval = useRef(null);
  const pauseTimeout = useRef(null);

  const startAutoSlide = () => {
    if (autoSlideInterval.current) return;
    autoSlideInterval.current = setInterval(() => {
      nextImage();
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const resetAutoSlide = () => {
    stopAutoSlide();
    if (pauseTimeout.current) {
      clearTimeout(pauseTimeout.current);
    }
    pauseTimeout.current = setTimeout(() => {
      startAutoSlide();
    }, 4000);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => prev - 1);
    resetAutoSlide();
  };

  const nextImage = () => {
    setCurrentIndex((prev) => prev + 1);
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    resetAutoSlide();
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX;
    const minSwipeDistance = 50;

    if (deltaX > minSwipeDistance) {
      prevImage();
    } else if (deltaX < -minSwipeDistance) {
      nextImage();
    }

    setTouchStartX(null);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      if (pauseTimeout.current) {
        clearTimeout(pauseTimeout.current);
      }
    };
  }, []);

  const displayImages = images.map((image, index) => ({
    ...image,
    key: index + Math.floor(currentIndex / images.length) * images.length,
  }));

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex justify-center w-full logo-container">
        <img src="/public/mellow_logo.png" className="logo" alt="Mellow Tempo Logo" />
      </div>
      <div className="my-6">
        <a className="info-button" href="/agenda">
          Back To Agenda
        </a>
      </div>
      <div
        className="carousel w-full max-w-4xl overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-wrapper flex"
          style={{ transform: `translateX(-${(currentIndex % images.length) * 100}%)` }}
        >
          {displayImages.map((image) => (
            <div key={image.key} className="carousel-item flex-shrink-0 w-full">
              <img src={image.src} className="activity" alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between hidden sm:flex">
          <button className="btn btn-circle" onClick={prevImage}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={nextImage}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
}

export default Activity;