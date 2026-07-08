"use client";

import Image from "next/image";
import { useRef } from "react";
import type { PortfolioImage } from "@/lib/content";

type Props = {
  images: PortfolioImage[];
  title: string;
};

export function WorkViewer({ images, title }: Props) {
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
      </div>

      <div className="viewerControls" aria-label="Spread navigation">
        <button type="button" onClick={() => move(-1)}>
          Previous
        </button>
        <button type="button" onClick={() => move(1)}>
          Next
        </button>
      </div>
      <div
        className="spreadScroller"
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
            </div>
            <figcaption>
              <span>{String(image.id).padStart(2, "0")}</span>
              <strong>{image.caption}</strong>
              <em>{image.section}</em>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="processGrid">
        {images.map((image) => (
          <article key={image.id}>
            <span>{String(image.id).padStart(2, "0")}</span>
            <h3>{image.caption}</h3>
            <p>{image.section}</p>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="100vw" />
          </article>
        ))}
      </div>
      <span className="structureNote">Desktop uses final spreads. Mobile uses the lighter process list.</span>
    </section>
  );
}
