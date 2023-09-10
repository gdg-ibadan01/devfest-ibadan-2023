import useMouse from "@react-hook/mouse-position";
import { useState, useRef } from "react";

const useCustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null)!;
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  interface MousePositions {
    mouseXPosition?: number;
    mouseYPosition?: number;
  }

  // interface mouseFunctions {
  //   devfestHeroEnter: (e: object) => any;
  //   devfestHeroLeave: (e: object) => any;
  // }

  let mousePositions: MousePositions = {
    mouseXPosition: 0,
    mouseYPosition: 0,
  };

  if (mouse.x !== null) {
    mousePositions.mouseXPosition = mouse.clientX!; // non-null assertion operator
  }

  if (mouse.y !== null) {
    mousePositions.mouseYPosition = mouse.clientY!; // non-null assertion operator
  }

  const variants = {
    default: {
      opacity: 1,
      height: 30,
      width: 30,
      fontSize: "20px",
      backgroundColor: "transparent",
      x: mousePositions.mouseXPosition,
      y: mousePositions.mouseYPosition,

      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    devfestHero: {
      opacity: 1,
      backgroundColor: "#fff",
      color: "#fbbc04",
      height: 80,
      width: 80,
      fontSize: "16px",
      border: "5px solid #4285f4",
      padding: "10px",
      x: mousePositions.mouseXPosition ?? 0 - 32,
      y: mousePositions.mouseYPosition ?? 0 - 32,
    },
    bubbleFrame: {
      opacity: 0.8,
      backgroundColor: "#fff",
      color: "#0E1921",
      height: 40,
      width: 40,
      fontSize: "16px",
      padding: "10px",
      x: mousePositions.mouseXPosition ?? 0 - 32,
      y: mousePositions.mouseYPosition ?? 0 - 32,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function devfestHeroEnter(e: object) {
    setCursorText("DevFest");
    setCursorVariant("devfestHero");
  }

  function devfestHeroLeave(e: object) {
    setCursorText("😊");
    setCursorVariant("default");
  }

  return {
    devfestHeroEnter,
    devfestHeroLeave,
    cursorText,
    cursorVariant,
    ref,
    variants,
    spring,
  };
};

export default useCustomCursor;
