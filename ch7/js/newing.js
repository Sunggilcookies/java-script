function addContents(){
    let newP = document.createElement("p")
    let text = document.createTextNode("은은하고 다채로운 꽃향")
    newP.appendChild(text);

    document.getElementById("info").appendChild(newP);


    //사진
    let newImg = document.createElement("img");
    let src = document.createAttribute("src");  

    //src 속성          
    src.value="./images/coffee-blue.jpg";
    newImg.setAttributeNode(src);
    // art 속성
    let alt = document.createAttribute("alt");
    alt.value= "커피 이미지"
    newImg.setAttributeNode(alt);

    //div 안에 이미지 태그 포함
    document.getElementById("info").appendChild(newImg);
    
}