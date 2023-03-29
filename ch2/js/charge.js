//놀이공원 입장료 계산
let age = parseInt(prompt('나이를 입력해주세요',"1"));
let charge;
//if 문
    if(age<8){
        document.write("취학전 아동입니다.<br>");
        charge = 1000;
    }
    else if(age >= 8 && age <14){
        document.write("초등학생입니다.<br>");
        charge = 2000;
    }
    else if(age >= 14 && age <20){
        document.write("중고등학생입니다.<br>");
        charge = 2500;
    }
    else{
        document.write("일반인입니다.<br>");
        charge = 3000;
    }
    
//공통
document.write("입장료는<span class ='access'> "+charge+'</span>원 입니다.');



