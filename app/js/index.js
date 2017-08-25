/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
logTitle('Title');
/* coding examples */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data back from server");
    }, 3000);

    setTimeout(() =>{
        reject("No data back from server, error was found")
    }, 4000);
});

promise.then(response =>{
    log(response);
}).catch(error =>{
    log(error);
});