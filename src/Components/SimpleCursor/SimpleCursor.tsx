import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "./SimpleCursor.css";

interface SimpleCursorProps {
  size?: number;
  color?: string;
  opacity?: number;
  border?: string;
  TransitionTime?: number;
}

const Cursor = styled.div<{
  size: number;
  color: string;
  opacity: number;
  border: string;
  TransitionTime: number;
}>`
  display: block;
  overflow: hidden;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${({ color }) => color};
  pointer-events: none;
  z-index: 1000;
  border: ${({ border }) => border};
  transition: all ${({ TransitionTime }) => TransitionTime}s ease-out;
  animation: moveCursor1 0.5s infinite alternate;
  opacity: ${({ opacity }) => opacity};

  &.expand {
    background: transparent;
    animation: moveCursor2 0.5s forwards;
    border: ${({ border }) => border};
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
`;

const SimpleCursor: React.FC<SimpleCursorProps> = ({
  size = 20,
  color = "black",
  opacity = 1,
  border = "1px solid black",
  TransitionTime = 0.2,
}) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
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
      border={border}
      TransitionTime={TransitionTime}
    />
  );
};

export default SimpleCursor;
