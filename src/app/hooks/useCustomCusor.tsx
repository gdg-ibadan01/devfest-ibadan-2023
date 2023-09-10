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
      backgroundColor: "#fff",
      mixBlendMode: "difference",
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
      mixBlendMode: "difference",
      color: "#0e1921",
      height: 80,
      width: 80,
      x: mousePositions.mouseXPosition ?? 0 - 32,
      y: mousePositions.mouseYPosition ?? 0 - 32,
    },
    volunteer: {
      opacity: 1,
      backgroundColor: "transparent",
      height: 20,
      width: 20,
      fontSize: "32px",
      x: mousePositions.mouseXPosition ?? 0 - 50,
      y: mousePositions.mouseYPosition ?? 0 - 50,
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  function devfestHeroEnter(e: object) {
    setCursorText("");
    setCursorVariant("devfestHero");
  }
  function volunteer(e: object) {
    setCursorText("🦸‍♂️🦸‍♀️");
    setCursorVariant("volunteer");
  }
  function ticket(e: object) {
    setCursorText("🎟️");
    setCursorVariant("volunteer");
  }
  function speaker(e: object) {
    setCursorText("🗣️");
    setCursorVariant("volunteer");
  }

  function devfestLeave(e: object) {
    setCursorText("");
    setCursorVariant("default");
  }

  return {
    devfestHeroEnter,
    volunteer,
    ticket,
    speaker,
    devfestLeave,
    cursorText,
    cursorVariant,
    ref,
    variants,
    spring,
  };
};

export default useCustomCursor;
