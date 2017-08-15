/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
logTitle('Title');
/* coding examples */
log(math.add(2,2));
log(math.sub(2,2));
log(math.div(2,2));
log(math.mult(2,2));
log(math.PI);
