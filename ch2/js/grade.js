
var a = parseInt(prompt("점수를 입력하세요."));
        
if(a<=100 && a>=90){
    grade= "A";
}
else if(a<90 && a>=80){
    grade= "B";
}
else if(a<80 && a>=70){
    grade= "C";}
else if(a<70 && a>=60){
    grade= "D";
}
else{
    grade= "E";
}55

document.write("학점은 <span class='grade'>"+grade+"</span>입니다.");