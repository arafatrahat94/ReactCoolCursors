import React, { useEffect, useRef, useState } from "react";
import HideCursor from "../../Shared/ShowDefaultCursor";
import "./DonutCursor.css";
interface Position {
  x: number;
  y: number;
}

const lerp = (start: number, end: number, alpha: number) =>
  (1 - alpha) * start + alpha * end;

export const useCursorDelay = (
  delay: number = 0,
  initialPosition: Position
) => {
  const [position, setPosition] = useState<Position>(initialPosition);
  const frame = useRef<number>(0);
  const targetPosition = useRef<Position>(initialPosition);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
      if (delay === 0) {
        setPosition(targetPosition.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [delay]);

  useEffect(() => {
    if (delay === 0) return;

    const updatePosition = () => {
      const alpha = 1 - delay * 0.09;
      const newX = lerp(position.x, targetPosition.current.x, alpha);
      const newY = lerp(position.y, targetPosition.current.y, alpha);
      setPosition({ x: newX, y: newY });
      frame.current = requestAnimationFrame(updatePosition);
    };

    frame.current = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [position, delay]);

  return { position };
};

export const DonutCursor: React.FC<{
  delay?: number;
  size?: number;
  sizeDot?: number;
  sizeOutline?: number;
  color?: string;
  border?: string;
  useMixBlendDifference?: boolean;
  hideDefaultCursor?: boolean;
  opacity?: number;
}> = ({
  delay,
  size,
  sizeDot = size || 10,
  sizeOutline = size || 45,
  color = "black",
  border = "2px solid black",
  hideDefaultCursor = true,
  opacity = 1,
}) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const { position: delayedPosition } = useCursorDelay(delay, { x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${event.clientX}px`;
        cursorDotRef.current.style.top = `${event.clientY}px`;
        cursorDotRef.current.style.transform = "translate(-50%, -50%)";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    if (cursorOutlineRef.current) {
      cursorOutlineRef.current.style.left = `${delayedPosition.x}px`;
      cursorOutlineRef.current.style.top = `${delayedPosition.y}px`;
      cursorOutlineRef.current.style.transform = "translate(-50%, -50%)";
    }
  }, [delayedPosition]);

  return (
    <div className="donut">
      <div
        ref={cursorDotRef}
        style={{
          width: `${sizeDot}px`,
          height: `${sizeDot}px`,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 1000,
          backgroundColor: color,
          borderRadius: "50%",
          opacity: opacity,
        }}
      />
      <div
        ref={cursorOutlineRef}
        style={{
          width: `${sizeOutline}px`,
          height: `${sizeOutline}px`,
          borderRadius: "50%",
          border: border,
          pointerEvents: "none",
          zIndex: 1000,
          backgroundColor: "transparent",
          position: "fixed",
          transition: "all 0.3s ease-out",
          opacity: opacity,
        }}
      />{" "}
      <HideCursor hideDefaultCursor={hideDefaultCursor} />
    </div>
  );
};

export default DonutCursor;
