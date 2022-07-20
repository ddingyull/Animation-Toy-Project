//동작시킬 요소를 불러오기
const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");

// //내가 작성한 과제
// //사실 불러올 때 매개변수를 권장함, 전역변수는 추천하지않는 예외사항임
// let target = null;
// calendar.addEventListener("click", function(e) {
//   if(e.target.tagName === "P") {
//     date.value = e.target.textContent;
//     target = e.target.parentNode; 
//   }
// })
// function writeSchedule()  {
//   const elEl = document.createElement("P");
//   const contentEl = document.querySelector("#content");
//   elEl.textContent = contentEl.value;
//   target.append(elEl);


//쌤이 알려주는 방법
let target;
//클릭했을 때 event의 약자 e를 작동시킨다는 의미
//e하면 그 부분의 내용을 알려준다

//<첫번째 input에 날짜 넣어주기>
calendar.addEventListener("click", function(e){
    if(e.target.tagName === "P") {
      date.value = e.target.textContent;
      //let target으로 전역변수를 target으로 잡았기 때문에 가능한 것
      target = e.target.parentNode;
      //숫자옆의 빈 곳을 클릭하더라도 table의 자식인 p의 text가 할당되도록
      }else if (e.target.tagName === "TD"){
        //같은의미) date.value = e.target.querySelector("p").textContent
        date.value = e.target.firstChild.textContent;
        target = e.target;
      } 
      //<클릭하면 remove되도록 하기 단,노드로 걸어준 후 적용>
      // else if(e.target.tagName =="DIV") {
      //   e.target.remove();
      // }
      console.log(e.className);
    })

//<선택된 날짜에 두번째 input값의 내용을 넣어주기>
function writeSchedule()  {
  const divEl = document.createElement("div");
  const content = document.querySelector("#content");
  divEl.textContent = content.value;

  divEl.setAttribute("onclick", "deleteTask(this)");

// //<들어간 값에 클릭하면 line, 한번 더 클릭하면 remove해주기>
//   divEl.addEventListener("click",function(){
//     if(divEl.style.textDecoration === "line-through") {
//       divEl.remove();
//     } else {
//       divEl.style = "text-decoration:line-through";
//     }    
//   })
  target.append(divEl);
  content.value = "";
}

//t 는 위에서 선언한 this를 가져오는 약어
function deleteTask(t) {
  t.remove();
}

  //다음에 더 신경쓸 부분!! 
  //변수명 더 직관적으로 작성하기 

  // //<알고있으면 좋은점>
// calendar.addEventListener("click", function(e){
//   //e.target은 클릭된 요소를 알려준다
//   console.log("e-target",e.target);
//   //tagName은 찍은 요소를 문자열로 반환해주는 요소
//   console.log("e-target",e.target.tagName);
//   //e.target은 클릭된 요소의 부모를 알려준다
//   console.log("e-current",e.currentTarget);
// })