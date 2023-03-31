let n1 = parseFloat(prompt("첫번째 수 입력: ", "1~50"));

let n2 = parseFloat(prompt("두번째 수 입력: ", "1~50"));
let sum_v;

sum_v = n1+n2

document.write("두수의합:"+sum_v.toFixed(2));
//toFixed() 소수 자리수 설정함수 - 객체.toFixed(2)
//parseInt 정수 parseFloat 상수표현
