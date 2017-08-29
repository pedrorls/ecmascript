/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
import {coroutine as co} from 'bluebird';
logTitle('Title');
/* coding examples */

// const getRandomUsers = n => {
//     const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`)
//     fetchRandomUsers.then(data => {
//       data.json().then(randomUsers => {
//         log(JSON.stringify(randomUsers.results.length));
//         randomUsers.results.forEach(user => {
//           const {gender, email} = user;
//           log(`${gender} - ${email}`);
//         });
//       })
//     });
//   }


const getRandUsers = co(function* (n){
  const fetchRandomUsers = yield fetch(`https://randomuser.me/api/?results=${n}`);
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandUsers(10).then(randomUsers => {
  randomUsers.results.forEach(user => {
    const {gender, email} = user;
    log(`${gender} - ${email}`);
  });
}).catch(err => log);
