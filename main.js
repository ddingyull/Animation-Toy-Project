//single element
// const form = console.log(document.getElementById('todo-form'));
// console.log(form);
// const form = document.querySelector('#todo-form');
// console.log(form);


//multiple element
// 커리셀렉터로 가져오기(권장)
// const items = document.querySelectorAll('.item');
// items.forEach(()=>{
//   console.log(items);
// })
// 클래스 이름으로 가져오기
// console.log(document.getElementsByName('item'));
// 태그 이름으로 가젹오기
// console.log(document.getElementsByTagName('li'));

const todos = document.querySelector('#todo-list');
// // todos.remove();
// todos.lastElementChild.textContent = "red"
// todos.lastElementChild.innerHTML = "<h1>hello</h1>"

const button = document.querySelector('.submit');
const todoInput = document.querySelector('#todo-input');
const msg = document.querySelector('#msg')
button.addEventListener('click', onsubmit)

function onsubmit(e){
  // form의 특성상 계속 다시제출되는 부분 때문
  e.preventDefault();

  if(todoInput.value === ""){
    msg.style.display = "block";
    setTimeout(()=>msg.style.display='none', 2000)
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(todoInput.value));
  todos.appendChild(li);
  li.classList.add('item');
  todoInput.value = "";

}

