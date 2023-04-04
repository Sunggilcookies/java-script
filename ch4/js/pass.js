const today = new Date();
let theDay = new Date("2023-1-1");

let passedTime = today.getTime() - theDay.getTime()
passedTime = Math.round(passedTime/(24 * 60 * 60 * 1000));
document.getElementById("day").innerText=passedTime;