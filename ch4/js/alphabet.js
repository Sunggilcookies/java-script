//배열에 알피벳 대문자 저장
let alphabet = new Array(26);
let char = 'A';



char = char.charCodeAt(0);//0번 인덱스/*
/*console.log(char);//code - a= 65 (ASCII-아스키코드)

char++; //char=char+1
console.log(char);//code - a= 65 (ASCII-아스키코드)
//저장(입력)


//문자로 출력해주는 함수 String.fromCharCode(ch)
console.log(String.fromCharCode(char))
*/
//배열에 저장(입력)
for(var i=0;i<alphabet.length;i++){
    alphabet[i] = String.fromCharCode(char);
    char++;
}
//출력
for(var i=0;i<alphabet.length;i++){
    document.write(i+alphabet[i]+"<br> ");
    
}