export type ViewMode = "final" | "structure" | "process";

export type PortfolioImage = {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  section: string;
  caption: string;
};

export type Discipline = {
  slug: string;
  title: string;
  summary: string;
  skills: string[];
  tools: string[];
  imageIds: number[];
};

export const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    src: "/portfolio/2026/001.png",
    alt: "Portfolio 2026 cover for Hanifah Fathiarahma",
    width: 1400,
    height: 789,
    section: "Front Matter",
    caption: "Portfolio 2026 cover"
  },
  {
    id: 2,
    src: "/portfolio/2026/002.png",
    alt: "Profile introduction for Hanifah Fathiarahma",
    width: 1400,
    height: 275,
    section: "Front Matter",
    caption: "Profile introduction"
  },
  {
    id: 3,
    src: "/portfolio/2026/003.png",
    alt: "Experience, education, creative fields, and software skills",
    width: 1400,
    height: 588,
    section: "Front Matter",
    caption: "Experience and skills"
  },
  {
    id: 4,
    src: "/portfolio/2026/004.png",
    alt: "Portfolio contents listing editorial design, UI UX design, branding, and social media",
    width: 1400,
    height: 313,
    section: "Front Matter",
    caption: "Contents"
  },
  {
    id: 5,
    src: "/portfolio/2026/005.png",
    alt: "Editorial Design section divider",
    width: 1400,
    height: 243,
    section: "Editorial Design",
    caption: "Editorial Design"
  },
  {
    id: 6,
    src: "/portfolio/2026/006.png",
    alt: "Algorithm of Bamboo Installation editorial layout",
    width: 1400,
    height: 1162,
    section: "Editorial Design",
    caption: "Algorithm of Bamboo Installation"
  },
  {
    id: 7,
    src: "/portfolio/2026/007.png",
    alt: "Mematahkan Mitos Bioteknologi editorial layout",
    width: 1400,
    height: 1489,
    section: "Editorial Design",
    caption: "Mematahkan Mitos Bioteknologi"
  },
  {
    id: 8,
    src: "/portfolio/2026/008.png",
    alt: "Cempaka book layout",
    width: 1400,
    height: 1162,
    section: "Editorial Design",
    caption: "Cempaka"
  },
  {
    id: 9,
    src: "/portfolio/2026/009.png",
    alt: "Ensiklopedia Geodesi and Geomatika book layout",
    width: 1400,
    height: 1222,
    section: "Editorial Design",
    caption: "Ensiklopedia Geodesi & Geomatika"
  },
  {
    id: 10,
    src: "/portfolio/2026/010.png",
    alt: "UI UX Design section divider",
    width: 1400,
    height: 243,
    section: "UI/UX Design",
    caption: "UI/UX Design"
  },
  {
    id: 11,
    src: "/portfolio/2026/011.png",
    alt: "Bayu Prana House UI UX design",
    width: 1400,
    height: 1663,
    section: "UI/UX Design",
    caption: "Bayu Prana House"
  },
  {
    id: 12,
    src: "/portfolio/2026/012.png",
    alt: "Yuna Rose UI UX design",
    width: 1400,
    height: 1764,
    section: "UI/UX Design",
    caption: "Yuna Rose"
  },
  {
    id: 13,
    src: "/portfolio/2026/013.png",
    alt: "Vertibloom UI UX design",
    width: 1400,
    height: 1619,
    section: "UI/UX Design",
    caption: "Vertibloom"
  },
  {
    id: 14,
    src: "/portfolio/2026/014.png",
    alt: "Digital Detox Day web design",
    width: 1400,
    height: 1569,
    section: "Web Design",
    caption: "Digital Detox Day"
  },
  {
    id: 15,
    src: "/portfolio/2026/015.png",
    alt: "Branding section divider",
    width: 1400,
    height: 283,
    section: "Branding",
    caption: "Branding"
  },
  {
    id: 16,
    src: "/portfolio/2026/016.png",
    alt: "Kinanthi branding and packaging design",
    width: 1400,
    height: 1405,
    section: "Branding",
    caption: "Kinanthi"
  },
  {
    id: 17,
    src: "/portfolio/2026/017.png",
    alt: "Social Media section divider",
    width: 1400,
    height: 283,
    section: "Social Media",
    caption: "Social Media"
  },
  {
    id: 18,
    src: "/portfolio/2026/018.png",
    alt: "Selected social media post designs",
    width: 1400,
    height: 1694,
    section: "Social Media",
    caption: "Selected social media work"
  },
  {
    id: 19,
    src: "/portfolio/2026/019.png",
    alt: "Let's work together contact strip",
    width: 1400,
    height: 388,
    section: "Contact",
    caption: "Contact strip"
  }
];

export const disciplines: Discipline[] = [
  {
    slug: "editorial-design",
    title: "Editorial Design",
    summary: "Books taught me to care about margins, rhythm, and the small choices that make a page easy to read.",
    skills: ["Book layout", "Cover design", "Grid systems", "Typography"],
    tools: ["Adobe InDesign", "Illustrator", "Photoshop"],
    imageIds: [5, 6, 7, 8, 9]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    summary: "Interface ideas in Figma, shaped until the flow feels calm and the screen is easy to scan.",
    skills: ["Wireframing", "Visual UI", "Prototyping", "Usability thinking"],
    tools: ["Figma", "Illustrator", "Photoshop"],
    imageIds: [10, 11, 12, 13, 14]
  },
  {
    slug: "branding",
    title: "Branding",
    summary: "Logos, packaging, and brand pieces that can still hold together after the first mockup.",
    skills: ["Visual identity", "Packaging", "Logo systems", "Brand applications"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    imageIds: [15, 16]
  },
  {
    slug: "web-design",
    title: "Web Design",
    summary: "Web layouts for campaigns and small brands, with hierarchy before decoration.",
    skills: ["Responsive layouts", "Landing pages", "Information hierarchy", "Content structure"],
    tools: ["Figma", "Illustrator"],
    imageIds: [11, 13, 14]
  },
  {
    slug: "social-packaging",
    title: "Social & Packaging",
    summary: "Posts, event visuals, and packaging pieces that need to work quickly in the real world.",
    skills: ["Social posts", "Event visuals", "Merchandise", "Packaging"],
    tools: ["Illustrator", "Photoshop", "Canva"],
    imageIds: [16, 17, 18]
  }
];

export const profile = {
  name: "Hanifah Fathiarahma",
  role: "Graphic designer working across books, interfaces, branding, and web layouts.",
  location: "Kota Cirebon, Indonesia",
  email: "hanifahfathiarahma@gmail.com",
  behance: "https://www.behance.net/gallery/252342505/Portfolio-2026-Graphic-Design",
  intro:
    "Hi, I am Hanifah. I studied Visual Communication Design and spend most of my time around book layouts, UI drafts, brand pieces, and web visuals. I like designs that feel friendly, but still know where every margin goes.",
  currently:
    "Right now my work sits around editorial design, UI/UX, branding, web design, packaging, and social media."
};

export function imagesByIds(ids: number[]) {
  return ids.map((id) => portfolioImages.find((image) => image.id === id)).filter(Boolean) as PortfolioImage[];
}
