/**
 * Promise객체
 * - 비동기작업(producing code) + 콜백(consuming code)를 명쾌히 작성하도록 도와주는 객체
 * 
 * 두개의 상태
 * - status: pending -> fullfiled / rejected (resolve 호출 / reject 호출)
 * - result: undefined -> value / error객체
 * 
 * Promise는 두개의 callback을 가진다.
 * - resolve 정상처리된 경우 실행할 callback
 * - reject 오류가 발생한 경우 실행할 callback
 */
document.querySelector('#btn1').onclick = (e) => {
    // btn1 클릭시 Promise 객체 생성 및 실행
    const promise = new Promise((resolve, reject) => {
        // 짝수 생성기 (난수)
        const n = Math.trunc(Math.random() * 100 + 1); // 1~ 100 난수
        console.log(`난수가 생성되었습니다. ${n}`);

        try {
            if (n % 2 == 0) {
                resolve(n);  // Promise#result: n -> 성공 상태로 전환하고 난수 전달
            } else {
                throw new Error('홀수라서 실패!!');  // 에러 발생
            }
        } catch (e) {
            reject(e);  // Promise#result: e(에러 객체) -> 실패 상태로 전환하고 에러 전달
        }
    });

    console.log(promise);

    // 콜백 작성
    promise.then((n) => {
        // resolve 콜백 : 성공시
        console.log(`짝수를 뽑았습니다! : ${n} 축하드립니다!!`);
    }, (err) => {
        // reject 콜백 : 실패시
        console.error(err);
    });
};

/**
 * Timer API + Promise
 * - producing 코드: Timer API
 * - cosuming 코드: Timer API에 전달된 callback 함수
 */
document.querySelector("#btn2").onclick = () => {
    // delay 함수로부터 Promise 값을 받아 출력
    delay(3000).then((value) => {
        console.log('3초 후 전달된 값 : ', value);
    });
};

// delay 함수 : 지정한 시간 뒤 resolve 되는 Promise를 반환하는 함수
const delay = (millis) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('타이머 성공!!')  // 성공값 전달
    }, millis);
});

/**
 * DOM + Promise
 * - producing: script 생성/로드
 * - consuming: test함수 호출
 */
document.querySelector('#btn3').onclick = () => {
    loadScript('js/test.js').then((value) => {
        test();
    });
};

// loadScript 함수 : script 태그 생성 후 외부 JS를 로드하는 함수
const loadScript = (src) => new Promise((resolve, reject) => {
    const script = document.createElement('script')  // script 태그 생성
    script.src = src;  // 불러올 스크립트 경로
    script.onload = resolve;  // 스크립트 로드 완료시 resolve 실행
    document.body.append(script);  // body에 script 태그 추가
});

/**
 * Promise Chain : then 구문은 다시 Promise로 반환하여, 연속적인 사용
 */
document.querySelector('#btn4').addEventListener('click', () => {
    new Promise((resolve) => {
        resolve(2);  // 처음 값 2로 시작
    }).then((value) => {
        return value * 2;  // result=4인 Promise 객체 반환
    }).then((value) => {
        console.log(value);
    });
});

const $box = document.querySelector('div.box');
document.querySelector('#btn5').addEventListener('click', () => {
    $box.style.backgroundColor = 'red';
    chageBGColor('orange', 1000)
        .then(() => chageBGColor('yellow', 1000))
        .then(() => chageBGColor('green', 1000))
        .then(() => chageBGColor('blue', 1000))
        .then(() => chageBGColor('navy', 1000))
        .then(() => chageBGColor('purple', 1000))
});

// chageBGColor 함수 : 지정한 시간 후 박스 배경색을 바꾸는 Promise 함수
const chageBGColor = (color, millis) => new Promise((resolve) => {
    setTimeout(() => {
        $box.style.backgroundColor = color;
        resolve();  // 작업 완료 처리
    }, millis);
});
