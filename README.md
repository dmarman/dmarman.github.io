![TailwindInk in action](https://raw.githubusercontent.com/dmarman/dmarman.github.io/master/bin/tailwind-ink.png)
# Tailwind Ink
[Tailwind Ink](https://dmarman.github.io/) is an AI palette generator trained with the [Tailwindcss](https://tailwindcss.com/) colors.

**Alert:** This tool was made as a side project, and the code is still messy. 

## How does it work?
It uses two neural networks to predict the full palette. The first, `models/shadesModel.js` it predicts all the shades vertically
from 50-900 given a certain color as input. The second, `models/nextModel.js` predicts horizontally all the colors given a certain shade as input.

### Models
When the models are imported using the `models/wrapper/wrapper.js`, they return a function that accepts a color in HEX
and returns a flat object with the RGB values ranging from 0 to 1 for all shades. 
Multiplying those by 255 will return a valid color.

``` javascript
import rawShades from './models/shadesModel'
import rawNext from './models/nextModel'
import modelWrapper from './models/wrapper/wrapper'

let nextModel = modelWrapper(rawNext);
let shadesModel = modelWrapper(rawShades);

let shades = shadesModel('#0064FF'); // shade-50: r0.5, g0.5, b0.5; shade-100: r1, g1, b1 ... 
```

### The Tool
Given a color picked by the user, `shadesModel.js` creates an initial full set of 50-900 shades. 
The picked color is also passed to `nextModel.js`, which returns the next 9 colors of the palette. Then, these 9 colors
are transformed individually into 50-900 shades using `shadesModel.js` again.

## Development
Download the repo and run:

```
npm install
npm run watch
```

## Training the model
The model training will start automatically if you open `shades.html` or `next.html`. Open the browser console to check
the training progress. Once finished, you can pick a color and play around with the model's results on the same page.
You can also train the model from your terminal typing:

``` bash
clear
node src/training/next.js
// or 
node src/training/shades.js
```

## Model Tuning
For tuning the model, you can adjust `training/shades.js` and `training/next.js`. 
If you are training on the browser, remember to have `npm run watch` running.

## Saving the model
Once the training finishes, the console will output a big inference function. 
You can copy-paste it in `models/nextModel.js` or `models/shadesModel.js`.
Remember to have `npm run watch` running. Otherwise, the model won't be imported in `index.html`.