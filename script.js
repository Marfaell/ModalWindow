'use strict';

// this time the selected class is held in the variable

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// multiple buttons - wrong selection with querySelector (as only first one will get selected)
// That's why we use querySelectorALL
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// if you have only one line of code after for loop you don't have to use {}
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);
