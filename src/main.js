import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import rawShades from './models/shadesModel'
import rawNext from './models/nextModel'
import modelWrapper from './models/wrapper/wrapper'
import Mustache from 'mustache'
import codeStub from './stubs/code.stub.html'
import shadeStub from './stubs/shade.stub.html'
import namer from 'color-namer'
import chroma from 'chroma-js'

let nextModel = modelWrapper(rawNext);
let shadesModel = modelWrapper(rawShades);

function rgbToHex(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const initColor = '#0064FF';

const pickrButton = Pickr.create({
  el: '.pickr',
  theme: 'nano', // or 'monolith', or 'nano'

  default: initColor,
  comparison: false,
  showAlways: true,
  container: '.pickr-ctrl',
  appClass: 'picker',
  useAsButton: true,
  swatches: [
    // initColor,
    // '#AEC8B9',
    // '#576173'
  ],
  components: {
    preview: true,
    opacity: false,
    hue: true,
    interaction: {
      input: true,
      save: true
    }
  },
  i18n: {
    'btn:save': 'Apply',
    'aria:btn:save': 'Apply',
  }
});

document.querySelectorAll('.color-col').forEach((el, key) => {
  el.innerHTML = Mustache.render(shadeStub, {color: key});
});

let color0 = shadesModel(initColor);

let outputs = calculateColorsHorizontally(initColor, color0);

let brandColor = calculateBrandColor(initColor);

paint(outputs);
renderTexts();

pickrButton.on('change', instance => {

  color0 = shadesModel(instance.toHEXA().toString());

  outputs = calculateColorsHorizontally(instance.toHEXA().toString(), color0);

  brandColor = calculateBrandColor(instance.toHEXA().toString());

  paint(outputs);
  changeFavicon(instance.toHEXA().toString())
});

function calculateColorsHorizontally(initColor, color0)
{
  let next = nextModel(initColor);
  let color1 = shadesModel(rgbToHex(next.r1*255, next.g1*255,next.b1*255));
  let color2 = shadesModel(rgbToHex(next.r2*255, next.g2*255,next.b2*255));
  let color3 = shadesModel(rgbToHex(next.r3*255, next.g3*255,next.b3*255));
  let color4 = shadesModel(rgbToHex(next.r4*255, next.g4*255,next.b4*255));
  let color5 = shadesModel(rgbToHex(next.r5*255, next.g5*255,next.b5*255));
  let color6 = shadesModel(rgbToHex(next.r6*255, next.g6*255,next.b6*255));
  let color7 = shadesModel(rgbToHex(next.r7*255, next.g7*255,next.b7*255));
  let color8 = shadesModel(rgbToHex(next.r8*255, next.g8*255,next.b8*255));
  let color9 = shadesModel(rgbToHex(next.r9*255, next.g9*255,next.b9*255));

  return [color0, color1, color2, color3, color4, color5, color6, color7, color8, color9];
}

function calculateBrandColor(hex)
{
  let distances = {};

  for(let i = 0; i < 10; i++){
    let j = 0;
    i === 0 ? j = 0.5 : j = i;
    distances['0' + j] = chroma.deltaE(rgbToHex(outputs[0]['r' + j]*255, outputs[0]['g' + j]*255, outputs[0]['b' + j]*255), hex);
    distances['1' + j] = chroma.deltaE(rgbToHex(outputs[1]['r' + j]*255, outputs[1]['g' + j]*255, outputs[1]['b' + j]*255), hex);
    distances['2' + j] = chroma.deltaE(rgbToHex(outputs[2]['r' + j]*255, outputs[2]['g' + j]*255, outputs[2]['b' + j]*255), hex);
    distances['8' + j] = chroma.deltaE(rgbToHex(outputs[8]['r' + j]*255, outputs[8]['g' + j]*255, outputs[8]['b' + j]*255), hex);
    distances['9' + j] = chroma.deltaE(rgbToHex(outputs[9]['r' + j]*255, outputs[9]['g' + j]*255, outputs[9]['b' + j]*255), hex);
  }
  let sortable = [];
  for (let distance in distances) {
    sortable.push([distance, distances[distance]]);
  }

  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });

  let index = sortable[0][0].slice(1);
  let colorIndex = sortable[0][0].slice(0, 1);

  brandColor = { index, color: colorIndex, fit: false, similar: [], hex: hex};

  sortable.forEach((match) => {
    if(match[0].slice(0, 1) === colorIndex) brandColor.similar.push(match)
  });

  let replace = chroma(hex).rgb();

  if(sortable[0][1] < 1){

    brandColor.fit = true;

    if(colorIndex === '0'){
      outputs[0]['r' + index] = replace[0]/255;
      outputs[0]['g' + index] = replace[1]/255;
      outputs[0]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '1'){
      outputs[1]['r' + index] = replace[0]/255;
      outputs[1]['g' + index] = replace[1]/255;
      outputs[1]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '2'){
      outputs[2]['r' + index] = replace[0]/255;
      outputs[2]['g' + index] = replace[1]/255;
      outputs[2]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '8'){
      outputs[8]['r' + index] = replace[0]/255;
      outputs[8]['g' + index] = replace[1]/255;
      outputs[8]['b' + index] = replace[2]/255;
    }
    if(colorIndex === '9'){
      outputs[9]['r' + index] = replace[0]/255;
      outputs[9]['g' + index] = replace[1]/255;
      outputs[9]['b' + index] = replace[2]/255;
    }
  }

  return brandColor;
}

pickrButton.on('changestop', () => {
  renderTexts();
});

pickrButton.on('save', () => {
  renderTexts();
});

function renderTexts()
{
  let names = name(outputs);

  writeHex(outputs);

  if(brandColor.fit){
    document.getElementById('brand').innerHTML = '.bg-' + names[brandColor.color] + '-' + brandColor.index*100;
    document.getElementById('fit').classList.add('hidden');
  } else {
    document.getElementById('brand').innerHTML = '.bg-brand';
    document.getElementById('fit').classList.remove('hidden');

    let leftFit = '.bg-' + names[brandColor.similar[0][0].slice(0, 1)] + '-' + brandColor.similar[0][0].slice(1)*100;
    let rightFit = '.bg-' + names[brandColor.similar[1][0].slice(0, 1)] + '-' + brandColor.similar[1][0].slice(1)*100;

    document.getElementById('fits-between').innerHTML = leftFit + '<br>' + rightFit;
  }

  code(outputs, names, brandColor.hex);
}

function code(outputs, names)
{
  let colors = [];

  names.forEach((name, key) => {
    let output = outputs[key];

    colors.push({
      name: name,
      '50': chroma(output['r0.5']*255, output['g0.5']*255, output['b0.5']*255).hex(),
      '100': chroma(output.r1*255, output.g1*255, output.b1*255).hex(),
      '200': chroma(output.r2*255, output.g2*255, output.b2*255).hex(),
      '300': chroma(output.r3*255, output.g3*255, output.b3*255).hex(),
      '400': chroma(output.r4*255, output.g4*255, output.b4*255).hex(),
      '500': chroma(output.r5*255, output.g5*255, output.b5*255).hex(),
      '600': chroma(output.r6*255, output.g6*255, output.b6*255).hex(),
      '700': chroma(output.r7*255, output.g7*255, output.b7*255).hex(),
      '800': chroma(output.r8*255, output.g8*255, output.b8*255).hex(),
      '900': chroma(output.r9*255, output.g9*255, output.b9*255).hex()
    });
  });

  document.querySelector('.code').innerHTML = Mustache.render(codeStub, {colors, brandColor, unfit: !brandColor.fit});
}

function paint(outputs)
{
  outputs.forEach((output, i) => {
    document.getElementById('output' + i + '0.5').style.backgroundColor = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
    document.getElementById('output' + i + '1').style.backgroundColor = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
    document.getElementById('output' + i + '2').style.backgroundColor = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
    document.getElementById('output' + i + '3').style.backgroundColor = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
    document.getElementById('output' + i + '4').style.backgroundColor = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
    document.getElementById('output' + i + '5').style.backgroundColor = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
    document.getElementById('output' + i + '6').style.backgroundColor = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
    document.getElementById('output' + i + '7').style.backgroundColor = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
    document.getElementById('output' + i + '8').style.backgroundColor = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
    document.getElementById('output' + i + '9').style.backgroundColor = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
  });

  document.getElementById('title10').style.color = 'rgb(' + outputs[0].r7*255 + ',' + outputs[0].g7*255 + ',' + outputs[0].b7*255 + ')';
  document.getElementById('title9').style.color = 'rgb(' + outputs[0].r8*255 + ',' + outputs[0].g8*255 + ',' + outputs[0].b8*255 + ')';
  document.getElementById('title8').style.color = 'rgb(' + outputs[0].r9*255 + ',' + outputs[0].g9*255 + ',' + outputs[0].b9*255 + ')';
  document.getElementById('title7').style.color = 'rgb(' + outputs[0].r2*255 + ',' + outputs[0].g2*255 + ',' + outputs[0].b2*255 + ')';
  document.getElementById('title6').style.color = 'rgb(' + outputs[0].r3*255 + ',' + outputs[0].g3*255 + ',' + outputs[0].b3*255 + ')';
  document.getElementById('title5').style.color = 'rgb(' + outputs[0].r4*255 + ',' + outputs[0].g4*255 + ',' + outputs[0].b4*255 + ')';
  document.getElementById('title4').style.color = 'rgb(' + outputs[0].r5*255 + ',' + outputs[0].g5*255 + ',' + outputs[0].b5*255 + ')';
  document.getElementById('title3').style.color = 'rgb(' + outputs[0].r6*255 + ',' + outputs[0].g6*255 + ',' + outputs[0].b6*255 + ')';
  document.getElementById('title2').style.color = 'rgb(' + outputs[0].r7*255 + ',' + outputs[0].g7*255 + ',' + outputs[0].b7*255 + ')';
  document.getElementById('title1').style.color = 'rgb(' + outputs[0].r8*255 + ',' + outputs[0].g8*255 + ',' + outputs[0].b8*255 + ')';
  document.getElementById('title0').style.color = 'rgb(' + outputs[0].r9*255 + ',' + outputs[0].g9*255 + ',' + outputs[0].b9*255 + ')';

}

function writeHex(outputs)
{
  outputs.forEach((output, i) => {
    document.getElementById('hex' + i + '0.5').innerHTML = chroma(output['r0.5']*255, output['g0.5']*255, output['b0.5']*255);
    document.getElementById('hex' + i + '1').innerHTML = chroma(output.r1*255, output.g1*255, output.b1*255);
    document.getElementById('hex' + i + '2').innerHTML = chroma(output.r2*255, output.g2*255, output.b2*255);
    document.getElementById('hex' + i + '3').innerHTML = chroma(output.r3*255, output.g3*255, output.b3*255);
    document.getElementById('hex' + i + '4').innerHTML = chroma(output.r4*255, output.g4*255, output.b4*255);
    document.getElementById('hex' + i + '5').innerHTML = chroma(output.r5*255, output.g5*255, output.b5*255);
    document.getElementById('hex' + i + '6').innerHTML = chroma(output.r6*255, output.g6*255, output.b6*255);
    document.getElementById('hex' + i + '7').innerHTML = chroma(output.r7*255, output.g7*255, output.b7*255);
    document.getElementById('hex' + i + '8').innerHTML = chroma(output.r8*255, output.g8*255, output.b8*255);
    document.getElementById('hex' + i + '9').innerHTML = chroma(output.r9*255, output.g9*255, output.b9*255);
  });
}

function name(outputs)
{
  let names = [];

  outputs.forEach((output, i) => {
    let name = namer(rgbToHex(output.r5*255, output.g5*255, output.b5*255), { pick: ['x11']}).x11[0].name;

    if(names.includes(name)) name = namer(rgbToHex(output.r5*255, output.g5*255, output.b5*255), { pick: ['x11']}).x11[1].name;

    names.push(name);

    document.getElementById('name' + i).innerHTML = names[i];
  });

  return names;
}

let backgrounds = document.querySelectorAll('.test-text');

document.querySelector('.aa-button').addEventListener('click', () => {
  backgrounds.forEach(background => background.classList.toggle('hidden'))
});

let link = document.querySelector("link[rel~='icon']");
let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");

function changeFavicon(hex) {
  canvas.width = 16;
  canvas.height = 16;
  context.fillStyle = hex;
  context.fillRect(0, 0, 16, 16);
  context.fill();
  link.type = "image/x-icon";
  link.href = canvas.toDataURL();
}

