# Data hazards badges for GitHub

Based on the [Data Hazards Project](https://github.com/very-good-science/data-hazards).

## Example

[<object type="image/svg+xml" data="https://pogromcapapai.github.io/dh-badge/badge.svg?d=general,misuse,automates"></object>](https://github.com/very-good-science/data-hazards)

```
[<object type="image/svg+xml" data="https://pogromcapapai.github.io/dh-badge/badge.svg?d=general,misuse,automates"></object>](https://github.com/very-good-science/data-hazards)
```

## Usage

Add this template to your site:

```
[<object type="image/svg+xml" data="https://pogromcapapai.github.io/dh-badge/badge.svg?d=HAZARDS&size=SIZE"></object>](https://github.com/very-good-science/data-hazards YOU MIGHT ALSO LINK YOUR EVALUATION HERE)
``` 

Specify which hazard symbols you want to show using the `d` parameter (using `,` as the delimeter) and specify the size of one symbol using the `size` parameter (the default is 100).

## Why the `object` tag?

I don't really have any computing power to do this on my own, co I'm using JavaScript to render the SVG file. Because of that, I need the interactivity of the `object` tag.

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
