/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
logTitle('Title');
/* coding examples */

const namesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Alex, Mel, Melanie, Valentina"]);
    }, 3000);

    setTimeout(() =>{
        reject("No data back from server, error was found")
    }, 4000);
});

const surnamesPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Cunha, Silva, C, Rodrigues"]);
    }, 3000);

    setTimeout(() =>{
        reject("No data back from server, error was found")
    }, 4000);
});


Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [names, surnames] = data;
    for (var i = 0; i < names.length; i++){ 
        log(`${names[i]} ${surnames[i]}`);
    }
}).catch(error => {
    log(error);
});