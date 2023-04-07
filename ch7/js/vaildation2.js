//유효성 검사
function checkMember(){
    let form = document.regForm;
    let id = form.uid;
    let pw1 = form.pw1;
    let pw2 = form.pw2;
    let mail = form.email;
    let pwCheck = form.pwCheck

    let pw_pat1 = /[a-zA-Z]/; 
    let pw_pat2 = /[!@#$%^&*]/; 
    let pw_pat3 = /[0-9]/; 
    
       if(id.value.length < 4){
        alert("아이디는 4~15자까지 가능합니다.")
        id.select();
        return false;
    }
    else if(mail.value == ""){
        alert("이메일은 필수 입력학몽입니다.")
        mail.focus();
        return false;
    }
    else if(pw1.value.length < 8 || !pw_pat1.test(pw1.value) || !pw_pat2.test(pw1.value) 
    || !pw_pat3.test(pw1.value)){
        alert("비밀번호는 영대소문자, 숫자 포함한 8자이상이여야 합니다.")
        pw1.select();
        return false;
        console.log(pw_pat1.test(pw1.value))
    }
    else if(pw1.value !=pw2.value){
        alert("비밀번호가 같지않습니다.")
        pw2.select();
        return false;
    }

    else{
        alert("넘어감");
        form.submit();
    }
    }


    