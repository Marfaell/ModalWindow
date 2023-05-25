'use strict';

// this time the selected class is held in the variable

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// multiple buttons - wrong selection with querySelector (as only first one will get selected)
// That's why we use querySelectorALL
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// overall function to open the modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// if you have only one line of code after for loop you don't have to use {}
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
  // here we turned off the hidden function on these classes what allowed us to pop up the modal window and overlay;
}

// created overall function for turning off the modal window to keep the code dry
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// here we turned back on the hidden function on these classes what allowed us to close down the modal window and overlay
btnCloseModal.addEventListener('click', closeModal);
// this is also turning off the modal and overlay by clicking area around the window
overlay.addEventListener('click', closeModal);

// The last way to exit the modal window will be using a ESC key
// A keyboard event (global events) - addEventListener
// We are also looking at the event obejct created by JS, to action on the keypress
// So we have to give the function a paramater, so when the function is actioned by JS it will have an argument to work with
document.addEventListener('keydown', function (e) {
  // but since we want to close Modal window only when it's open, we have to see if class is active, we also invert the value with ! so it reads as not hidden
  // if (e.key === 'Escape') {
  //   if (!modal.classList.contains('.hidden')) {
  //     closeModal();
  // Here we have to call this function, to ensure it will happen

  // not to repeat the if's we can write the if function like this
  if (e.key === 'Escape' && !modal.classList.contains('.hidden')) {
    closeModal();
  }
});
