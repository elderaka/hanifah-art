"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    let frame = 0;

    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse") {
        return;
      }

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
        document.documentElement.dataset.cursor = "on";
      });
    }

    window.addEventListener("pointermove", move, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  return null;
}
