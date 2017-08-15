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
const pricePropName = "PRICE";

const calculator = (name, price) => {
  return{
    name,
    add(n1, n2){
      return n1 + n2
    },
    [pricePropName.toLowerCase()]: price
  }
}

const calc = calculator('Casio', '9.99');

log(calc.name)
log(calc.add(10, 33))
log(calc.price)
