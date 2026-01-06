/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/**
  The pxToRem() function helps you to convert a px unit into a rem unit, 
 */

function pxToRem(number, baseNumber = 16) {
  return `${number / baseNumber}rem`;
}
// function pxToRem(px, baseNumber = 16, gap = 6) {
//   return `clamp(
//     calc(${px / baseNumber}rem + 1vw - ${gap}px),
//     calc(${px / baseNumber}rem + 1vw),
//     calc(${px / baseNumber}rem + 1vw + 2px)
//   )`;
// }

export default pxToRem;
