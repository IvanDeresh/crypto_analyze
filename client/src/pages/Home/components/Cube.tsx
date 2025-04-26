import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import { cube_center } from "../../../assets/img";

const Cube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  useAnimationFrame((t) => {
    const cube = cubeRef.current;
    if (cube) {
      const faces = cube.querySelectorAll(".face");
      const baseDistance = 80;
      const amplitude = 75;
      const distance = baseDistance + Math.abs(Math.sin(t / 1000)) * amplitude;

      faces.forEach((face) => {
        const name = face.getAttribute("data-face");
        if (!name) return;
        (face as HTMLElement).style.transform = getFaceTransform(
          name,
          distance
        );
      });
    }
  });

  return (
    <div
      className="flex items-center justify-center"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        ref={cubeRef}
        className="relative w-40 h-40"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(0) rotateY(0)",
        }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {["front", "back", "left", "right", "top", "bottom"].map((face) => (
          <div
            key={face}
            data-face={face}
            className="face absolute w-40 h-40 bg-[#646cff]/30 border border-[#3d44c5] backdrop-blur-md"
            style={{
              transform: getFaceTransform(face, 5),
            }}
          />
        ))}
        <div className="absolute w-14 h-14 bg-transparent rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img src={cube_center} alt="cube_center" />
        </div>
      </motion.div>
    </div>
  );
};

const getFaceTransform = (face: string, distance: number) => {
  switch (face) {
    case "front":
      return `translateZ(${distance}px)`;
    case "back":
      return `rotateY(180deg) translateZ(${distance}px)`;
    case "left":
      return `rotateY(-90deg) translateZ(${distance}px)`;
    case "right":
      return `rotateY(90deg) translateZ(${distance}px)`;
    case "top":
      return `rotateX(90deg) translateZ(${distance}px)`;
    case "bottom":
      return `rotateX(-90deg) translateZ(${distance}px)`;
    default:
      return "";
  }
};

export default Cube;
