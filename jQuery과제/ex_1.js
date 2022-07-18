
const pEL = document.querySelector("table");
const dateEl = document.querySelector("#date");
const contentEl = document.querySelector("#content");

let target = null;
pEL.addEventListener("click", function(e) {
  if(e.target.tagName === "P") {
    dateEl.value = e.target.textContent;
    target = e.target.parentNode; 
  }
})
function writeSchedule()  {
  const elEl = document.createElement("P");
  const contentEl = document.querySelector("#content");
  elEl.textContent = contentEl.value;
  target.append(elEl);
}

// $("p").on("click", function(e){
//   console.log(e.target.innerText);
//   const dateEl = document.querySelector("#date");
//   dateEl.value = e.target.innerText;
// })

  // function writeSchedule () {
  //     const divEl = document.createElement(“div”);
  //     divEl.textContent = contentEl.value;
  //     target.append(divEl);
  // }