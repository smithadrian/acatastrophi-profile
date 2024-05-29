// Slate App Components
// Button
// by David Bethune
//
// Provides a button configured by a slate.

// DEPENDENCIES
import * as framework from "framework/startup/framework-startup"
import { html } from "lit"
import { customElement, state } from "lit/decorators.js"
import { classMap } from "lit/directives/class-map.js"

@customElement("app-button")
export class appButton extends framework.appComponent {
  // PRIVATE PROPERTIES
  @state() homeClickCount = 0

  // HTML TEMPLATES

  barButton(slate: framework.slate) {
    // Find command root
    const [commandRoot] = slate.command ? slate.command.split("/") : [null]

    // Disable missing commands
    const disabled =
      !Object.keys(framework.commands).includes(commandRoot) && !slate.url

    const active = this.routeBase() == slate.command

    const elementClassMap = {
      disabled,
      [slate.class]: Boolean(slate.class),
      primary: !slate.class,
      active,
    }

    const hasParameters = this.routeParameters()

    const isLink =
      slate.url ||
      (Object.keys(slate).find(key => key in framework.commandProperties) &&
        (!active || (active && hasParameters)) &&
        !disabled)

    const isMobile = window.matchMedia("(max-width: 980px)").matches
    const isHome = slate.command == "home"
    const isHomeMobile = isMobile && isHome

    const linkDestination = slate.url ?? `/${slate.command}`

    const barButtonParts = [
      slate.type === "bar"
        ? html`<div
            class="bar"
            style="background-color:${framework.getColor(slate.index)}"
          ></div>`
        : null,
      this.buttonPart(slate),
    ]

    const barButtonElement = html`<div class=${classMap(elementClassMap)}>
      ${barButtonParts}
    </div>`

    const aWrapperElement = html`<a
      href=${linkDestination}
      title=${slate.url ?? (slate.desc as string) ?? (slate.content as string)}
      @click=${e => {
        e.preventDefault()
        if (isHomeMobile && this.homeClickCount == 0) {
          this.homeClickCount++
          return
        }
        framework.routeTo(slate.url ?? slate.command)
      }}
      >${barButtonElement}</a
    >`

    const finalButtonElement =
      isLink || isHomeMobile ? aWrapperElement : barButtonElement

    return finalButtonElement
  }

  buttonPart(slate) {
    typeof slate.icon === "string" ? (slate.icon = [slate.icon]) : null
    const iconComponents = slate.icon.map(
      icon => new framework.frameworkIcon(icon)
    )

    const elementClassMap = {
      button: true,
    }

    const componentParts = [
      slate.icon ? iconComponents : null,
      html`<div>${slate.content}</div>`,
    ]
    return html`<div class=${classMap(elementClassMap)}>${componentParts}</div>`
  }

  // RENDER
  // Runs every time the component is redrawn.

  render() {
    return this.barButton(this.slate)
  }
}
