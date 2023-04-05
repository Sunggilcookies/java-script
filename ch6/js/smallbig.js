//이미지 매개변수 지정 
let bigPic = document.getElementById("cup");
let smallPics = document.querySelectorAll(".small")
console.log(smallPics.length);

// smallPics[0].onclick = showBig;

//클릭 이벤트 발생
for (let i = 0; i < smallPics.length; i++) {
    // smallPics[i].onclick = showBig; //showBig()호출
    //addEventlistener()이벤트 처리기(접두어 'on' 을뺌)
    smallPics[i].addEventListener("mouseover", showBig);
    //smallPics의 1,2,3을 mouseover라는 이벤트가 실행되었을때 
    //showBIg이라는 함수호출
    
    function showBig() {
        console.log(this.src); //클릭한 대상 (자기자신)
        bigPic.setAttribute("src", this.src)
        // showBig라는 함수는
        //bigPic의 src를 선택한 src로 변경해준다.
    }
}