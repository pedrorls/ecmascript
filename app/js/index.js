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

const person = {
  name: 'Pedro',
  cars: ['NewCivic', 'Cruze Hatch' ],
  toString: function() {
    //log(`${this.name} has ${this.cars}`)
    this.cars.forEach(car => {
      log(`${this.name} has ${car}`);
    });
  }
}

person.toString();
