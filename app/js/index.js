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
const names = ['Chandler', 'Monica', 'Joe', 'Phoebe', 'Ross', 'Rachel'];
// const chandler = names[0];
// const monica = names[1];
// const joe = names[2]
const [a, b , c] = names;
log(`${a} ${b} ${c}`)
