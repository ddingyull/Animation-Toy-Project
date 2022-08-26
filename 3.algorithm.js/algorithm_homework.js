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

  //4안) reduce 메소드 활용
  //피드백 : .reduce(리턴값, 배열의요소들)이기 때문에 따로 +수식을 써주지 않고 바로 return에 작성가능
  let arrSum4 = array.reduce((arrSum4, num) => {
    return arrSum4 + num
  })
  console.log(arrSum4);





  //동일한 요소same, 다른요소만diff배열 만들기
  let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"];
  let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"];

  let same = [];
  let diff = [];

  same = fruits1.filter((item) => fruits2.includes(item));
  diff = fruits1.filter((item) => !fruits2.includes(item));

  console.log(same);
  console.log(diff);
  




  //글자 수가 6글자인 것 찾아서 반환
  const fruits = ["Apple", "Banana", "Cherry!"];

  let words = [];
  words = fruits.filter(item => item.length === 6);
  console.log(words);






  //평균구하기
  function solution(arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
      sum += arr[i];
      let average = sum / arr.length;
    }
    return average;
  }





  //번호 가리기
  function solution(phone_number) {
    let blind = '';
    for(let i = 0; i<phone_number.length; i++){
      if(i< phone_number.length-4){
        blind += '*';
      } else{
        blind +=phone_number[i]
      }
    }
    return blind;
  }





//자릿수 더하기
//피드백 : 문자열로 바꿔줄 때는 N.toString()형태로 바꿔준다
function solution(N) {
  let jWord = N.toString();
  let answer = 0;
  for(let i = 0; i<jWord.length; i++){
    answer += Number(jWord[i]);
  }
  return answer;
}




//모의 고사 : 아래 코드인데 계속 정답이 아니라고나옴.. 
// let answers = [1,2,3,4,5,2,3,4,5,5]

function solution(answers) {
  //최종적으로 구해야하는 
  let answer = [];
  //수포자의 답을 각각의 변수이름으로 정의하기
  const answer1 = [1,2,3,4,5];
  const answer2 = [2,1,2,3,2,4,2,5];
  const answer3 = [3,3,1,1,2,2,4,4,5,5];
  //각 수포자가 맞힌 정답의 개수를 넣어줄 배열 만들기(단, 3명이니깐 index 3개로 만들기)
  let score = [0,0,0];

  //answers.length는 문제의 개수이다 각 문제별로 수포자들의 답이 같다면 score를 높여준다
  for(let i = 0; i<answers.length; i++){
    if(answers[i] === answer1([i%answer1.length])){score[0]++};
    if(answers[i] === answer2([i%answer2.length])){score[1]++};
    if(answers[i] === answer3([i%answer3.length])){score[2]++};
  }
  

  //가장 높은 score를 구한다 : Math.max(...이름) -> 가장 큰 숫자를 구하되 배열 형태를 의미함
  const maxScore = Math.max(...score);


  /*score.length라고 작성하긴하지만 .. 그냥 수포자 3명의 각 점수를 for문으로 돌려서 
    maxScor값과 동일한 값을 answer함수에 넣어준다 
    이때, answer.push(i+1)는 index는 0부터 시작하기때문에 1을 더해서 표현한다 */
  for(let i = 0; i<score.length; i++){
    return maxScore === score[i] ? 'answer.push(i+1)' : ''
  };

  //answer라고 선언한 배열에 maxScore값을 return한다 
  return answer;
}
//최종적으로 가장 많은 문제를 맞힌 사람이 누군지 배열에 담아 return하는 함수
console.log(solution(answers));






//없는 숫자 더하기
// let number = [1,2,3,4,5,6,7,8,9]

function solution(numbers) {
  //없는 숫자들의 합을 0으로 선언
  let emptySum = 0;

  //피드백 : i<numbers.length로 선언하면 모두 확인할 수 없음, 
  //9까지 점검하기 위해 10으로 간단히 해결가능
  for(let i = 0; i<10; i++){
    if(!number.includes(i)) {emptySum += i}; 
  }
  return emptySum;
}




//나누어 떨어지는 숫자 : 배열 아래 코드인데 계속 정답이 아니라고나옴.. 
function solution(arr, divisor) {
  var answer = [];

  for(let i= 0; i<arr.length; i++){
    arr[i] % divisor === 0 ? 'answer.push(arr[i])' : '-1';
  }
  answer.sort((a,b) => a - b);
  return answer;
}












