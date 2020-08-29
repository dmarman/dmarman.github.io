# Tailwind Ink
Tailwind Ink is an AI palette generator trained with the [Tailwindcss](https://tailwindcss.com/) colors.

**Alert:** This tool was made over a weekend and the code is still messy. 

## How does it work?
It uses two neural networks to predict the full palette. The first, `model.js` it predicts all the shades vertically
from 50-900 given a certain color as input. The second, `nextModel.js` predicts horizontally all the colors 
horizontally given a certain shade as input.

### Models
When the models in `model.js` and `nextModel.js` are imported, they return a function that accepts a color in HEX
and returns an object with the RGB values ranging from 0 to 1. Multiplying those by 255 will return a valid color.

`let shades = model('#0064FF');`

This repro do not include the code to train the models, but can be shared if needed.

### The Tool
Given a color picked by the user, `model.js` creates an initial full set of 50-900 shades. 
The picked color is also passed to `nextModel.js` which returns the next 9 colors of the palette. Then, these 9 colors
are transformed into 50-900 shades using again for each color `model.js`.

## Development
Download the repro and run:

```
npm install
npm run watch
```