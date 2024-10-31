import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import HideCursor from "../../Shared/ShowDefaultCursor";
import "./ElasticCursor.css";

interface ElasticCursorProps {
  size?: number; // Size of the cursor
  color?: string; // Color of the cursor
  border?: string; // Border of the cursor
  TransitionTime?: number;
  opacity?: number;
  hideDefaultCursor?: boolean;
}

const Circle = styled.div<{
  size: number;
  color: string;
  border: string;
  TransitionTime: number;
  opacity: number;
  hideDefaultCursor?: boolean;
}>`
  position: fixed;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  border: ${({ border }) => border};
  border-radius: 50%;
  top: calc(${({ size }) => `${size / 2}px`} * -1);
  left: calc(${({ size }) => `${size / 2}px`} * -1);
  pointer-events: none;
  background-color: ${({ color }) => color || "transparent"};

  z-index: 1000;
  opacity: ${({ opacity }) => opacity};
`;

const ElasticCursor: React.FC<ElasticCursorProps> = ({
  size = 40,
  color = "transparent",
  border = "1px solid black",
  TransitionTime = 0.2,
  opacity = 1,
  hideDefaultCursor = true,
}) => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const previousMouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  const currentScale = useRef(0);
  const currentAngle = useRef(0);

  const speed = TransitionTime; // Smoothing factor

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;
    };

    const tick = () => {
      // Move
      circle.current.x += (mouse.current.x - circle.current.x) * speed;
      circle.current.y += (mouse.current.y - circle.current.y) * speed;
      const translateTransform = `translate(${circle.current.x}px, ${circle.current.y}px)`;

      // Squeeze
      const deltaMouseX = mouse.current.x - previousMouse.current.x;
      const deltaMouseY = mouse.current.y - previousMouse.current.y;
      previousMouse.current.x = mouse.current.x;
      previousMouse.current.y = mouse.current.y;

      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      const scaleValue = (mouseVelocity / 150) * 0.5;
      currentScale.current += (scaleValue - currentScale.current) * speed;
      const scaleTransform = `scale(${1 + currentScale.current}, ${
        1 - currentScale.current
      })`;

      // Rotate
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
      if (mouseVelocity > 20) {
        currentAngle.current = angle;
      }
      const rotateTransform = `rotate(${currentAngle.current}deg)`;

      if (circleRef.current) {
        circleRef.current.style.transform = `${translateTransform} ${rotateTransform} ${scaleTransform}`;
      }

      requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    tick();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Circle
        TransitionTime={TransitionTime}
        ref={circleRef}
        size={size}
        opacity={opacity}
        border={border}
        color={color}
      />
      <HideCursor hideDefaultCursor={hideDefaultCursor} />
    </>
  );
};

export default ElasticCursor;
