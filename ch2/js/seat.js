//입장객 수에 따른 좌석의 줄(행)수 계산
let customer = prompt("입장객은 몇명인가요"); //입장객 수
let colNum = 5; //열의 수
let rowNum; //행의 수

if (customer == null || colNum == null) {
    document.write("<p>입력이 취소되었습니다.</p>")

} else {

    //나머지가 없는 경우
    if (customer % colNum == 0) {
        rowNum = customer /colNum;

       ///나머지가 있는경우
    } else {
        rowNum = parseInt(customer / colNum) + 1;
    }

    // document.write(rowNum + "개의 줄이 필요합니다")
}
document.write("<table>")
for(var i=0; i< rowNum; i++){ //십의 자리수
    document.write("<tr>")
    for(var j = 1; j <=colNum; j++){ //일의자리수
        var seatNum =i*colNum + j;
        if(seatNum>customer) //좌석번호가 고객수보다 클때 빠져나옴
            break;
        
        document.write("<td>좌석"+seatNum+ "</td>");
    }
    
    document.write("</tr>");
}
document.write("</table>")


