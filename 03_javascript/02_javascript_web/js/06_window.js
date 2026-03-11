/**
 * window객체
 * - 브라우져 탭별로 존재하는 최상위 객체
 * - DOM (Document Object Model): document
 * - BOM (Browswer Object Model): navigator, history, location, screen
 * - Javascript (내장객체)
 * - 편의메소드: open(), alert(), console등
 */
const test1 = () => {
    console.log(window);  // 현재 브라우저의 최상위 window 객체
    console.log(this);    // 전역 this (= window객체)

    console.log(window.outerWidth, window.outerHeight);  // 브라우저 전체 창 크기
    console.log(window.innerWidth, window.innerHeight);  // 실제 문서 표시 영역 크기
};

/**
 * open 함수 : 새 창을 띄우는 함수
 */
const test2 = () => {
    // 새로운 브라우저 창을 열기
    const newWindow = open('01_js_on_web.html', 'js_on_web', '')
    console.log(newWindow);  // 새로 열린 window 객체
    console.log(newWindow.opener);  // 창을 연 부모 window 객체

    // 3초 뒤 실행
    setTimeout(() => {
        newWindow.close();  // 새 창은 닫음
    }, 3000);
};

// 확인 창 결과에 따라 다른 동작 수행하는 함수
const test3 = () => {
    const bool = confirm('정말 회원탈퇴하시겠습니까?');  // 사용자 확인 여부 받음
    console.log(bool);

    if (bool) {
        alert('회원 탈퇴를 진행합니다. 다음에 또 뵙겠습니다.')
    }
};

// prompt로 입력값을 받아 인사 메시지 출력하는 함수
const test4 = () => {
    // 이름 입력 받기
    const name = prompt('당신은 이름이 무엇입니까?', '홍길동');
    console.log(name);

    if (name) {
        alert(`반갑습니다! ${name}님!`);
    } else {
        alert('이름을 입력해주세요!');
    }
};

/**
 * Timer API
 * - setTimeout() - clearTiemeout()
 * - setInterval() - clearInterval()
 */
// 일정 시간이 지난 뒤 한번 실행되는 타이머 함수
const test5 = () => {
    // 5초 후에 실행
    const timeoutId = setTimeout(() => {
        alert('setTimeout 알림!!!')
    }, 5000);
    console.log('timeoutId =', timeoutId);  // 생성된 timeout 식별자
};

// 일정 시간마다 반복 실행되는 타이머 함수
const test6 = () => {
    let i = 0;
    // 1초마다 반복 실행
    const intervalId = setInterval(() => {
        i++;
        console.log(i);
    }, 1000);
    console.log('intervalId =', intervalId);  // 생성된 interval 식별자
};

// 즉시 실행 함수 : 현재 시간을 초시계처럼 화면에 출력하는 함수
(() => {
    setInterval(() => {  // 1초마다 반복 실행
        const d = new Date();  // 현재 날짜와 시간 객체 생성
        const $clock = document.querySelector('#clock');  // 시계 표시 요소
        const f = (n) => n > 10 ? n : '0' + n;  // 한 자리 숫자면 앞에 0 붙이는 함수
        $clock.innerHTML = `${f(d.getHours())}:${f(d.getMinutes())}:${f(d.getSeconds())}`;
    }, 1000);
})();