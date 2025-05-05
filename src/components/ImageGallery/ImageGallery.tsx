import type { FC } from "react";
import ImageCard from "../ImageCard/ImageCard.js";
import type { ImageGalleryProps } from "../../images-api.js";

const ImageGallery: FC<ImageGalleryProps> = ({ items, modalImage }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={`${item.id}-${index}`}>
          <ImageCard
            url={item.urls.small}
            alt={item.alt_description || ""}
            onClick={() => modalImage(item)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
