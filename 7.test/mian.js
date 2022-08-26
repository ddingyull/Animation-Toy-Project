const snbMenu = document.querySelector("#snb .sub_menu");
const snbBtn = document.querySelector("#snb .btn_menu");

snbBtn.addEventListener("click", function () {
  if (snbMenu.classList.contains("hide")) {
    snbMenu.classList.remove("hide");
  } else {
    snbMenu.classList.add("hide");
  }
});

const header = document.querySelector("header");
const logo = document.querySelector("header h1 a");
const gnb = document.querySelector("#gnb");
const sns = document.querySelector(".sns");

// window.addEventListener("resize", function(){
//   console.log(window.innerWidth);
// 브라우저 이너 크기가 750 이상일 때만 마우스오버 이벤트가 실행되도록 코드를 짰는데...
// 왜! 어째서! 아래 이벤트가 계속 발생하는걸까요?
// 일단 CSS에서 !important 처리해서 기능 구현은 했는데 궁금합니당...
//   if(window.innerWidth >= 750){
//     header.addEventListener("mouseover", function () {
//       gnb.style.display = "flex";
//       sns.style.display = "flex";
//       header.style.borderBottom = "1px solid white";
//       header.style.backgroundColor = "#fff";
//       header.style.opacity = "0.7";
//     });
//   }
// })
header.addEventListener("mouseover", function () {
  gnb.style.display = "flex";
  sns.style.display = "flex";
  logo.style.color = "#fff";
  header.style.borderBottom = "1px solid white";
  header.style.backgroundColor = "#001";
  header.style.opacity = "1";
});
header.addEventListener("mouseleave", function () {
  gnb.style.display = "none";
  sns.style.display = "none";
  logo.style.color = "#001";
  header.style.borderBottom = "none";
  header.style.backgroundColor = "transparent";
});

const videoPlay = document.querySelector(".video_play");

// 영상 재생 속도 조절
// videoPlay.playbackRate = 16.0;

// 여러개의 영상을 순차적으로 재생하는 로직
let source_front = "./video/video_01";
let source_back = ".mp4";
let text = document.querySelector("#changing_text");
let f_text = document.querySelector(".text p");
let source_front_number = 2;

videoPlay.addEventListener("ended", function () {
  source_front = source_front.slice(0, -1) + source_front_number;
  if (source_front == "./video/video_07") {
    source_front = "./video/video_01";
    source_front_number = 1;
  }
  videoPlay.setAttribute("src", source_front + source_back);
  if (source_front == "./video/video_02") {
    text.innerHTML = `The fool<br>wanders,<br>a wise man<br><strong>travels</strong>`;
  } else if (source_front == "./video/video_04") {
    text.innerHTML = `Shall we<br>go on<br>a <strong>travel?</strong>`;
  } else if (source_front == "./video/video_06") {
    text.innerHTML = `Just<br>Packing<br>Your <strong>bag</strong>`;
  } else if (source_front == "./video/video_01") {
    text.innerHTML = `You know?<br><strong>Thomas Fuller</strong><br>Said,`;
  }
  if (source_front == "./video/video_02") {
    f_text.innerHTML = `PARIS`;
  } else if (source_front == "./video/video_03") {
    f_text.innerHTML = `TOKYO`;
  } else if (source_front == "./video/video_04") {
    f_text.innerHTML = `NEWYORK`;
  } else if (source_front == "./video/video_05") {
    f_text.innerHTML = `SAHARA`;
  } else if (source_front == "./video/video_01") {
    f_text.innerHTML = `LONDON`;
  } else {
    f_text.innerHTML = `AMAZING</p> <p>SEOUL`;
  }
  source_front_number += 1;
});

window.onload = function () {
  if (f_text.classList.contains("scale_up")) {
    f_text.classList.remove("scale_up");
  } else {
    f_text.classList.add("scale_up");
  }
};

const btn = document.querySelector(".left_side_text ul li");
const btn_i = document.querySelector(".left_side_text ul li i");
const btn_strong = document.querySelector(".left_side_text ul li strong");
const btn2 = document.querySelector(".left_side_text ul .li_second");
const btn_i_2 = document.querySelector(".left_side_text ul .li_second .i_second");
const btn_strong_2 = document.querySelector(".left_side_text ul .li_second .strong_second");

btn.addEventListener("mouseover", function () {
  btn_i.style.color = "#fff";
  btn_strong.style.color = "#fff";
  btn.style.backgroundColor = "#001";
});
btn.addEventListener("mouseleave", function () {
  btn_i.style.color = "#001";
  btn_strong.style.color = "#001";
  btn.style.backgroundColor = "#fff";
});
btn2.addEventListener("mouseover", function () {
  btn_i_2.style.color = "#fff";
  btn_strong_2.style.color = "#fff";
  btn2.style.backgroundColor = "#001";
});
btn2.addEventListener("mouseleave", function () {
  btn_i_2.style.color = "#001";
  btn_strong_2.style.color = "#001";
  btn2.style.backgroundColor = "#fff";
});

const figure = document.querySelector("figure");
const left_side_text = document.querySelector(".left_side_text");

window.onload = function(){
  figure.style.width = "60%";
  left_side_text.style.left = "8vw";
}
// complete