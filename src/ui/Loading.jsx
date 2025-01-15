import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <HashLoader
      cssOverride={{ height: "70vh", margin: "auto" }}
      color="#222722"
    />
  );
}

export default Loading;
