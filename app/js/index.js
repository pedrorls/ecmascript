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

 const address = {
 	city: 'LA',
 	country: 'USA',
 	postcode: 'LA44'
 };

 const name = {
 	firstName: 'Pedro',
 	lastName: 'Silva'
 };

const person = {...address, ...name};
log(JSON.stringify(person));