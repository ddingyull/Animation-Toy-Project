function solution (num) {
  let answer = '';

  if(num % 2 === 0){
    answer = 'Even'
  } else {
    answer = "Odd"
  }

  return answer;
}

console.log(result);

function solution(n) {
  let answer = "";
  for(let i = 0; i<n; i++) {
      result += i%2===0 ? "수" : "박";
  }
  return answer;
}


function solution(n) {
  let answer = '';
  for(let i = 0; i<n; i++){
     answer += i % 2 === 0 ?'박':'수';
  }
  return answer;
}


let ayo = solution(13);

function solution(n) {
  let answer = '';
  for(let i = 1; i<n+1; i++){
     if(i % 2 === 1){
       answer += '수'
     } else {
       answer += '박'
     }
  }
  console.log(answer) ;
}

const hello = n => "수박".repeat(n).slice(0,n);

//수학 관련 메소드
let minus = -999;
console.log("abs :", Math.abs(minus))
console.log("min :", Math.min(1,2,3,4,5,))
console.log("max :", Math.max(1,2,3,4,5,))

console.log("ceil :", Math.ceil(3.14))
console.log("floor :", Math.floor(3.99))
console.log("round :", Math.round(3.99))
console.log("random :", Math.random(3.99))


//가장 작은수와 큰 수 모두 정수로 만들어 보시오
let nums = [-1.23, 13, 14.52, -33.53, 30];

//방법1
//최대,최소값 구하기
let maxNum = Math.max(nums)
let maxAnswer = Math.floor(maxNum)
//최대,최솟값을 정수값으로 구하기
let minNum = Math.min(nums)
let minAnswer = Math.floor(minNum)
//방법2 : ...은 ,를 기준으로 나열해주는 전개연산자
let max = Math.max(...nums)
let min = Math.min(...nums)
//평균
let average = ((maxAnswer + minAnswer) /2)



//1부터 100까지 중 랜덤한 숫자를 출력하시오
for(let i = 0; i<101; i++){
  let int = Math.abs(i)
  let intranDom = Math.random(int)
  console.log(intranDom);
}

Math.floor(Math.random() * 100); //100까지의 수 이기 때문에 100을 곱해줌


//1부터 100까지를 출력하시오
let arr =[];
for(let i = 0; i<101; i++){
  arr.push(i);
}
console.log(arr);


function solution(n) {
  var sum = 0;
  for(let i = 1; i<n+1; i++) {
      if(n % i === 0){
          sum += i
      } 
  }
  console.log(sum);
}

const numbers1 = [1, 2, 3, 4];
const numbers2 = [1, 2, 3, 4];

// .splice(시작할인덱스, 제거할개수, 추가할 내용)

console.log(numbers1.splice(2, 2));
console.log(numbers2.splice(2, 1, '77'));

let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];


기본적인 for문으로 numbers, fruits를 반환
index값 사용 가능
for(let i = 0; i<fruits.length; i++) {
  console.log(fruits[i])
}
for(let i = 0; i<numbers.length; i++) {
  console.log(numbers[i])
}

//for of문으로 numbers, fruits를 반환 (자주 사용하지 않음)
//for of에서는 index값을 제공하지 않음
for(let number of numbers){
  console.log(numbers)  
}
for(let fruit of fruits){
  console.log(fruits) 
}

//[].forEach로 numbers, fruits를 반환
// index값 사용 가능
/*
[].forEach(function(item, index, array)){
      진행할 logic...
    }
*/
numbers.forEach(function(item, index, array) {
  console.log(item, index, array);
});

fruits.forEach(function(it, ind, ar) {
  console.log(it, ind, ar);
});

//화살표 함수
numbers.forEach((ietm, index, array) => {
  console.log(item, index, array);
});

//배열의 합
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i< numbers.length; i++){
  sum1 += numbers[i];
}

for(let item of numbers){
  sum2 += item;
}

// numbers.forEach(num) => {
//   sum3 += num;
// }

let arr =[];
for(let i = 0; i<101; i++){
  arr.push(i);
}

let sum11 = 0;
let sum22 = 0;
let sum33 = 0;

for(let i =0; i<arr.length; i++){
  sum11 += arr[i];
}

for(let item of arr) {
  sum22 += item;
}

arr.forEach((item) => {
  sum33 += item;
});

console.log(sum11, sum22, sum33);

let numbers = [1,2,3,4,5]
let map = numbers.map(function(item){
  item++;
  return item;
})

let obj = fruits.map(function(item, index){
  return{
    id:index+1,
    name : item,
  }
})
// .reduce
let reducePra = [1, 2, 3, 4, 5, 6];
let reduce = numbers.reduce(function (sum, item, index, arr) {
  console.log(sum, item, index, arr);
  return sum + item;
});

let reduce = numbers.reduce(function (sum, item) {
  return sum + item;
});

let numbers = [1, 2, 3, 4, 5, 6];

let arr1 = numbers.filter(function(item){
  return item> 3;
})

let arr2 = numbers.filter((item) => item> 3);

console.log(arr);


// let arr;
 arr = numbers.filter((num) => num > 3);
 console.log(arr);
 const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
 const result = words.filter(word => word.length > 6);



let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

//same, diff라는 이름의 비어있는 배열을 만든다
let same = [];
let diff = [];

//fruits1, 2 겹치는 item을 구하는 식
  //(fruits2.includes(item))라는 조건이 true일 때만 작동함
same = fruits1.filter((item) => fruits2.includes(item));
  //위 식을 forEach로 풀어서 작성한 식
fruits1.forEach(function(item){
  if(fruits2.includes(item)){
    same.push(item);
  }
})

//fruits1, 2 중복되지 않는 item을 구하는 식
diff = fruits1.filter((item) => !fruits2.includes(item));
  //위 식을 forEach로 풀어서 작성한 식
  fruits1.forEach(function(item){
    if(!fruits2.includes(item)){
      same.push(item);
    }
  })
console.log(same)
console.log(diff)


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

let assignedOBj = Object.assign(obj1, obj2);
console.log(assignedOBj);
console.log(obj1);
console.log(obj2);



// 7월23일


