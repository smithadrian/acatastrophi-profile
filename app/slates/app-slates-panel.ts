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
    img: { slate: "slate-logo.jpg" },
    desc: html`<framework-icon icon="layer-group"></framework-icon>Slate&trade;
      Starter Kit`,
    content: [
      "You've successfully installed the Slate Starter Kit.",
      "Two sample pages with banners and panel content are included as examples.",
    ],
    default: true,
    menu: framework.omitMenuKey(framework.menus.primary, "home"),
  },
}

// SAMPLE PANELS

export const samplePage: framework.menu = {
  samplePage: {
    desc: html`<framework-icon icon="file"></framework-icon>Sample Page`,
    content: "This is the sample page content.",
  },
}

export const anotherPage: framework.menu = {
  anotherPage: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is another page's content.",
  },
}

export const about: framework.menu = {
  about: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is another page's content.",
  },
}