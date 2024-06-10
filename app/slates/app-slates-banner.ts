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
    class: "rainbowBk thinBanner centerHorizontal centerVertical",
    labelClass: "bigFat thinDropShadow",
    label: "Acatastrophi",
  },
}

export const samplePage: framework.menu = {
  samplePage: {
    class: "blueGradBk thickBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is the sample page banner.</div>`,
  },
}

export const anotherPage: framework.menu = {
  anotherPage: {
    class: "greenGradBk thickBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is another page banner.</div>`,
  },
}
