import 'core-js/stable';
import 'regenerator-runtime/runtime';

// import _ from 'lodash';
import './css/normalize.css';
import './css/style.css';
import './css/header.css';
import './css/tools.css';
import './css/bestseller.css';
import './css/clicker.css';
import './css/button.css';
import './css/item.css';
import './css/responsive.css';

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

/**
 * Sorting Select
 */
const sortButton = document.querySelector('.sort-button');
const sortListBox = document.querySelector('.sort-list-box');
const sortList = document.querySelector('.sort-list');

sortButton.addEventListener('click', () => {
  sortListBox.classList.remove('sort-list-closed');
  // sortList.querySelector('li:nth-child(2) input').focus();
  // console.log(sortList.querySelector('li:nth-child(2) input'))
})

sortList.addEventListener('click', (e) => {
  if (e.target.tagName === 'INPUT') {
    sortButton.textContent = e.target.value;
    sortList.querySelector('li:first-child').textContent = e.target.value;
    sortList.querySelectorAll('li').forEach(item => {
      item.classList.remove('sort-item-selected');
    })
    e.target.parentElement.classList.add('sort-item-selected');
  }

  sortListBox.classList.add('sort-list-closed');
})

/**
 * Clicker
 */
const clickers = document.querySelectorAll('.clicker');

function inc(form) {
  const clickerInput = form.querySelector('.clicker-input');
  const priceValue = +form.querySelector('.price').textContent;
  const  total = form.querySelector('.total');
  clickerInput.value++;
  const totalValue = priceValue * clickerInput.value;
  total.textContent = totalValue;
}

function dec(form) {
  const clickerInput = form.querySelector('.clicker-input');
  clickerInput.value--;
  if (clickerInput.value < 1 ) {
    clickerInput.value = 1;
    return;
  }   
  const priceValue = +form.querySelector('.price').textContent;
  const  total = form.querySelector('.total');
  const totalValue = priceValue * clickerInput.value;
  total.textContent = totalValue;
}

function handelClick(e) {
  const target = e.target;
  let elem = target;
  while(elem.tagName !== 'FORM') elem = elem.parentElement;
  if (target.classList.contains('btn-dec')) dec(elem); 
  if (target.classList.contains('btn-inc')) inc(elem);
}

clickers.forEach(clicker => clicker.addEventListener('click', (e) => handelClick(e)));