"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import type { PortfolioImage, ViewMode } from "@/lib/content";

type Props = {
  images: PortfolioImage[];
  title: string;
};

const modes: { id: ViewMode; label: string }[] = [
  { id: "final", label: "Final" },
  { id: "structure", label: "Structure" },
  { id: "process", label: "Process" }
];

export function WorkViewer({ images, title }: Props) {
  const [mode, setMode] = useState<ViewMode>("final");
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: -1 | 1) {
    scroller.current?.scrollBy({
      left: direction * scroller.current.clientWidth,
      behavior: "smooth"
    });
  }

  return (
    <section className="workViewer sectionFrame" aria-labelledby="viewer-title">
      <div className="viewerTopline">
        <div>
          <p className="eyebrow">Viewing Mode</p>
          <h2 id="viewer-title">{title}</h2>
        </div>
        <div className="viewTabs" role="tablist" aria-label="Portfolio view modes">
          {modes.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={mode === item.id}
              className={mode === item.id ? "active" : ""}
              onClick={() => setMode(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {mode === "process" ? (
        <div className="processGrid">
          {images.map((image) => (
            <article key={image.id}>
              <span>{String(image.id).padStart(2, "0")}</span>
              <h3>{image.caption}</h3>
              <p>{image.section}</p>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 100vw, 25vw" />
            </article>
          ))}
        </div>
      ) : (
        <>
          <div className="viewerControls" aria-label="Spread navigation">
            <button type="button" onClick={() => move(-1)}>
              Previous
            </button>
            <button type="button" onClick={() => move(1)}>
              Next
            </button>
          </div>
          <div
            className={`spreadScroller ${mode === "structure" ? "structureMode" : ""}`}
            ref={scroller}
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") move(-1);
              if (event.key === "ArrowRight") move(1);
            }}
            aria-label="Scrollable portfolio spreads. Use arrow keys or the previous and next buttons."
          >
            {images.map((image, index) => (
              <figure className="spread" data-spread key={image.id}>
                <div className="imageFrame">
                  <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 92vw, 48vw" priority={index === 0} />
                  {mode === "structure" ? (
                    <div className="spreadOverlay" aria-hidden="true">
                      <span>Grid</span>
                      <span>Margin</span>
                      <span>Hierarchy</span>
                    </div>
                  ) : null}
                </div>
                <figcaption>
                  <span>{String(image.id).padStart(2, "0")}</span>
                  <strong>{image.caption}</strong>
                  <em>{image.section}</em>
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      )}
      <span className="structureNote">Mode switch uses one shared image archive and native scroll snap.</span>
    </section>
  );
}
