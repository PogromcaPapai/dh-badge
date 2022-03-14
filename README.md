# Data hazards badges for GitHub

Based on the [Data Hazards Project](https://github.com/very-good-science/data-hazards).

## Example

[![Example labels](https://notch-marble-primrose.glitch.me/labels?d=general,misuse,automates,direct)](https://github.com/very-good-science/data-hazards)

```markdown
[![Example labels](https://notch-marble-primrose.glitch.me/labels?d=general,misuse,automates,direct)](https://github.com/very-good-science/data-hazards)
```

### The old syntax

This doesn't work on README

<object type="image/svg+xml" data="https://pogromcapapai.github.io/dh-badge/badge.svg?d=general,misuse,automates,direct"></object>

```html
<object type="image/svg+xml" data="https://pogromcapapai.github.io/dh-badge/badge.svg?d=general,misuse,automates,direct"></object>
```

## Usage

Add the following template. You can also switch the link to Data Hazards project for a link to the project's assessment.

```markdown
[![ALT TEXT](https://notch-marble-primrose.glitch.me/badge.svg?d=HAZARDS&size=SIZE)](https://github.com/very-good-science/data-hazards)]
``` 

Specify which hazard symbols you want to show using the `d` parameter (using `,` as the delimeter) and specify the size of one symbol using the `size` parameter (the default is 100).

### Available hazards

- `general` - **general** hazard,
- `misuse` - danger of **misuse**,
- `automates` - **automates** decision making,
- `privacy` - **privacy** concerns,
- `bias` - reinforces **bias**es,
- `classifies` - **classifies** or ranks people,
- `consent` - lacks informed **consent**,
- `difficult` - difficult to understand,
- `direct` - **direct** harm,
- `environment` - high **environment**al cost,
- `ignores` - **ignores** or opposes community needs,
- `lacks` - **lacks** community engagement,

## Why the `object` tag?

I don't really have any computing power to do this on my own, co I'm using JavaScript to render the SVG file. Because of that, I need the interactivity of the `object` tag.