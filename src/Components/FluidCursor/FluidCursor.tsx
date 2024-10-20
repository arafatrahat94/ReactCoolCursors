import React, { useEffect } from "react";
import "./FluidCursor.css";

interface FluidCursorProps {
  size?: number;
  color?: string;
  opacity?: number;
  border?: string;
}

const FluidCursor: React.FC<FluidCursorProps> = ({
  size = 28,
  color = "black",
  opacity = 1,
  border = "none",
}) => {
  const TAIL_LENGTH = 20;
  let mouseX = 0;
  let mouseY = 0;
  const cursorCircles: HTMLDivElement[] = [];
  const cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.getElementById("waveCursor") as HTMLDivElement;

    function onMouseMove(event: MouseEvent) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function initCursor() {
      for (let i = 0; i < TAIL_LENGTH; i++) {
        const div = document.createElement("div");
        div.classList.add("cursor-circle");
        cursor.appendChild(div);
        cursorCircles.push(div);
      }
    }

    function updateCursor() {
      cursorHistory.shift();
      cursorHistory.push({ x: mouseX, y: mouseY });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        let current = cursorHistory[i];
        let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        cursorCircles[i].style.transform = `translate(${current.x}px, ${
          current.y
        }px) scale(${i / TAIL_LENGTH})`;
        cursorCircles[i].style.width = `${size}px`; // Set size
        cursorCircles[i].style.height = `${size}px`; // Set size
        cursorCircles[i].style.background = color; // Set color
        cursorCircles[i].style.opacity = opacity.toString();
        cursorCircles[i].style.border = border.toString();
      }
      requestAnimationFrame(updateCursor);
    }

    document.addEventListener("mousemove", onMouseMove, false);
    initCursor();
    updateCursor();

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [color, size]); // Re-run effect if props change

  return <div id="waveCursor" />;
};

export default FluidCursor;
