import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import HideCursor from "../../Shared/ShowDefaultCursor";
import "./CustomPngCursor.css";
interface CustomCursorProps {
  size?: number;

  opacity?: number;

  TransitionTime?: number;
  icon?: string;
  hideDefaultCursor?: boolean;
}

const Cursor = styled.div<{
  size: number;

  opacity: number;

  TransitionTime: number;
  icon?: string;
  hideDefaultCursor?: boolean;
}>`
  display: block;
  overflow: hidden;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: fixed;
  top: 0;
  left: 0;
  
  pointer-events: none;
  z-index: 1000;
  
  transition: all ${({ TransitionTime }) => TransitionTime}s ease-out;
  opacity: ${({ opacity }) => opacity};

  &.expand {
    background: transparent;
    animation: moveCursor2 0.5s ease;
    
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
     
    }
`;

const CustomPngCursor: React.FC<CustomCursorProps> = ({
  size = 20,
  opacity = 1,
  TransitionTime = 0,
  icon = "https://i.ibb.co.com/ts3cf3j/Untitled-design.png",
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.setAttribute(
        "style",
        `top: ${e.pageY - (size - 20)}px; left: ${e.pageX - (size - 20)}px;`
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
    <>
      <Cursor
        ref={cursorRef}
        size={size}
        opacity={opacity}
        TransitionTime={TransitionTime}
      >
        {icon ? <img src={icon} alt="Custom Cursor" /> : null}
      </Cursor>
      <HideCursor hideDefaultCursor={hideDefaultCursor} />
    </>
  );
};

export default CustomPngCursor;
