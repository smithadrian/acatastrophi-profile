// Slate Framework
// App Startup
// by David Bethune
//
// Sets app-specific values like version.

// IMPORTS
import * as framework from "framework/exports/framework-exports-modules"

// EXPORTS
export {}

// START APPLICATION ///////////////

// Save version in settings.
framework.settings.app = {
  ...framework.settings.app,
  env: "dev",
  name: "adriansmith.com",
  copyright: "Adrian Smith. All rights reserved.",
  version: "1.0",
  isDebug: framework.getSession("debug") === "true",
}
