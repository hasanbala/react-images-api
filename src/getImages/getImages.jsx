import { ListImages } from "./listImages";
import { UseAppContext } from "../context";
import "../styles/getImages.css";

export const GetImages = () => {
  const { images } = UseAppContext();
  return (
    <div className="image-list-container">
      {images.map((image) => (
        <ListImages key={image.id} image={image} />
      ))}
    </div>
  );
};
