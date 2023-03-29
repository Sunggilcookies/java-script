//'y'키를 누르면 "계속 반복", 'n'키를 누르면 "반복 중단" 그 이외의 키는 "키를 잘못눌렀습니다."
// 키입력시 따옴표 적을것

while(true) {
    var key = prompt("계속반복할까요?", "y,n");

    if(key == "y") {
       alert("계속 반복합니다.");

    } else if (key == "n") {

        alert("반복 중단");
        break;

    } else {
        alert("키를 잘못 눌렀습니다.");
    }

}

document.write("프로그램이 종료되었습니다.")