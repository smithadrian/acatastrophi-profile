// Slate App Components
// Nav
// by David Bethune
//
// Provides top-line navigation.

// DEPENDENCIES
import * as framework from "framework/startup/framework-startup"
import { html } from "lit"
import { customElement, property } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

@customElement("app-nav")
export class appNav extends framework.appComponent {
  // PUBLIC PROPERTIES
  @property({ type: Object }) menu: framework.menu
  @property({ type: String }) addClass: string

  // HTML TEMPLATES

  linksPart(menu: framework.menu, addClass) {
    const linkList = Object.keys(menu ?? []).map((key, index) => {
      const colorIndex = index + ((menu[key] as framework.slate).offset ?? 0)
      const slate: framework.slate = {
        ...menu[key],
        index: colorIndex,
        active: this.routeBase() == menu[key].command,
        command: (menu[key] as framework.slate).command ?? key,
        content:
          (menu[key] as framework.slate).content ?? framework.unCamelCase(key),
      }
      return framework.routedComponent(
        new framework.appButton(slate),
        this.route
      )
    })

    const componentClassMap = {
      nav: true,
      [addClass]: Boolean(addClass),
    }

    return html`<div class=${classMap(componentClassMap)}>${linkList}</div>`
  }

  // CONSTRUCTOR
  // Runs once when the component class definition is loaded.
  constructor(menu: framework.menu) {
    super()
    this.menu = menu
  }

  // RENDER
  // Runs every time the component is redrawn.

  render() {
    return this.linksPart(this.menu, this.addClass)
  }
}
