/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
import * as math from './math';
logTitle('Title');
/* coding examples */

class Animal {
    constructor(name, age){
        log(`${name} was created`);
        this.name = name;
        this.age = age;
    }

    eat(){
        log(`${this.name} is eating`);
    }

    sleep(){
        log(`${this.name} is sleeping`);
    }

    wakeUp(){
        log(``)
    }
}

const valentina = new Animal("valentina", 3);
valentina.eat();
valentina.sleep();