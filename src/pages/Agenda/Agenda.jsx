import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Agenda() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex justify-center logo-container">
        <LazyLoadImage src="mellow_logo.png" className="logo" alt="Mellow Tempo Logo" />
      </div>

      <div className="my-6">
        <a className="info-button" href="/floorplan">
          Go To FloorPlan
        </a>
      </div>

      <div className="flex justify-center">
        <LazyLoadImage
          src="Agenda.png"
          className="agenda"
          alt="Concert Agenda"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        />
      </div>

      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <LazyLoadImage
              src="Agenda.png"
              className="modal-image"
              alt="Concert Agenda"
            />
          </div>
        </div>
      )}
      <div className="my-6">
        <a className="info-button" href="/">
          Back To Home Page
        </a>
      </div>
    </div>
  );
}

export default Agenda;
