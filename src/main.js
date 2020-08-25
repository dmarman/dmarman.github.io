import Pickr from '@simonwep/pickr'
import '@simonwep/pickr/dist/themes/nano.min.css';
import model from './model'
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

  default: '#2961B1',
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

let output = model('#376AB4');
draw(output);

pickrButton.on('change', instance => {
  output = model(instance.toHEXA().toString())

  draw(output);
});


document.querySelector('.name').addEventListener('input', (e) => {
  let name = 'valencia';
  if(e.target.value !== '') name = e.target.value;
  draw(output, name)
});

function draw(output, name = 'valencia')
{
  document.getElementById('output0.5').style.backgroundColor = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
  document.getElementById('output1').style.backgroundColor = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
  document.getElementById('output2').style.backgroundColor = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
  document.getElementById('output3').style.backgroundColor = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
  document.getElementById('output4').style.backgroundColor = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
  document.getElementById('output5').style.backgroundColor = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
  document.getElementById('output6').style.backgroundColor = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
  document.getElementById('output7').style.backgroundColor = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
  document.getElementById('output8').style.backgroundColor = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
  document.getElementById('output9').style.backgroundColor = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
  document.getElementById('text0.5').style.color = 'rgb(' + output['r0.5']*255 + ',' + output['g0.5']*255 + ',' + output['b0.5']*255 + ')';
  document.getElementById('text1').style.color = 'rgb(' + output.r1*255 + ',' + output.g1*255 + ',' + output.b1*255 + ')';
  document.getElementById('text2').style.color = 'rgb(' + output.r2*255 + ',' + output.g2*255 + ',' + output.b2*255 + ')';
  document.getElementById('text3').style.color = 'rgb(' + output.r3*255 + ',' + output.g3*255 + ',' + output.b3*255 + ')';
  document.getElementById('text4').style.color = 'rgb(' + output.r4*255 + ',' + output.g4*255 + ',' + output.b4*255 + ')';
  document.getElementById('text5').style.color = 'rgb(' + output.r5*255 + ',' + output.g5*255 + ',' + output.b5*255 + ')';
  document.getElementById('text6').style.color = 'rgb(' + output.r6*255 + ',' + output.g6*255 + ',' + output.b6*255 + ')';
  document.getElementById('text7').style.color = 'rgb(' + output.r7*255 + ',' + output.g7*255 + ',' + output.b7*255 + ')';
  document.getElementById('text8').style.color = 'rgb(' + output.r8*255 + ',' + output.g8*255 + ',' + output.b8*255 + ')';
  document.getElementById('text9').style.color = 'rgb(' + output.r9*255 + ',' + output.g9*255 + ',' + output.b9*255 + ')';
  document.getElementById('hex0.5').innerHTML = rgbToHex(output['r0.5']*255, output['g0.5']*255, output['b0.5']*255);
  document.getElementById('hex1').innerHTML = rgbToHex(output.r1*255, output.g1*255, output.b1*255);
  document.getElementById('hex2').innerHTML = rgbToHex(output.r2*255, output.g2*255, output.b2*255);
  document.getElementById('hex3').innerHTML = rgbToHex(output.r3*255, output.g3*255, output.b3*255);
  document.getElementById('hex4').innerHTML = rgbToHex(output.r4*255, output.g4*255, output.b4*255);
  document.getElementById('hex5').innerHTML = rgbToHex(output.r5*255, output.g5*255, output.b5*255);
  document.getElementById('hex6').innerHTML = rgbToHex(output.r6*255, output.g6*255, output.b6*255);
  document.getElementById('hex7').innerHTML = rgbToHex(output.r7*255, output.g7*255, output.b7*255);
  document.getElementById('hex8').innerHTML = rgbToHex(output.r8*255, output.g8*255, output.b8*255);
  document.getElementById('hex9').innerHTML = rgbToHex(output.r9*255, output.g9*255, output.b9*255);

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

  document.querySelector('.code').innerHTML = Mustache.render(stub, view(output, name));
}



