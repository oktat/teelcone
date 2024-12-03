/*
* File: utils.js
* Author: Sallai András
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-03
* Github: https://github.com/oktat/teelcone
* Licenc: MIT
*/

function calcVolume(height, radius1, radius2) {
  return 1.0/3.0 * Math.PI * radius1 * radius2 * height;
}

export {calcVolume}

