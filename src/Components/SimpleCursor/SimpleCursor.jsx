import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  display: block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: absolute;
  border-radius: 50%;
  background: ${({ color }) => color};
  pointer-events: none;
  z-index: 1000;
  transition: all 0.2s ease-out;
  animation: moveCursor1 0.5s infinite alternate;
  opacity: ${({ opacity }) => opacity};
  &.expand {
    background: transparent;
    animation: moveCursor2 0.5s forwards;
    border: 1px solid #000;
  }
  @keyframes moveCursor1 {
    from {
      transform: scale(1);
    }

    to {
      transform: scale(0.8);
    }
  }

  @keyframes moveCursor2 {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

const SimpleCursor = ({ size = 20, color = "transparent", opacity = 1 }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.setAttribute(
        "style",
        `top: ${e.pageY - size / 2}px; left: ${e.pageX - size / 2}px;`
      );
    };

    const handleClick = () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
      }, 500);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, [size]);

  return (
    <Cursor
      ref={cursorRef}
      size={size}
      color={color}
      opacity={opacity}
    ></Cursor>
  );
};

export default SimpleCursor;
