// @ts-check

// 기존문법
// const animals = ['dog', 'cat'];
// function showAnimals() {
//   animals.map((el) => console.log(el));
// }

// // 내보내고 싶은 모듈 정의
// module.exports = {
//   animals,
//   showAnimals,
// };

// ES6문법
export const animals = ['dog', 'cat'];

export function showAnimals() {
  animals.map((el) => console.log(el));
}

// export{ animals, showAnimals } => 한번에 보낼 수도 있고, 바로바로 보낼 수도 있음
