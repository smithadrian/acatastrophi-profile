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
    desc: html`<framework-icon icon="layer-group"></framework-icon>Slate&trade;
      Starter Kit`,
    content: ["hello world", "how are we feeling"],
    default: true,
  },
}

// SAMPLE PANELS

export const samplePage: framework.menu = {
  samplePage: {
    desc: html`<framework-icon icon="file"></framework-icon>Sample Page`,
    content: "This is the sample page content.",
  },
}

export const projectsPage: framework.menu = {
  projectsPage: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is another page's content.",
  },
}

export const about: framework.menu = {
  about: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is the about pagecontent.",
  },
}

export const illustrations: framework.menu = {
  illustrations: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is the illustration page content.",
  },
}
