let target;
let currentTarget;

// document.querySelectorAll("P").addEventListener();
${"td"}.on("click", function(e){
  target = e.target;
  currentTarget = e.currentTarget;

  if($(target).prop("tagName") ==="DIV") {
    $(target).remove();
  } else {
    $(target).val($(currentTarget).text());
  }
})

function writeSchedule()  {
  let task = $("#content").val();
  $(currentTarget).append(`<div>${task}</div>`)

  $("#content").val("");
}