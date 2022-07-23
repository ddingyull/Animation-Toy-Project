//홀수와 짝수
//1안
function solution(num) {
  if(num % 2 === 0 ){
    return 'Even';
  } else {
    return 'Odd';
  }
}
//2안
function solution(num) {
  return (num % 2 === 0 ? 'Even' : 'Odd') ;
}



//수박수박수박
//1안
//피드백 : 수박은 문자열이기 때문에 answer=0이 아니라 ""문자열을 받을 수 있도록 하기
function solution(n) {
  let answer = '';
  for(let i = 1; i<n+1; i++) {
    if(i % 2 === 0) {
      answer += '박';
    } else{
      answer += '수';
    }
  }
  return answer;
}
//2안
//참고 : substring("시작위치", "종료위치") or substring("시작위치") / 종료 위치의 -1까지 잘려짐
function solution(n2){
  return '수박'.repeat(n2).substring(0,n2)
}



//약수의 합
//피드백 : 입력받은 값 k를 i가 나누었을 때 0이 되는 수가 약수(k와 i 자리 바뀌지 않도록 주의)
function solution(k){
  let sum = 0;
  for(let i = 1; i<=k+1; i++){
    if(k % i === 0) {
      sum += i;
    }
  }
  return sum;
}



//1~100의 배열 만들기 
  //for문
  //피드백 : 배열로 만들기 위해선 []에 push해야함, push[]가 아니라 push()임!
let array = [];
for(let i = 1; i<101; i++){
  array.push(i);
}
console.log(array);



//1~100의 배열의 합 구하기
  //1안) for문
  //피드백 : 배열의 i값들을 넣어주는 것이기 때문에 '변수이름()'가 아니라 '변수이름[]'임!
  let arrSum = 0;
  for(let i = 0; i<100; i++){
    arrSum += array[i];
  }
  console.log(arrSum);

  //2안) for of문
  let arrSum2 = 0;
  for(let num of array){
    arrSum2 += num;
  }
  console.log(arrSum2);

  //3안) forEach문
  let arrSum3 = 0;
  array.forEach(num2 => {arrSum3 += num2});
  console.log(arrSum3);

  //4안) reduce
  

  //동일한 요소same, 다른요소만diff배열 만들기

  //글자 수가 6글자인 것 찾아서 반환

  //평균구하기

  //번호 가리기
//   //1안 ) for문
// function solution(phone_number) {
//   let blind = '';
//   for(let i = 0; i<phone_number.length; i++){
//     if(i< phone_number.length-4)
//   }
// }
//   //2안 ) for of문
// function solution(phone_number) {
//   var answer = '';
//   let a = 0;  

//   for(let i of phone_number){
//       a++
//       if(a < phone_number.length-3) answer += '*';
//       else answer+= i;
//   }

//   return answer;
// }
//자릿수 더하기

//모의 고사

//없는 숫자 더하기

//나누어 떨어지는 숫자 배열





let numbers = [1, 2, 3, 4, 5, 6];
let fruits = ["사과", "바나나", "수박", "포도", "파인애플"];

numbers.forEach(function (number, index, array) {
  console.log(number, index, array);
});

fruits.forEach((fruit, i, arr) => {
    console.log(fruit, i, arr);
  });
  





