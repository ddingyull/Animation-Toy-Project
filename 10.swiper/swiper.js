// /*aos로 scroll 효과*/
// AOS.init({
//   offset: 400,
//   duration: 3000,
// });

/*gsap로 scroll 효과*/

gsap.registerPlugin(ScrollTrigger);

//기본값을 내가 지정할 수 있음 
gsap.defaults({
  ease: 'none',
  duration: 2,
})

//timeline에 순서대로 애니메이션 걸어주기
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.wrap', //wrap이 시작점으로!
    start: "top top",
    marker: "true",
    end: "+=3000",
    scrub: true,
    pin: true,
  }
}); 
//요소 크키만큼 -100이동한 상태에서 from이니깐 제자리를 찾아갈 예정
tl.from('.blue', {xPercent: -100})
  .from('.green', {xPercent: 100})
  .from('.yellow', {yPercent: -100});


/*trigger 사용*/
// //box1이 보이면 돌아가도록 
// gsap.to('.box1', {
//   scrollTrigger: {
//     trigger : ".box1",
//     toggleActions: "restart",
//     markers: true, //start, end 위치 표기
//     scrub: true,  // scroll에 따라 끊어서 보기
//     // start: 'bottom 50%'; //애니메이션 시작위치 바꾸기
//     end: "+=3000", //애니메이션이 3000px만큼 움직임
//     pin: true, //애니메이션이 화면을 따라옴
//   },
//   x: 1000,
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// })

// //box3이 보이면 box2가 돌아가도록!
// gsap.to('.box2', {
//   scrollTrigger: {
//     trigger : ".box3",
//     toggleActions: "restart",
//   },
//   x: 1000,
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// })

/*gsap 사용해보기*/
// tl.to(".box1", {
//   x: 1000,
//   rotation: 720,
//   duration:3,
// }).to(".box1", {
//   backgroundColor: "orange",
//   duration: 1,
// }).to(".box1", {
//   x:0,
//   opacity: 0,
//   duration: 3,
// })

// gsap.to(".box1", {
//   x: 1000,
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// })

// gsap.from(".box2", {
//   x: 1000,
//   rotation: 720,
//   scale: 2,
//   duration: 3,
// })

