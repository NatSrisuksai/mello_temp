import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div className="flex justify-center w-full logo-container">
        <LazyLoadImage src="mellow_logo.png" className="logo" alt="Mellow Tempo Logo" />
      </div>
      <div className="my-6">
        <a className="info-button" href="/agenda">
          Press for Information
        </a>
      </div>

      <div className="flex justify-center w-full">
        <LazyLoadImage src="artist.png" className="artist" alt="Concert Artists" />
      </div>
    </div>
  );
}

export default HomePage;