/**
 * #btn 클릭 이벤트 핸들러
 * @param {#} event
 */
const test1 = (event) => {
    console.log('#btn1 clicked!');
    console.log(event);  // 이벤트 객체
    console.log(event.target);  // 실제 이벤트가 발생한 요소
};

const $btn2 = document.querySelector('#btn2')
$btn2.onclick = (e) => {
    console.log('#btn2 클릭!')
    console.log(e);
}

// addEventListener : 동일이벤트 복수개의 핸들러를 바인딩할 수 있음
document.querySelector('#btn3').addEventListener('click', (e) => {
    console.log("#btn3 클릭!")
});

document.querySelector('#btn3').addEventListener('click', (e) => {
    console.log("#btn3 2번째 클릭 리스너!")
});

// 마우스 커서가 현재 태그로 focus 시 이벤트
document.querySelector("#nickname").addEventListener('focus', (e) => {
    console.log("#nickname이 focus 되었습니다.", e);
});

// 마우스 커서가 현재 태그에서 벗어날 시 이벤트
document.querySelector("#nickname").addEventListener('blur', (e) => {
    console.log("#nickname이 blur 되었습니다.", e);

    const {target: {value}} = e;  // 이벤트 객체에서 value값 추출
    console.log(value);  // 사용자 입력값
    if (!value) {
        alert('별칭은 필수값입니다.');
        e.target.focus();
    }
});

/**
 * keydown: 키가 눌리는 순간 발생
 * keypress: 입력키가 문자변환 가능한 경우 발생
 * keyup: 키를 떼면서 발생
 */
document.querySelector("#memo").addEventListener('keydown', (e) => {
    console.log('keydown!');
});

document.querySelector("#memo").addEventListener('keypress', (e) => {
    console.log('keypress!');
});

document.querySelector("#memo").addEventListener('keyup', (e) => {
    console.log('keyup!');
    console.log(e);  // 키보드 이벤트 객체
    console.log(e.target.value);  // 현재 입력된 값

    // 엔터 키를 누른 경우
    if (e.keyCode == 13) {
        alert(e.target.value);
        e.target.value = '';  // 입력창 비우기
    }
});

// 한글 조합 입력 종료 이벤트 발생시
document.querySelector("#memo").addEventListener('compositionend', (e) => {
    console.log('compositionend!', e.data);
});

const $frm = document.signupFrm;  // name이 signupFrm인 form 요소 참조
const $username = $frm.username;  // form 내부 username 요소
const $password = $frm.password;  // form 내부 password 요소
const $confirmPassword = $frm['confirm-password'];  // form 내부 confirmPassword 요소

/**
 * 제출 submit 이벤트핸들링
 * - 서버 제출전에 입력한 값에 대한 유효성검사 실시
 * 
 * submit버튼클릭 -> submit이벤트발생 -> submit이벤트핸들러 호출 -> 실제 제출
 * - event.preventDefault() 제출방지처리
 */
$frm.onsubmit = (e) => {
    // 아이디 검사 (4글자 이상)
    if (!/^[a-zA-Z0-9]{4,}$/.test($username.value)) {
        alert('아이디 영문자/숫자 4글자 이상을 입력해주세요.');
        e.preventDefault();
        return;
    }

    // 비밀번호 검사 (4글자 이상)
    if (!/^[a-zA-Z0-9]{4,}$/.test($password.value)) {
        alert('비밀번호는 영문자/숫자 4글자 이상을 입력해주세요.');
        e.preventDefault();
        return;
    }

    // 비밀번호 확인 검사 (두 비밀번호가 같은지 검사)
    if ($password.value !== $confirmPassword.value) {
        alert('두 비밀번호가 일치하지 않습니다.');
        e.preventDefault();
        $password.select();
        return;
    }
};

$confirmPassword.onblur = (e) => {
    if ($password.value !== $confirmPassword.value) {
        alert('두 비밀번호가 일치하지 않습니다.');
        $password.select();
    }
};

// 폼 제출 성공 함수
const requestSignup = () => {
    alert('폼 제출 성공!!!');
    $frm.reset();
}

/**
 * 이벤트 전파 Propagation
 * - bubbling(기본값): 자식객체에서 발생한 이벤트가 부모방향으로 전파되는 것.
 * - capturing
 */

document.querySelector('#bubble1').onclick = (e) => {
    console.log("가장 큰 버블 클릭!", e);
};

document.querySelector('#bubble2').onclick = (e) => {
    console.log("중간 버블 클릭!", e);
    e.stopPropagation();  // 이벤트 중단 (상위 요소로 전달되지 않게 함)
};

document.querySelector('#bubble3').onclick = (e) => {
    console.log("가장 작은 버블 클릭!", e);
};

document.body.onclick = (e) => {  // body 클릭 이벤트
    console.log("바디 클릭!", e);
};

document.querySelector('#bubble1').onclick = (e) => {
    switch(e.target.id) {  // 실제 클릭된 요소의 id
        case 'bubble3':
            console.log("가장 작은 버블 클릭!");
            break;
        case 'bubble2':
            console.log("중간 버블 클릭!");
            break;
        case 'bubble1':
            console.log("가장 큰 버블 클릭!");
            break;
    }
};
