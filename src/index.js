import 'core-js/stable';
import 'regenerator-runtime/runtime';

import _ from 'lodash';
import './css/normalize.css';
import './css/style.css';
import Kitty from './img/kitty.jpg';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myKitty = new Image();
  myKitty.src = Kitty;
  myKitty.classList.add('kitty');
  element.appendChild(myKitty);

  return element;
}

document.body.appendChild(component());
