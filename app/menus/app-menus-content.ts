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
    icon: "file",
    content: "Sample Page",
    type: "bar",
    class: "barButton barTop primary",
  },
  anotherPage: {
    icon: "file-plus",
    content: "Another Page",
    type: "bar",
    class: "barButton barTop primary",
  },

  about: {
    icon: "cat",
    content: "Another Page",
    type: "bar",
    class: "barButton barTop primary",
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
