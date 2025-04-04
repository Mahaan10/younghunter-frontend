import { HashLoader, RotateLoader } from "react-spinners";

function Loading() {
  return (
    <HashLoader
      cssOverride={{ height: "70vh", margin: "auto" }}
      color="#222722"
    />
  );
}

export default Loading;

export function LazyLoading() {
  return (
    <RotateLoader
      cssOverride={{ height: "100%", margin: "auto" }}
      color="#222722"
    />
  );
}
