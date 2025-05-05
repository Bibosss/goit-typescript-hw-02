import type { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
  disabled?: boolean;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick, disabled = false }) => {
  return (
    <div className={css.buttonDiv}>
      <button onClick={onClick} disabled={disabled} className={css.button}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
