import type { FC } from "react";
import type { ImageCardProps } from "../../images-api";

const ImageCard: FC<ImageCardProps> = ({ url, alt, onClick }) => {
  return (
    <div>
      <img src={url} alt={alt} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
