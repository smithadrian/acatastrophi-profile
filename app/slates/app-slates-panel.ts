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
    content: ["Welcome to my portfolio!", "I am passionate about bringing stories to life through art and technology." , " With a background in media arts and animation, I specialize in crafting captivating narratives and visual experiences." , "Explore my work and discover how I blend creativity with technical expertise to breathe life into every project."],
    default: true,
  },
}

// SAMPLE PANELS

export const skillsPage: framework.menu = {
  skillsPage: {
    desc: html`<framework-icon icon="cat"></framework-icon>Sample Page`,
    content: "This is the sample page content.",
  },
}

export const projectsPage: framework.menu = {
  scrubjay: {
    desc: html`<framework-icon icon="feather"></framework-icon>Weddings by Dallas` ,
    content: "Weddings by Dallas.",
    img: {projects: "scrubjay.png"}
  },
}

export const illustrations: framework.menu = {
  illustrations: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is the illustration page content.",
  },
}
export const about: framework.menu = {
  about: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is the about pagecontent.",
  },
}
