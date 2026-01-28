// - 이벤트에 적용된 함수를 완성하세요
// 1. check() : 모든 항목의 공백을 체크하여 공백이 있는 경우 입력하라는 alert 대화상자에 메시지 출력하고
// submit이 이루어지지 않도록 합니다.
// 취미는 반드시 2개이상 체크하였는지 확인합니다.
// 2. idcheck() :
// 1)  id값이 있는지 체크하고 입력하지 않으면 "ID를 입력하세요"라는 메시지 출력
// 2)  id값을 입력하면 width=300, height=250"의 팝업창이 나타나도록 합니다.
// 3)  보여주는 페이지는 "idcheck.html"이며 주소창에 id를 입력한 값이 표시되도록 합니다.
// 예)
// http://127.0.0.1:5500/ch02/idcheck.html?id=
// 홍길동
// 3. move() : 주민번호 앞자리는 6자리 숫자이면 뒷자리로 포커스를 옮기고
// 주민번호 앞자리가 6자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 앞자리에 포커스 위치하게 합니다.
// 주민번호 뒷자리가 7자리 중 숫자가 아닌 경우 "숫자를 입력하세요"라는 메시지 출력과 뒷자리에 포커스 위치하게 합니다.
// 4. domain1() : select태그를 선택하면 id=domain인 input태그에 선택된 값이 나타나게 합니다.
// 직접입력을 선택하면 domain에 포커스를 줍니다.
// 직접입력이 아니고 선택한 경우에는 domain을 readOnly로 만들어 주세요.
// 5. post() : "이곳은 우편번호 검색하는 곳입니다."라는 팝업창(width=400, height=500)이 나타납니다.
// 보여주는 페이지는 "post.html"입니다.


window.onload = function() {
    const myform = document.getElementById('myform');
    const doubleCheckBtn = document.getElementById('doubleCheck');
    const jumin1 = document.getElementById('jumin1');
    const jumin2 = document.getElementById('jumin2');
    const sel = document.getElementById('sel');
    const postSearchBtn = document.getElementById('postSearch');

    myform.onsubmit = function() {
        return check();
    };

    doubleCheckBtn.onclick = function() {
        idcheck();
    };

    jumin1.onkeyup = function() {
        move();
    };
    
    jumin2.onblur = function() {
        move();
    };

    sel.onchange = function() {
        domain1();
    };

    postSearchBtn.onclick = function() {
        post();
    };
};

function check() {
    const f = document.myform;
    const inputs = f.querySelectorAll('input[type="text"], textarea');
    
    for (let i=0; i<inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            alert("모든 항목을 입력하세요.");
            inputs[i].focus();
            return false;
        }
    }

    if (!f.gender[0].checked && !f.gender[1].checked) {
        alert("성별을 선택하세요.");
        return false;
    }

    let hobbyCount = 0;
    for (let i=0; i<f.hobby.length; i++) {
        if (f.hobby[i].checked) {
            hobbyCount++;
        }
    }

    if (hobbyCount < 2) {
        alert("취미는 반드시 2개 이상 체크해야 합니다.");
        return false;
    }

    return true;
}

function idcheck() {
    const idInput = document.getElementById('id');
    const idValue = idInput.value;

    if (idValue === "") {
        alert("ID를 입력하세요");
        idInput.focus();
    } else {
        const url = "idcheck.html?id=" + idValue;
        window.open(url, "idwin", "width=300, height=250");
    }
}

function move() {
    const j1 = document.getElementById('jumin1');
    const j2 = document.getElementById('jumin2');

    if (j1.value.length === 6) {
        if (isNaN(j1.value)) {
            alert("숫자를 입력하세요");
            j1.value = "";
            j1.focus();
        } else {
            j2.focus();
        }
    }

    if (j2.value.length > 0 && isNaN(j2.value)) {
        alert("숫자를 입력하세요");
        j2.value = "";
        j2.focus();
    }
}

function domain1() {
    const sel = document.getElementById('sel');
    const domain = document.getElementById('domain');

    if (sel.value === "") {
        domain.value = "";
        domain.readOnly = false;
        domain.focus();
    } else {
        domain.value = sel.value;
        domain.readOnly = true;
    }
}

function post() {
    alert("이곳은 우편번호 검색하는 곳입니다.");
    window.open("post.html", "postwin", "width=400, height=500");
}