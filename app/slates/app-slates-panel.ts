// App Slates
// Panels
// by David Bethune
//
// Defines content for the app-panel component.

// DEPENDENCIES
import * as framework from "framework/startup/framework-startup"
import { html } from "lit"

// HOME PANELS

export const home: framework.menu = {
  home: {
    img: { acat: "A cat.png" },
    desc: html`<framework-icon icon="cat"></framework-icon> Adrian Smith`,
    content: ["Welcome to my portfolio!", "I am passionate about bringing stories to life through art and technology." , " With a robust background in media arts and animation, I specialize in meticulously crafting narratives and visual experiences that captivate audiences." , "Whether through intricate illustrations, dynamic character designs, or immersive 3D animations, each project showcases my commitment to blending artistic flair with technical precision." , "Explore my portfolio to see how I bring ideas to life, leveraging my passion for storytelling to create memorable and impactful visual journeys."],
    default: true,
  },
}

// SAMPLE PANELS

export const skillsPage: framework.menu = {
  adobe: {
    desc: html`<framework-icon icon="pen-nib"></framework-icon>Adobe Suite`,
    content: ["proficient in the Creative Cloud Suite", "- Illustrator" , "- Photoshop" , "- InDesign" , "- Premier"],
    img: {products: "adobe.webp"}
  },
}

export const projectsPage: framework.menu = {
  scrubjay: {
    desc: html`<framework-icon icon="feather"></framework-icon>Weddings by Dallas` ,
    content: ["Five vector illustrations using Adobe Illustrator. These images are inspired by the California Scub-jay. Working closely with the client we were able to narrow down a specific design we could both be excited to move forward with", "Used by client in general marketing strategies, and brand recognition" , "Along with the style guide provided, this set of vector images were used in marketing materials such as business cards, brochures, and web design.", "The client was able to increase their brand recognition and awareness by utilizing the graphics to manage a cohesive visual design across all marketing campaigns.", "With the file type being formatted to SVG the client is able to use these images on printable material as well as using them via web components at any size without losing image clarity."],
    img: {projects: "scrubjay.png"}
  },
}

export const illustrations: framework.menu = {
  Acatastrophi: {
    desc: html`<framework-icon icon="fire"></framework-icon>Acatastrophi is created`,
    content: "This bitmap illustration was created in Clip Studio Paint.",
    img: {personal: "acat-creation.png"}
  },
}
export const about: framework.menu = {
  about: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is the about pagecontent.",
  },
}
