//체크 박스 속성에 이벤트 처리하기
let check =document.querySelector("#shippingInfo");

//체크이벤트 구현
check.addEventListener("click",checkBox);

let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

let shippingName = document.getElementById("shippingName");
let shippingTel = document.getElementById("shippingTel");
let shippingAddr = document.getElementById("shippingAddr");


function checkBox(){
    //체크시 기본 정보값을 배송 정보에 저장
    if(check.checked == true){
        shippingName.value =billingName.value;
        shippingTel.value =billingTel.value;
        shippingAddr.value =billingAddr.value;
    }
    else{
        //체크 해제시 check.checked == false 입력상자공백
        shippingAddr.value="";
        shippingTel.value="";
        shippingName.value="";
    }
}//checkBox 닫기