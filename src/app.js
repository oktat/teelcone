/*
* File: app.js
* Author: Sallai András
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-03
* Github: https://github.com/oktat/teelcone
* Licenc: MIT
*/

import {calcVolume} from './utils.js';

const doc = {
  heightInput: document.querySelector('#height'),
  radius1Input: document.querySelector('#radius1'),
  radius2Input: document.querySelector('#radius2'),
  volumeInput: document.querySelector('#volume'),
  calcButton: document.querySelector('#calcButton'),
  clearButton: document.querySelector('#clearButton'),
  aboutButton: document.querySelector('#aboutButton')
};

doc.calcButton.addEventListener('click', () => {
  const height = Number(doc.heightInput.value);
  const radius1 = Number(doc.radius1Input.value);
  const radius2 = Number(doc.radius2Input.value);
  const volume = calcVolume(height, radius1, radius2);
  doc.volumeInput.value = volume;
});

doc.clearButton.addEventListener('click', () => {
  doc.heightInput.value = '';
  doc.radius1Input.value = '';
  doc.radius2Input.value = '';
  doc.volumeInput.value = '';
});

doc.aboutButton.addEventListener('click', () => {
  window.location.href = 'about.html';
});
