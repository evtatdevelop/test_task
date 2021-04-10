import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import _ from 'lodash';
import './css/normalize.css';
import './css/style.css';
import './css/responsive.css';
import './css/clicker.css';
import './css/button.css';

/**
 * Header navigation
 */
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