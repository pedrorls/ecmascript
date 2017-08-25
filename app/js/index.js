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

    static staticMethod(){
        log('this is a static method');
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

class Dog extends Animal{

    constructor(breed, name, age){
        super(name, age)
        this.breed = breed;
    }

    logBreed() {
        log(`${this.name} is a ${this.breed}`);
    }
}

const mike = new Dog("Viralata", "Mike", 2);
mike.logBreed();