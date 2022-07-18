//javascript로 불러와서 remove기능을 넣을 때
// let sapnEl = document.querySelector('span');
// sapnEl.remove();

//jQuery로 불러와서 remove기능을 넣을 때
// $("span").remove();


// function showValue() {
//   console.log($("input").val());
// }


// //제이쿼리는 선택자로 가져올 때 queryselectorAll의 역할을 한다 
// function showValue() {
//   $("input").val("가나다라마바사");
//   // document.querySelector("input").value = "가나다라마바사";
// }


// $("span").text("가나다라마바사");
// document.querySelector("span").textContent = "가나다라마바사";

// const inputText = document.querySelector('.text-input');
// const modifyBtn1 = document.querySelector('.modifybtn1');
// const modifyBtn2 = document.querySelector('.modifybtn2');
// const spanEl = document.querySelector('span');

// //자바스크립트
// modifyBtn1.addEventListener('click', function(){
//   inputText.setAttribute("placeholder","변경1을 누르셨습니다")
// })

// modifyBtn2.addEventListener('click', function(){
//   inputText.setAttribute("type", "radio")
// })


// //제이쿼리
// $(".modifybtn1").on("click",function(){
//   $(inputText).attr("placeholder", "변경1을 누르셨습니다");
// })

// $(".modifybtn2").on("click",function(){
//   $(inputText).attr("type", "radio");
// })

// function changeSpan() {
//   spanEl.textContent = inputText.value;
// }

// // jQuery로 할 경우
// $(".writebtn").on("click",function(){
//   $("span").text($(".text-input").val());
//   $("span").text(text);
// } )

// $(".modifybtn").on("click", function(){
//   $()
// })

//속성값 변경하기
// $( 선택자 ).attr( “속성”, “속성값” );
// document.querySelector(“선택자”).setAttribute(“속성”, “값“);

// $(".text-input").on("click", function(){
//   $(".text-input").attr("type", "button");
//   $(".text-input").attr("value", "button");
// })

//css 속성
//자바스크립트
// document.querySelector("div").style ="background-color: pink; font-size:40px"

// //제이쿼리
// $('div').css("background-color", "pink");
// const box = document.querySelector("div")
// const  modifyBtn1= document.querySelector(".modifybtn1")
// const modifyBtn2x = document.querySelector(".modifybtn2")

// function changeCSS() {
//   document.querySelector("div").style="background-color: orange"
// }
// function changeCSS2() {
//   $("div").css("background-color", "pink");
// }

//불러온 태그만 남기고 자식태그의 구문으로 삽입 
// $("p").html("<h1>루피</h1>");

// 자바스크립트
// document.querySelector("p").innerHTML= "<h1>루피</h1>";


// const li = document.createAttribute('li');
//   li.textContent = "추가했음";

// $(".me").before(li);
// $(".me").after(li);

//요소 추가 실습
// const textEl = document.querySelector(".text");
// const btnEl1 = document.querySelector(".btn1");
// const btnEl2 = document.querySelector(".btn2");
// const listEl = document.querySelector(".list");

// btnEl1.addEventListener('click', function() {
//   const addLi = document.createElement('li');
//     addLi.textContent = textEl.value;

//   listEl.append(addLi);
//   textEl.value = "";
// })

const children = document.querySelector("div");
const childNodes = document.querySelector("div");

//해당엘리먼트에만 적용
console.log(children);
//모든 엘리먼트에 적용
console.log(childNodes);

