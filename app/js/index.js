/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
logTitle('Title');
/* coding examples */

const getNums = function* (numbers){
    for(var i = 0; i < numbers.length; i++){
        yield numbers[i];
    }
}


const getNumsGen = getNums([1,2,3,4,5]);

const interval = setInterval(() => {
    const next = getNumsGen.next();
    if(next.done){
        log("Done");
        clearInterval(interval);
    }else {
        const num = next.value;
        log(num)
    }
}, 1000)