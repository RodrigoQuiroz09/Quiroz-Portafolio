import { Html, useProgress } from "@react-three/drei";
import ReactLoading from "react-loading";
const Loader = () => {
  const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={50} width={50} />
  );
  const { progress } = useProgress();
  return (
    <Html>
      <div className="loader-canvas">
        <Loading type="spin" color="#fff" />
        {progress.toFixed(2)} %
      </div>
    </Html>
  );
};

export default Loader;
