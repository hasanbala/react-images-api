import React, { useState } from "react";

const Images = React.createContext();
export const UseAppContext = () => React.useContext(Images);
const initialState = [];

export const ImagesContext = (props) => {
  const [images, setImages] = useState(initialState);
  const contextValue = {
    images,
    setImages,
  };
  return (
    <Images.Provider value={contextValue}>{props.children}</Images.Provider>
  );
};
