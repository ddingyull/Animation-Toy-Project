//@ts-check

const fs = require('fs');


//1️⃣ readFile, writeFile : 파일을 읽을 때 사용하는 메소드

// 📍참고) function함수를 사용할 경우 'this'가 자동으로 생긴다, 때문에 error함수는 용량이 조금 더 좋음
// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   // err
//   if(err){console.log(err);} else {console.log(data);};
// })

// const str = '파일 쓰기가 정상적으로 수행이 되면 이 문구가 파일에 들어갑니다';
// // writeFile : 파일을 초기화 시키고 입력한 '문자'를 넣는다, 작성하면 바로 파일이 생기면서 들어감
// fs.writeFile('readme.txt', str, 'utf-8', (err) => {
//   if(err) {console.log(err);} else {console.log('writeFile succeed');}
// })


//2️⃣ File-system 과 비동기 프로그래밍 -> 3️⃣ Promise로 바꿔보기(promise.js파일에서!)
// 1번 -> 4번 일꾼 순으로 진행 X
// 1,2,3,4 동시에 실행되어 매번 먼저 완료되는 시간이 다름
// 1번 안에 2->4 순서로 넣을 경우 순서대로 실행될 것
// Sync : 동기적 실행되도록, async : 비동기적으로 실행되도록 

// 1번 일꾼
fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번 일꾼', data.toString);

  // 2번 일꾼
  fs.readFile('readme.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번 일꾼', data.toString);

    // 3번 일꾼
    fs.readFile('readme.txt', 'utf-8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번 일꾼', data.toString);

      // 4번 일꾼
      fs.readFile('readme.txt', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }
        console.log('4번 일꾼', data.toString);
      });
    });
  });
});

/**📍참고) Sync : 일단 기다리고 값이 들어왔을 때 움직이기 때문에 실행순서를 정하기 좋지만 
로컬이 아닌 서버 상에서 작동할 때는 안정성이 좋지않아 쓰지않는 것을 권장!!

🔄 Sync로 위 코드 수정해보기 */
let data = fs.readFileSync('readme.txt', 'utf-8');
console.log('1번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('2번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('3번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('4번', data);

/**
 * 🔄 Promise함수로 위 코드 수정해보기 
 * Promise 특징
 * 1. 일종의 클래스이다.
 * 2. 매개변수로 resolve와 reject라는 이름의 콜백함수를 갖는다 
 * 3. resolve -> then으로 성공할 때 함수  / reject -> catch로 실패 또는 err일 때 함수
 * 4. resolve, reject 콜백함수 실행되지 않았을 경우 -> pending상태로 기다린다
*/
const promise = new Promise((resolve, reject) => {
  const yurim = 'old';
  if(yurim === 'old') {
    setTimeout(() => {
      resolve('yurim is old')
    }, 3000);
  } else {
    reject('yurim is getting old');
  }
});

// promise 안의 resolve의 함수를 then이 받아서 then의 함수를 실행
// 항상 data라는 이름으로 받는건지, 실행시키려면 then으로?
promise.then((data) => {   //data = 'yurim is old'
  console.log(data);
}).catch((err) => {       //data = 'yurim is getting old'
  console.log(err);
})
