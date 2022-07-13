const clock = document.querySelector("h2#clock");

/*
이렇게 하면 처음에 한번 받은 시간 분 초 그대로 변화없이 할당된 채로 있음
아마 이런 식도 함수 안에서 하면 제대로 될듯
const hour = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();
*/

function getClock(){
   // console.log(`${hour}:${min}:${sec}`);
   const date = new Date();
   const hour = String(date.getHours()).padStart(2,"0");
   const min = String(date.getMinutes()).padStart(2,"0");
   const sec = String(date.getSeconds()).padStart(2,"0");
   clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);