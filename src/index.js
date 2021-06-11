const TRACE = true;
const DEBUG = true;
const TESTING = true;

import {multExcept2x3} from './util.js';

let result;

document.addEventListener("DOMContentLoaded", function() {
  if (TRACE) console.log('DOMContentLoaded');
  let calc = document.getElementById("calc");
  calc.addEventListener('click', handleCalc);
});

function handleCalc() {
  if (TRACE) console.log('handleCalc');
  let xInput = document.getElementById("x");
  let yInput = document.getElementById("y");
  let resultInput = document.getElementById("result");
  let xValue = xInput.value;
  let yValue = yInput.value;
  result = multExcept2x3(xValue, yValue);
  resultInput.value = result;
}

