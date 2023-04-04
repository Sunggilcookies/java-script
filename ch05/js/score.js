//학생 5명의 국어,수학점수 
//score 배열을 선언, 값을 저장
let score = [
    [80,70],
    [90,60],
    [70,70],
    [95,90],
    [83,35]
]   

//전체 출력
for(let i=0;i<score.length;i++){
    for(let j=0;j<score[i].length;j++){
        document.write(score[i][j]+" ")
    }
    document.write("<br>");
}  
//과목별 총점
let korSum = 0; let mathSum = 0;

//과목별 평균
let korAvg, mathAvg;

//국어점수
for(let i=0;i<score.length;i++){
    korSum= korSum+score[i][0]
   
}
document.write("국어총점 : "+korSum+"<br>")

// 수학점수
for(let i=0;i<score.length;i++){
    mathSum= mathSum+score[i][1]
   
}
document.write("수학총점 : "+mathSum+"<br>")

//국어점수 평균
korAvg= korSum/score.length
document.write("국어평균 : "+korAvg+"<br>")

//수학점수 평균
mathAvg= mathSum/score.length
document.write("수학평균 : "+mathAvg+"<br>")