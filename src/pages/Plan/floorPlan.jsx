import React, { useState } from "react";

function FloorPlan() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex justify-center logo-container">
        <img src="mellow_logo.png" className="logo" alt="Mellow Tempo Logo" />
      </div>

      <div className="my-6">
        <a className="info-button" href="/activity">
          Go To Activity
        </a>
      </div>

      <div className="flex justify-center">
        <img
          src="floorPlan.png"
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
            <img
              src="floorPlan.png"
              className="modal-image"
              alt="Concert Agenda"
            />
          </div>
        </div>
      )}
      <div className="my-6">
        <a className="info-button" href="/agenda">
          Back To Agenda
        </a>
      </div>
    </div>
  );
}

export default FloorPlan;
