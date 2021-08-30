import React from "react";

const GetImages = ({ images }) => {
  const imagesList = images.map((image) => {
    return (
      <img alt={image.description} key={image.id} src={image.urls.small} />
    );
  });

  return (
    <div className="image-list-container">
      {images.length} results found
      {imagesList}
    </div>
  );
};

export default GetImages;
