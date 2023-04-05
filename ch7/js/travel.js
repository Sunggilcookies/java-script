//아이템 리스트
let itemList = []

let addBtn = document.getElementById("add");
addBtn.addEventListener("click",addList)

//아이템 추가 함수
function addList(){
    //item은 itemList에 push()로 저장
    let item = document.getElementById("item").value;
    itemList.push(item);
    document.getElementById("item").value = " ";
    document.getElementById("item").focus();
    
    showList();
    
}
function showList(){
    // document.getElementById("itemList").innerText=itemList[0]
   let list = "<ul>"; //목록 리스트 변수
    for(let i=0;i<itemList.length; i++){
        //아이탬 배열 출력
        // document.getElementById("itemList").innerText=itemList[i]
        list += "<li>"+itemList[i]+"</li>"
    }
    list += "</ul>";
    document.getElementById("itemList").innerHTML=list;

}