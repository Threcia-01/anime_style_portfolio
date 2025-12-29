// src/components/selfImage.jsx

import topImage from "../assets/jin_woo.png";

export default function FloatingImage() {
  return (
    <img
      src={topImage}
      alt="Character"
      className="
        pointer-events-none
        absolute
        top-0
        right-[20%]
        w-[400px]
        h-[100vh]
        object-contain
        z-[40]
      "
    />
  );
}
