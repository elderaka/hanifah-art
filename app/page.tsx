"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { WorkViewer } from "@/app/components/WorkViewer";
import { disciplines, imagesByIds, portfolioImages, profile } from "@/lib/content";

type WorkSection = {
  slug: string;
  title: string;
  summary: string;
  skills: string[];
  tools: string[];
  images: typeof portfolioImages;
};

const contents = [
  {
    title: "Editorial Design",
    slug: "editorial-design",
    items: ["Algorithm of Bamboo Installation", "Mematahkan Mitos Bioteknologi", "Cempaka", "Ensiklopedia Geodesi & Geomatika"]
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    items: ["Bayu Prana House", "Yuna Rose Bakes", "Vertibloom", "Digital Detox Day Website"]
  },
  {
    title: "Branding",
    slug: "branding",
    items: ["Kinanthi"]
  },
  {
    title: "Social Media",
    slug: "social-packaging",
    items: ["Selected social media work"]
  }
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("all-work");
  const previewImages = portfolioImages.filter((image) => [6, 11, 13, 16, 18].includes(image.id));
  const workSections = useMemo<WorkSection[]>(
    () => [
      {
        slug: "all-work",
        title: "Full portfolio",
        summary: "Start here if you want the whole deck in order, from the cover page to the contact strip.",
        skills: ["Editorial", "UI/UX", "Branding", "Web", "Social media"],
        tools: ["InDesign", "Illustrator", "Photoshop", "Figma"],
        images: portfolioImages
      },
      ...disciplines.map((discipline) => ({
        ...discipline,
        images: imagesByIds(discipline.imageIds)
      }))
    ],
    []
  );

  function openSection(slug: string) {
    setActiveSection(slug);
    requestAnimationFrame(() => {
      document.getElementById(`section-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main className="pageShell homeShell">
      <section className="coverStage" aria-labelledby="hero-title">
        <span className="floatBubble bubbleOne" />
        <span className="floatBubble bubbleTwo" />
        <span className="floatBubble bubbleThree" />
        <div className="coverTitleBubble">
          <p className="eyebrow">Graphic Design / 2026</p>
          <h1 id="hero-title">Portfolio</h1>
        </div>
        <div className="coverMetaPills">
          <span>{profile.name}</span>
          <span>2026</span>
        </div>
        <button className="coverArrow" type="button" onClick={() => openSection("all-work")}>
          View work
        </button>
      </section>

      <section className="hiBubble scrollPop" aria-label="Introduction">
        <strong>Hi!</strong>
        <p>{profile.intro}</p>
      </section>

      <section className="contentsBubble scrollPop" aria-label="Portfolio contents">
        <div className="sectionHeader">
          <p className="eyebrow">Contents</p>
          <h2>Pick a field and the page opens up.</h2>
        </div>
        <div className="contentsColumns">
          {contents.map((group) => (
            <button type="button" onClick={() => openSection(group.slug)} key={group.title} className="contentsGroup">
              <h3>{group.title}</h3>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </button>
          ))}
        </div>
      </section>

      <section className="bubbleSheet scrollPop">
        <div className="sectionHeader">
          <p className="eyebrow">Quick Look</p>
          <h2>A few pages before the full deck.</h2>
        </div>
        <div className="previewGrid">
          {previewImages.map((image) => (
            <figure key={image.id}>
              <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 100vw, 33vw" />
              <figcaption>
                <span>{String(image.id).padStart(2, "0")}</span>
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="accordionStack" aria-label="Portfolio sections">
        <div className="sectionHeader bubbleIntro scrollPop">
          <p className="eyebrow">Work</p>
          <h2>One page, six drawers.</h2>
          <p>Open a section, switch views, then slide through the images. Nothing leaves this page.</p>
        </div>
        {workSections.map((section, index) => {
          const open = activeSection === section.slug;

          return (
            <article className={`accordionItem scrollPop ${open ? "open" : ""}`} id={`section-${section.slug}`} key={section.slug}>
              <button className="accordionButton" type="button" aria-expanded={open} onClick={() => setActiveSection(open ? "" : section.slug)}>
                <span>{String(index).padStart(2, "0")}</span>
                <strong>{section.title}</strong>
                <em>{open ? "Close" : "Open"}</em>
              </button>
              <div className="accordionPanel">
                <div className="accordionInner">
                  <p>{section.summary}</p>
                  <div className="metaGrid compactMeta">
                    <div>
                      <span>Skills</span>
                      <p>{section.skills.join(" / ")}</p>
                    </div>
                    <div>
                      <span>Tools</span>
                      <p>{section.tools.join(" / ")}</p>
                    </div>
                  </div>
                  {open ? <WorkViewer images={section.images} title={section.title} /> : null}
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <section className="aboutContact bubbleSheet scrollPop" id="contact">
        <div>
          <p className="eyebrow">About</p>
          <h2>Clear first. Cute after.</h2>
          <p className="bodyCopy">{profile.currently}</p>
          <p className="bodyCopy">Based in {profile.location}. Most days, that means InDesign pages, Figma frames, and Adobe files that have to survive real deadlines.</p>
        </div>
        <aside className="contactPanel" aria-label="Contact">
          <p>Open for full-time and freelance conversations.</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.behance}>Behance portfolio</a>
        </aside>
      </section>
    </main>
  );
}
