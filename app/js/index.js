/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
import Animal from './animal';
logTitle('Title');
/* coding examples */

const hello = () => {
  const es6 = 'ES6';
  return `Hello ${es6}`;
};

const powers = [1,2,3,4,5].map((number, index) => Math.pow(number, index));


const add = (n1, n2) => n1 + n2;

const milesToKm = (miles) => miles * 1.60934;

log(hello());
log(powers);
log(add(100,200));
log(milesToKm(100));
