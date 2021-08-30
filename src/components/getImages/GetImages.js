import React from "react";
import ListImages from "./ListImages";
import "./GetImages.css";

const GetImages = ({ images }) => {
  const getImagesList = images.map((image) => {
    return <ListImages key={image.id} image={image} />;
  });

  return (
    <div className="image-list-container">
      {/* {images.length} results found */}
      {getImagesList}
    </div>
  );
};

export default GetImages;
