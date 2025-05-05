import ClipLoader from "react-spinners/ClipLoader";

export const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ClipLoader size={80} color="green" />
    </div>
  );
};
