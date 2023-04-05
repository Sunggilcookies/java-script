//아이템 리스트
let itemList = []

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", addList)

//아이템 추가 함수
function addList() {
    //item은 itemList에 push()로 저장
    let item = document
        .getElementById("item")
        .value;
    itemList.push(item);
    document
        .getElementById("item")
        .value = " ";
    document
        .getElementById("item")
        .focus();

    showList();
    //addlist 닫기
}

function showList() {
    // document.getElementById("itemList").innerText=itemList[0]
    let list = "<ul>"; //목록 리스트 변수
    for (let i = 0; i < itemList.length; i++) {
        //아이탬 배열 출력 document.getElementById("itemList").innerText=itemList[i]
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">X</li>"
    }
    list += "</ul>";
    document
        .getElementById("itemList")
        .innerHTML = list;
    //아이탬 삭제 x를 선택
    let removeList = document.querySelectorAㅏㅣll(".close");
    //클릭했을때 삭제 이벤트가 발생
    for (let i = 0; i < removeList.length; i++) {
        removeList[i].addEventListener("click", remove);
    }

    function remove() {
        let id = this.getAttribute("id"); //id값 가져옴
        itemList.splice(id, 1); // ㅐ해당 위치에서 1개 삭제
        //목록 보기
        showList();
    } //remove 닫기

} //showlist 닫기