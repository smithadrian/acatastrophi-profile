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
  samplePage: {
    icon: "dog",
    content: "Sample Page",
    type: "bar",
    class: "barButton barTop primary",
    offset: -1,
  },
  anotherPage: {
    icon: "pencil",
    content: "Illustrations",
    type: "bar",
    class: "barButton barTop primary",
    offset: -2,
  },

  about: {
    icon: "cat",
    content: "About",
    type: "bar",
    class: "barButton barTop primary",
    offset: -3,
  },
}

// FOOTER NAV
export const footer: framework.menu = {
  medium: {
    icon: "fab medium",
    url: "https://medium.com/@mimixco",
    offset: Object.keys(primary).length,
    class: "barButton barSide primary",
    type: "bar",
  },
  gitHub: {
    content: "GitHub",
    icon: "fab github",
    url: "https://github.com/garranplum",
    offset: Object.keys(primary).length,
    class: "barButton barSide primary",
    type: "bar",
  },
}

// LINKS
export const outside: framework.menu = {
  linkedin: {
    content: "linkedin",
    icon: "fab linkedin",
    url: "https://www.linkedin.com/in/adrian-smith-327938137/",
    class: "barButton barSide primary",
    type: "bar",
  },
}
