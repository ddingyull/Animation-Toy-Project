// @ts-check

// // 불러오고 싶은 모듈 호출 방법 1
// const animals = require('./animals');

// console.log(animals.animals);
// animals.showAnimals();

// // 불러오고 싶은 모듈 호출 방법 2
// const { animals, showAnimals } = require('./animals');

// console.log(animals);
// showAnimals();

// ES6 문법 : from뒤에 확장자명 적어주기
import { animals, showAnimals } from './animals.js';
console.log(animals);
showAnimals();

//js 파일 전체를 animals로 전체받아오라는 의미
import * as animals from './animals.js';