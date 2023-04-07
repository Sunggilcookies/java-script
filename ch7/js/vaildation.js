//입력값 검증
var id = document.getElementById("user-id");
var pw1 = document.getElementById("user-pw1");
var pw2 = document.getElementById("user-pw2");

//비밀번호 정규표현식
let pw_pat1 = /[0~9A-Za~z]/;
let pw_pat2 = /[~!@#$%^&**]/;

id.onchange = checkId; //checkId()함수호출
pw1.onchange= checkPw;
pw2.onchange = comparePw;

//id.addEventListener("change", checkId);

//아이디 유효성 검사
function checkId(){
    if(id.value.length < 4 || id.value.length > 15){
        alert("아이디는 4자이상 15자까지 가능합니다.")
        id.select(); //선택범위 지정
    }

}
//비밀번호 유효성 검사
function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다.")
        pw2.focus(); //현재 텍스트 선택범위 지정
        pw2.value="";//기존문자 지우기
    }
}
function comparePw(){
    if(pw1.value !==pw2.value){
        alert("비밀번호가 일치하지 않습니다.")
        pw2.focus(); //
        pw2.value="";
    }

}