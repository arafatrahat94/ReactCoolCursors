import React, { useEffect } from "react";
import "./FluidCursor.css";

const FluidCursor = ({
  cursorSize = 28,
  cursorColor = "blue",
  opacity = 1,
}) => {
  const TAIL_LENGTH = 20;
  let mouseX = 0;
  let mouseY = 0;
  let cursorCircles = [];
  let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = document.getElementById("waveCursor");

    function onMouseMove(event) {
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

        let xDiff = next.x - current.x;
        let yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        cursorCircles[i].style.transform = `translate(${current.x}px, ${
          current.y
        }px) scale(${i / TAIL_LENGTH})`;
        cursorCircles[i].style.width = `${cursorSize}px`; // Set size
        cursorCircles[i].style.height = `${cursorSize}px`; // Set size
        cursorCircles[i].style.background = cursorColor; // Set color
        cursorCircles[i].style.opacity = opacity;
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
  }, [cursorColor, cursorSize]); // Re-run effect if props change

  return (
    <cursorCircles
      id="waveCursor"
      cursorSize={cursorSize}
      cursorColor={cursorColor}
      opacity={opacity}
    />
  );
};

export default FluidCursor;
