const inputTask = document.querySelector('.input-task');
const addBtn = document.querySelector('.input-btn');
const todoList = document.querySelector('.todo-list');

addBtn.addEventListener('click', function(){
  if(inputTask.value === ""){
    inputTask.setAttribute('placeholder', '할 일을 입력해주세요')
  } else {
      const addLi = document.createElement('li');       //li리스트가 들어갈 곳 만들어주기
      
      
      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox')         
      checkBox.addEventListener('click', function(){
        if(checkBox.checked === true) {
          // checkBox.parentNode.style = "text-decoration:line-through;"
          checkBox.parentNode.style.textDecoration = "line-through"
        } else {
          checkBox.parentNode.style.textDecoration = "none"
        }
      })
      
      
      const deleteBtn = document.createElement('input');
      deleteBtn.setAttribute('type', "button");
      deleteBtn.setAttribute('value', '삭제');
      // deleteBtn.setAttribute('onclick', 'deleteTask(this);') 삭제1

      // //한번에 여러개 붙일 수 있다
      // addLi.append(checkBox, inputTask.value, addLi);
      addLi.append(checkBox); //addLi에 checkBox를 자식으로 붙이기, append하면 부모요소를 모두 가져온다 
      // addLi.textContent = inputTask.value; 앞쪽 내용을 날려버림
      addLi.append(inputTask.value);
      addLi.append(deleteBtn);
      
      todoList.append(addLi);
      inputTask.value = "";
  }
})
//함수 밖으로 나와서 선언해야하며, this라는 매개변수와 이름이 겹치지 안헥 해야함
function deleteTask(t) {
  t.parentNode.remove();
}
// <삭제하는 방법 1>
todoList.addEventListener("click", function(e){
  // target은 그 이벤트(클릭)를 한 것만 삭제되게 된다 때문에 부모요소에 접근해서 삭제해주도록 해야해서 tagName을 추가
  //event의 target의 tagname이 input이면서 + 타입이  버튼인 경우 삭제해준다
  console.log(e.target.tagName);
  if(e.target.tagName === "INPUT" && e.target.getAttribute("type") === "button"){
    e.target.parentNode.remove();
  }
  //삭제가 아니라면 아무 반응이 일어나지 않도록 else는 작성하지 않는다
})


// <삭제하는 방법 2>
//함수 밖으로 나와서 선언해야하며, this라는 매개변수와 이름이 겹치지 안헥 해야함
// function deleteTask(t) {
//   t.parentNode.remove();
// }
//parentNode: 부모를 소환
/*<li>
   <input type="checkbox">
  </li>*/