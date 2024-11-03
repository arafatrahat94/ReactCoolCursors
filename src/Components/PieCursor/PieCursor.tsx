import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import HideCursor from "../../Shared/ShowDefaultCursor";

interface PieCursorProps {
  size?: number;
  color?: string;
  opacity?: number;
  border?: string;
  InnerBorderColor?: string;
  TransitionTime?: number;
  hideDefaultCursor?: boolean;
}

const loadAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Cursor = styled.div<{
  size: number;
  color: string;
  opacity: number;
  border: string;
  InnerBorderColor: string;
  TransitionTime: number;
  hideDefaultCursor?: boolean;
}>`
  border-radius: 50%;
  position: fixed;
  color: ${({ InnerBorderColor }) => InnerBorderColor};
  font-size: 11px;
  text-indent: -99999em;
  width: 10em;
  height: 10em;
  scale: 0.275;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);
  z-index: 1000;
  border: ${({ border }) => border};
  transition: all ${({ TransitionTime }) => TransitionTime}s ease-out;
  pointer-events: none;
  &:before,
  &:after {
    position: absolute;
    content: "";
    border-radius: 50%;
  }

  &:before {
    width: 5.2em;
    height: 10.2em;
    background: ${({ color }) => color};
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.1em 5.1em;
    animation: ${loadAnimation} 1.8s infinite ease 1.3s;
  }

  &:after {
    width: 5.2em;
    height: 10.2em;
    background: ${({ color }) => color};
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    transform-origin: 0.1em 5.1em;
    animation: ${loadAnimation} 1.8s infinite ease;
    opacity: ${({ opacity }) => opacity};
  }

  &.expanded {
    transform: scale(1.5); /* Scale up */
  }
`;

const PieCursor: React.FC<PieCursorProps> = ({
  size = 20,
  color = "black",
  opacity = 1,
  border = "1px solid black",
  TransitionTime = 0.2,
  InnerBorderColor = "black",
  hideDefaultCursor = true,
}) => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.setAttribute(
        "style",
        `top: ${e.pageY - (size + 20)}px; left: ${e.pageX - (size + 20)}px;`
      );
    };

    const handleClick = () => {
      cursor.classList.add("expanded");
      setTimeout(() => {
        cursor.classList.remove("expanded");
      }, 300); // Duration matches the scale transition
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
        color={color}
        opacity={opacity}
        border={border}
        InnerBorderColor={InnerBorderColor}
        TransitionTime={TransitionTime}
      />
      <HideCursor hideDefaultCursor={hideDefaultCursor} />
    </>
  );
};

export default PieCursor;
