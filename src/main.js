import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import model from './models/model'
import nextModel from './models/nextModel'
import Mustache from 'mustache'
import codeStub from './stubs/code.stub.html'
import shadeStub from './stubs/shade.stub.html'
import namer from 'color-namer'
import chroma from 'chroma-js'

function rgbToHex(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const pickrButton = Pickr.create({
  el: '.pickr',
  theme: 'nano', // or 'monolith', or 'nano'

  default: '#D8CF49',
  comparison: false,
  showAlways: true,
  container: '.pickr-ctrl',
  appClass: 'picker',
  useAsButton: true,
  components: {

    // Main components
    preview: true,
    opacity: false,
    hue: true,

    // Input / output Options
    interaction: {
      input: true
    }
  }
});

document.querySelectorAll('.color-col').forEach((el, key) => {
  el.innerHTML = Mustache.render(shadeStub, {color: key});
});

let output = model('#D8CF49');
paint(output, 0);

let next = nextModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255));
let output1 = model(rgbToHex(next.r1*255, next.g1*255,next.b1*255));
let output2 = model(rgbToHex(next.r2*255, next.g2*255,next.b2*255));
let output3 = model(rgbToHex(next.r3*255, next.g3*255,next.b3*255));
let output4 = model(rgbToHex(next.r4*255, next.g4*255,next.b4*255));
let output5 = model(rgbToHex(next.r5*255, next.g5*255,next.b5*255));
let output6 = model(rgbToHex(next.r6*255, next.g6*255,next.b6*255));
let output7 = model(rgbToHex(next.r7*255, next.g7*255,next.b7*255));
let output8 = model(rgbToHex(next.r8*255, next.g8*255,next.b8*255));
let output9 = model(rgbToHex(next.r9*255, next.g9*255,next.b9*255));

paint(output1, 1);
paint(output2, 2);
paint(output3, 3);
paint(output4, 4);
paint(output5, 5);
paint(output6, 6);
paint(output7, 7);
paint(output8, 8);
paint(output9, 9);

name([output, output1, output2, output3, output4, output5, output6, output7, output8, output9]);

code(output, document.querySelector('.name').value);

let brandColor = { fit: false };

pickrButton.on('change', instance => {
  output = model(instance.toHEXA().toString());

  next = nextModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255));

  output1 = model(rgbToHex(next.r1*255, next.g1*255,next.b1*255));
  output2 = model(rgbToHex(next.r2*255, next.g2*255,next.b2*255));
  output3 = model(rgbToHex(next.r3*255, next.g3*255,next.b3*255));
  output4 = model(rgbToHex(next.r4*255, next.g4*255,next.b4*255));
  output5 = model(rgbToHex(next.r5*255, next.g5*255,next.b5*255));
  output6 = model(rgbToHex(next.r6*255, next.g6*255,next.b6*255));
  output7 = model(rgbToHex(next.r7*255, next.g7*255,next.b7*255));
  output8 = model(rgbToHex(next.r8*255, next.g8*255,next.b8*255));
  output9 = model(rgbToHex(next.r9*255, next.g9*255,next.b9*255));


  let distances = {};

  for(let i = 0; i < 10; i++){
    let j = 0;
    i === 0 ? j = 0.5 : j = i;
    distances['1' + j] = chroma.deltaE(rgbToHex(output['r' + j]*255, output['g' + j]*255, output['b' + j]*255), instance.toHEXA().toString());
    distances['2' + j] = chroma.deltaE(rgbToHex(output1['r' + j]*255, output1['g' + j]*255, output1['b' + j]*255), instance.toHEXA().toString());
  }

  let sortable = [];
  for (let distance in distances) {
    sortable.push([distance, distances[distance]]);
  }

  sortable.sort(function(a, b) {
    return a[1] - b[1];
  });

  let index = sortable[0][0].slice(1);
  let color = sortable[0][0].slice(0, 1);
  brandColor = { index, color };

  let replace = chroma(instance.toHEXA().toString()).rgb();

  if(sortable[0][1] < 9){

    brandColor.fit = true;

    if(color === '1'){
      output['r' + index] = replace[0]/255;
      output['g' + index] = replace[1]/255;
      output['b' + index] = replace[2]/255;
    }
    if(color === '2'){
      output1['r' + index] = replace[0]/255;
      output1['g' + index] = replace[1]/255;
      output1['b' + index] = replace[2]/255;
    }
  }

  paint(output, 0);
  paint(output1, 1);
  paint(output2, 2);
  paint(output3, 3);
  paint(output4, 4);
  paint(output5, 5);
  paint(output6, 6);
  paint(output7, 7);
  paint(output8, 8);
  paint(output9, 9);
});

pickrButton.on('changestop', () => {

  let names = name([output, output1, output2, output3, output4, output5, output6, output7, output8, output9]);

  writeHex(output, 0);
  writeHex(output1, 1);
  writeHex(output2, 2);
  writeHex(output3, 3);
  writeHex(output4, 4);
  writeHex(output5, 5);
  writeHex(output6, 6);
  writeHex(output7, 7);
  writeHex(output8, 8);
  writeHex(output9, 9);
  code(output, document.querySelector('.name').value);


  if(brandColor.fit){
    document.getElementById('brand').innerHTML = '.bg-' + names[brandColor.color - 1] + '-' + brandColor.index*100;
    document.getElementById('fit').classList.add('hidden');
  } else {
    document.getElementById('brand').innerHTML = '.bg-brand';
    document.getElementById('fit').classList.remove('hidden');
  }

});

document.querySelector('.name').addEventListener('input', (e) => {
  let name = document.querySelector('.name').value;
  if(e.target.value !== '') name = e.target.value;
  code(output, name)
});

function code(output, name)
{
  let view = (output, name) => {
    return {
      'name': name,
      '50': chroma(output['r0.5']*255, output['g0.5']*255, output['b0.5']*255),
      '100': chroma(output.r1*255, output.g1*255, output.b1*255),
      '200': chroma(output.r2*255, output.g2*255, output.b2*255),
      '300': chroma(output.r3*255, output.g3*255, output.b3*255),
      '400': chroma(output.r4*255, output.g4*255, output.b4*255),
      '500': chroma(output.r5*255, output.g5*255, output.b5*255),
      '600': chroma(output.r6*255, output.g6*255, output.b6*255),
      '700': chroma(output.r7*255, output.g7*255, output.b7*255),
      '800': chroma(output.r8*255, output.g8*255, output.b8*255),
      '900': chroma(output.r9*255, output.g9*255, output.b9*255)
    }
  };

  if(document.querySelector('.name').value === '') name = document.getElementById('name0').innerHTML;
  name = name.replace(/\s/g, '');

  document.querySelector('.code').innerHTML = Mustache.render(codeStub, view(output, name));
}

function paint(output, i = 0)
{
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
  // document.getElementById('text' + i + '0.5').style.color = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
  // document.getElementById('text' + i + '1').style.color = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
  // document.getElementById('text' + i + '2').style.color = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
  // document.getElementById('text' + i + '3').style.color = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
  // document.getElementById('text' + i + '4').style.color = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
  // document.getElementById('text' + i + '5').style.color = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
  // document.getElementById('text' + i + '6').style.color = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
  // document.getElementById('text' + i + '7').style.color = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
  // document.getElementById('text' + i + '8').style.color = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
  // document.getElementById('text' + i + '9').style.color = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';

}

function writeHex(output, i = 0)
{
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




