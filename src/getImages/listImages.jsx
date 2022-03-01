import { useEffect, useRef, useState } from "react";
import "../styles/getImages.css";

export const ListImages = ({ image }) => {
  const [spanCount, setSpancount] = useState(Number(1));
  const myRef = useRef();

  useEffect(() => {
    const tempRef = myRef.current;
    tempRef.addEventListener("load", () => {
      const spanCount = Math.round(tempRef.clientHeight / 5) + 2;
      setSpancount(spanCount);
    });
  });

  return (
    <img
      style={{ gridRowEnd: `span ${spanCount}` }}
      ref={myRef}
      alt={image.description}
      key={image.id}
      src={image.urls.small}
    />
  );
};
