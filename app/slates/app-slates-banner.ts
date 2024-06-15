// App Slates
// Banners
// by David Bethune
//
// Defines content for the app-banner component.

// DEPENDENCIES
import * as framework from "framework/startup/framework-startup"
import { html } from "lit"

// EXPORTED CONSTANTS

export const home: framework.menu = {
  home: {
    class: "purpleGradBk thinBanner centerHorizontal centerVertical",
    labelClass: "bigFat thinDropShadow",
    label: "Acatastrophi",
  },
}

export const samplePage: framework.menu = {
  samplePage: {
    class: "purpleGradBk thickBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is the sample page banner.</div>`,
  },
}

export const anotherPage: framework.menu = {
  anotherPage: {
    class: "purpleGradBk thickBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is another page banner.</div>`,
  },
}
  export const about: framework.menu = {
    about: {
      class: "purpleGradBk thickBanner centerHorizontal centerVertical",
      labelClass: "mediumFat thinDropShadow",
      label: html`<div>This is another page banner.</div>`,
    },
}

export const illustrations: framework.menu = {
  illustrations: {
    class: "purpleGradBk thickBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is another page banner.</div>`,
  },
}