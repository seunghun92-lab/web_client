/**
 * async
 * - 일반함수를 promise 처리
 */
document.querySelector('#btn1').onclick = () => {
    const promise = foo();  // async 함수 호출 결과는 Promise 객체
    console.log(promise);   // 객체 출력

    // Promise가 정상적으로 실행되면 출력값 100 출력
    promise.then((value) => {
        console.log(value);
    });
};

// foo 함수 : 숫자 100을 Promise 형태로 반환하는 함수
// const foo = () => new Promise((resolve) => resolve(100));
const foo = async () => 100;

/**
 * await 
 * - promise에 대해서 작동. 
 * - promise pending -> fulfilled & result 처리를 대기했다 result값을 반환함.
 * - 비동기함수를 동기식으로 처리하는 것처럼 느끼게 됨.
 * - 기본적으로 async함수안에서만 사용가능. (최상위 await도 부분적으로 가능)
 */
document.querySelector('#btn2').onclick = async () => {
    const value = await bar();  // bar Promise가 끝날 때까지 대기
    console.log(value);         // 완료시에는 반환값 출력
};

// bar 함수 : 3초 후 resolve 결과를 반환하는 Promise 함수
const bar = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('3초 후 반환되는 bar 성공!')
    }, 3000);
});

/**
 * Timer API
 */
document.querySelector('#btn3').onclick = async () => {
    const value = await delay(3000);
    console.log(value);
};

const delay = (millis) => new Promise((resolve) => {
    setTimeout(() => {
        resolve('타이머 체크아웃!')
    }, millis)
});

// DOM
document.querySelector('#btn4').onclick = async () => {
    await loadScript('js/test.js');  // 스크립트가 로드가 완료될 때까지 대기
    test();  // 로드 완료시 test 함수 호출
};

// loadScript 함수 : script 태그 생성 후 외부 JS를 로드하는 함수
const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script')  // script 태그 생성
    script.src = src;  // 불러올 스크립트 경로
    script.onload = resolve;  // 스크립트 로드 완료시 resolve 실행
    document.body.append(script);  // body에 script 태그 추가
    console.log('loadScript 실행 완료!')
});

document.querySelector('#btn5').onclick = async () => {
    const url = 'https://capybara-659865682482.asia-northeast3.run.app/user';

    const response = await fetch(url)   // fetch 응답이 올 때까지 대기
    const data = await response.json()  // 응답 본문을 JSON 으로 변환할 때까지 대기
    console.log(data);
};