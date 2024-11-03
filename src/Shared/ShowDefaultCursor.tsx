import React, { useEffect } from "react";

interface HideCursorProps {
  hideDefaultCursor: boolean;
}

/**
 * HideCursor
 *
 * A component that hides the default cursor by adding a <style> tag to the
 * document head. This component doesn't render anything.
 *
 * @param {object} props
 * @param {boolean} [props.hideDefaultCursor=false] - If true, the default cursor will be hidden.
 * @returns {React.ReactElement}
 */
const HideCursor: React.FC<HideCursorProps> = ({
  hideDefaultCursor = true,
}) => {
  useEffect(() => {
    if (hideDefaultCursor) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = `
        body {
          cursor: none;
        }
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);

      // Cleanup function to remove styles when component unmounts or prop changes
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [hideDefaultCursor]);

  return null; // This component doesn't render anything
};

export default HideCursor;
