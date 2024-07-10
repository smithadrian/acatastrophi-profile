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

export const skillsPage: framework.menu = {
  skillsPage: {
    class: "purpleGradBk thinBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is the sample page banner.</div>`,
  },
}

export const projectsPage: framework.menu = {
  ProjectsPage: {
    class: "purpleGradBk thinBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>Contracted Projects.</div>`,
  },
}


export const illustrations: framework.menu = {
  illustrations: {
    class: "purpleGradBk thinBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>Personal Projects.</div>`,
  },
}
export const about: framework.menu = {
  about: {
    class: "purpleGradBk thinBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is the about page banner.</div>`,
  },
}