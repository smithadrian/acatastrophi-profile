// Slate Menus
// By David Bethune

// Defines commands available in menus.

// DEPENDENCIES
import * as framework from "framework/startup/framework-startup"
import { html } from "lit"

// EXPORTED CONSTANTS

// OVERALL NAVIGATION

// PRIMARY NAV
export const primary: framework.menu = {
  home: {
    icon: "house",
    type: "bar",
    class: "barButton barTop primary",
  },
  skillsPage: {
    icon: "dog",
    content: "Skills",
    type: "bar",
    class: "barButton barTop primary",
    offset: -1,
  },
  projectsPage: {
    icon: "pen",
    content: "Projects",
    type: "bar",
    class: "barButton barTop primary",
    offset: -2,
  },
  illustrations: {
    icon: "pencil",
    content: "Illustrations",
    type: "bar",
    class: "barButton barTop primary",
    offset: -3,
  },

    about: {
    icon: "cat",
    content: "About",
    type: "bar",
    class: "barButton barTop primary",
    offset: -4,
  },
}

// FOOTER NAV
export const footer: framework.menu = {
  linkedin: {
    content: "LinkedIn",
    icon: "fab linkedin",
    url: "https://www.linkedin.com/in/adrian-smith-327938137/",
    class: "barButton barSide primary",
    type: "bar",
  },
  resume: {
    content: "Resume",
    icon: "file",
    url: "",
  },
  slate: {
    icon: "layer-group",
    content: html`Slate&trade;`,
    url: "https://davidbethune.com/software/slate",
    class: "madeWith",
    desc: "Made with Slate. A web framework by David Bethune.",
  },
}
