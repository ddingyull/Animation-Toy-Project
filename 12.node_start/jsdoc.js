// @ts-check

const arr = [10, 20, 30, 40, 50];

// for (let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for(let item of arr){
//   console.log(item);
// }

// for문처럼 배열에 있는 하나하나의 값에 접근해서 일을 시키는 함수 : map
// arr.map(
//   (element, index)=>{
//     console.log(index + '번 값은' + element);
//   }
// );

const result = arr.find((element) => {
  return element === 20;
})

console.log(result);