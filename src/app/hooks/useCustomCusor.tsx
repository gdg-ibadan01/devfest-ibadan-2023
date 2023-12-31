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

  let mouseXPosition: number = 0;
  let mouseYPosition: number = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX!; // non-null assertion operator
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY!; // non-null assertion operator
  }

  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: "16px",
      backgroundColor: "var(--light-gray)",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    view: {
      opacity: 1,
      backgroundColor: "var(--white)",
      color: "var(--dark)",
      height: 80,
      width: 80,
      fontSize: "18px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    continue: {
      opacity: 1,
      backgroundColor: "var(--white)",
      color: "var(--dark)",
      height: 110,
      width: 110,
      fontSize: "16px",
      fontWeight: "bold",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  const continueEnter = () => {
    setCursorText("CONTINUE");
    setCursorVariant("continue");
  };

  const continueLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return {
    continueEnter,
    continueLeave,
    cursorText,
    cursorVariant,
    ref,
    variants,
    spring,
  };
};

export default useCustomCursor;
