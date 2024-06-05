import "./Loading.scss";
import { useLottie } from "lottie-react";

import loader from "../../assets/loader/react.json";

function Loading() {
  const options = {
    animationData: loader,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return <div className="loader">{View}</div>;
}

export default Loading;
