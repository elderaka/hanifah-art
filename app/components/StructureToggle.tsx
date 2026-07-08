"use client";

import { useEffect, useState } from "react";

export function StructureToggle() {
  const [visible, setVisible] = useState(false);
  const label = visible ? "Hide structure grid" : "Show structure grid";

  useEffect(() => {
    document.documentElement.dataset.structure = visible ? "on" : "off";
  }, [visible]);

  return (
    <button className="structureToggle" type="button" aria-label={label} title={label} aria-pressed={visible} onClick={() => setVisible((value) => !value)}>
      <span className="structureIcon" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
    </button>
  );
}
