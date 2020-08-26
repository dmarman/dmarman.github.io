import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css'
import model from './model'
import nameModel from './nameModel'
import nextModel from './nextModel'
import Mustache from 'mustache'
import stub from './code.stub.html'

function rgbToHex(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

const pickrButton = Pickr.create({
  el: '.pickr',
  theme: 'nano', // or 'monolith', or 'nano'

  default: '#1D19A9',
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

let output = model('#1D19A9');
draw(output);

let next = nextModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255))
let output1 = model(rgbToHex(next.r1*255, next.g1*255,next.b1*255))
let output2 = model(rgbToHex(next.r2*255, next.g2*255,next.b2*255))
let output3 = model(rgbToHex(next.r3*255, next.g3*255,next.b3*255))

paint(output1 , 1)
paint(output2 , 2)
paint(output3 , 3)
name(output , '')
name(output1 , 1)
name(output2 , 2)
name(output3 , 3)

pickrButton.on('change', instance => {
  output = model(instance.toHEXA().toString())
  draw(output, document.querySelector('.name').value);

  next = nextModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255))
  output1 = model(rgbToHex(next.r1*255, next.g1*255,next.b1*255))
  output2 = model(rgbToHex(next.r2*255, next.g2*255,next.b2*255))
  output3 = model(rgbToHex(next.r3*255, next.g3*255,next.b3*255))
  paint(output1 , 1)
  paint(output2 , 2)
  paint(output3 , 3)
});

pickrButton.on('changestop', instance => {
  name(output , '')
  name(output1 , 1)
  name(output2 , 2)
  name(output3 , 3)
});

document.querySelector('.name').addEventListener('input', (e) => {
  let name = document.querySelector('.name').value;
  if(e.target.value !== '') name = e.target.value;
  draw(output, name)
});

function paint(output, i = '')
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
  document.getElementById('text' + i + '0.5').style.color = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
  document.getElementById('text' + i + '1').style.color = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
  document.getElementById('text' + i + '2').style.color = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
  document.getElementById('text' + i + '3').style.color = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
  document.getElementById('text' + i + '4').style.color = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
  document.getElementById('text' + i + '5').style.color = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
  document.getElementById('text' + i + '6').style.color = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
  document.getElementById('text' + i + '7').style.color = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
  document.getElementById('text' + i + '8').style.color = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
  document.getElementById('text' + i + '9').style.color = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
  document.getElementById('hex' + i + '0.5').innerHTML = rgbToHex(output['r0.5']*255, output['g0.5']*255, output['b0.5']*255);
  document.getElementById('hex' + i + '1').innerHTML = rgbToHex(output.r1*255, output.g1*255, output.b1*255);
  document.getElementById('hex' + i + '2').innerHTML = rgbToHex(output.r2*255, output.g2*255, output.b2*255);
  document.getElementById('hex' + i + '3').innerHTML = rgbToHex(output.r3*255, output.g3*255, output.b3*255);
  document.getElementById('hex' + i + '4').innerHTML = rgbToHex(output.r4*255, output.g4*255, output.b4*255);
  document.getElementById('hex' + i + '5').innerHTML = rgbToHex(output.r5*255, output.g5*255, output.b5*255);
  document.getElementById('hex' + i + '6').innerHTML = rgbToHex(output.r6*255, output.g6*255, output.b6*255);
  document.getElementById('hex' + i + '7').innerHTML = rgbToHex(output.r7*255, output.g7*255, output.b7*255);
  document.getElementById('hex' + i + '8').innerHTML = rgbToHex(output.r8*255, output.g8*255, output.b8*255);
  document.getElementById('hex' + i + '9').innerHTML = rgbToHex(output.r9*255, output.g9*255, output.b9*255);
}

function name(output, i)
{
  document.getElementById('name' + i).innerHTML = nameModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255))[0][0]
}

function draw(output, name = 'valencia')
{
  paint(output)

  let view = (output, name) => {
    return {
      'name': name,
      '50': rgbToHex(output['r0.5']*255, output['g0.5']*255, output['b0.5']*255),
      '100': rgbToHex(output.r1*255, output.g1*255, output.b1*255),
      '200': rgbToHex(output.r2*255, output.g2*255, output.b2*255),
      '300': rgbToHex(output.r3*255, output.g3*255, output.b3*255),
      '400': rgbToHex(output.r4*255, output.g4*255, output.b4*255),
      '500': rgbToHex(output.r5*255, output.g5*255, output.b5*255),
      '600': rgbToHex(output.r6*255, output.g6*255, output.b6*255),
      '700': rgbToHex(output.r7*255, output.g7*255, output.b7*255),
      '800': rgbToHex(output.r8*255, output.g8*255, output.b8*255),
      '900': rgbToHex(output.r9*255, output.g9*255, output.b9*255)
    }
  };

  // let colors = [];
  // //colors.push(nameModel(rgbToHex(output.r3*255, output.g3*255, output.b3*255))[0])
  // //colors.push(nameModel(rgbToHex(output.r4*255, output.g4*255, output.b4*255))[0])
  // colors.push(nameModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255))[0])
  // //colors.push(nameModel(rgbToHex(output.r6*255, output.g6*255, output.b6*255))[0])
  //
  // let sortable = [];
  // for (let color in colors) {
  //   sortable.push([colors[color]]);
  // }
  //
  // sortable.sort(function(a, b) {
  //   return b[1] - a[1];
  // });

  if(document.querySelector('.name').value === '') name = nameModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255))[0][0];

  document.querySelector('.code').innerHTML = Mustache.render(stub, view(output, name));
}



