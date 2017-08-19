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
const calculatePay = (yrSalary, bonus = {
    teamBonus: 0,
    emplyeeBonus: 0
}) =>
    yrSalary + bonus.teamBonus + bonus.emplyeeBonus;

log(calculatePay(22000, {teamBonus: 10000, emplyeeBonus: 6000}));