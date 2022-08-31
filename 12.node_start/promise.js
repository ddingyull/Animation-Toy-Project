//@ts-check
const fs = require('fs').promises;

/**
 * 1. resolve자체는 단순히 명칭이고 then과의 상관관계만 이해하면 되는지
 * 2. data라는 콜백매개변수는 result와 어떻게 다른지
 */
// fs.readFile('readme.txt', 'utf-8')
// .then((data)=>{
//   console.log('1번', data);
//   return fs.readFile('readme.txt', 'utf-8');
// })
// .then((data)=>{
//   console.log('2번', data);
//   return fs.readFile('readme.txt', 'utf-8');
// })
// .then((data)=>{
//   console.log('3번', data);
//   return fs.readFile('readme.txt', 'utf-8');
// })
// .then((data)=>{
//   console.log('4번', data);
//   return fs.readFile('readme.txt', 'utf-8');
// })
// .catch((err) => {
//   console.log(err);
// });


/**
 * async
 * await : resolve가 나올 떄까지 일단 코드가 정지되었다가 실행되어 순차적으로 실행될 수 있음
*/
async function main() {
  let data = await fs.readFile('readme.txt', 'utf-8');
  console.log('1번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('2번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('3번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('4번', data);
}

main();