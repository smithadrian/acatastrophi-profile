# slate-starter

## This is the starter kit for the Slate web framework.
---

### Sample Components:

_in `app/components`_

- Banner
- Button
- Footer
- Nav
- Panel
---

### Sample CSS:

_- in `app/css`_

- `app-css.css` (for non-Markdown content)
- `app-markdown.css`
---

### Sample Navigation:
_- in `app/menus`_

- `app-menus-command.ts` 3 commands (navigable URLs)
- `app-menus-content.ts` 2 menus (displayable list of buttons)
---

### Sample Content:

_- in `app/slates`_

- `app/slates/app-slates-panel.ts` 3 panels (page content)
---

### Installation

- Run `npm install` in the repo's root folder.
---

### Running

1. Run `npx vite` in the repo's root folder.
1. Visit `localhost:3000` in the browser.
---
---

## Adding a "page"

to add in a "page" with the preloaded content there are a few steps to take

1. in `app-menu-command.ts` create a new command with the desired name in this format `name: {}`.

2. in `app-slate-banners.ts` copy an existing banner and paste, changing the identifier to match the command. now the command can be navigated to using the url

``` 
export const name: framework.menu = {
  name: {
    class: "greenGradBk thickBanner centerHorizontal centerVertical",
    labelClass: "mediumFat thinDropShadow",
    label: html`<div>This is another page banner.</div>`,
  },
} 
```

3. in `app-slate-panels.ts` copy an existing panel and paste, changing the identifier to match the command

```
export const name: framework.menu = {
  name: {
    desc: html`<framework-icon icon="file-plus"></framework-icon>Another Page`,
    content: "This is another page's content.",
  },

}
```

4. in `app-menus-content.ts` copy an existing menu and paste, changing the identifier to match the command. Now the "page" can be navigated to using the nav bar.

```
  name: {
    icon: "cat",
    content: "illustrations",
    type: "bar",
    class: "barButton barTop primary",
    offset: -3,
  },
```
---
---
## Adding additional panels

- in `app-slates-panel.ts` copy an existing panel and paste changing the key name. *given command will auto show panels with key names*