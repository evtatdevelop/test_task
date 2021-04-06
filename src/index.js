import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import _ from 'lodash';
import './css/normalize.css';
import './css/style.css';

// import Kitty from './img/kitty.jpg';
// function component() {
//   const element = document.createElement('div');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   const myKitty = new Image();
//   myKitty.src = Kitty;
//   myKitty.classList.add('kitty');
//   element.appendChild(myKitty);

//   return element;
// }
// document.body.appendChild(component());
// const testNativeJS = document.body.querySelector('.svg-test');
// testNativeJS.addEventListener('click', () => alert('Teast Native JS'));

const navigationAccount = document.querySelector('.navigation__account');
const accountLink = navigationAccount.querySelector('.account-link');
const accountNav = navigationAccount.querySelector('.account-nav');
accountLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (navigationAccount.classList.contains('opened')) {
    navigationAccount.classList.remove('opened');
  } else {
    navigationAccount.classList.add('opened');
  }
});
document.addEventListener('click', (e) => {
  if (e.target.parentElement !== accountNav && e.target !== accountLink) {
    navigationAccount.classList.remove('opened');
  }
})
navigationAccount.querySelector('.account-nav > li:first-child').onclick = () => {
  document.querySelector('.navigation__account > a').focus();
}