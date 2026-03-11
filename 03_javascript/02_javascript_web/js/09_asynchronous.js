/**
 * 동기 Synchronous: 짝을 맞춘다. (함수호출-리턴과 그 다음실행의 짝을 맞춘다)
 * 비동기 Asynchronous: 짝을 맞추지 않는다. (함수호출-리턴과 그 다음실행의 짝을 맞추지 않는다.)
 * 
 * js runtime(node, web browswer)는 기본적으로 싱글쓰레드로 작업한다.
 * 1. 비동기처리가 필요한 경우 Web API 영역에 등록
 * 2. 실행시기가 오면 callback queue에 등록
 * 3. EventLoop이 주기적으로 확인해서, callstack이 비면, callback queue의 작업을 callstack 추가/실행
 */
// btn1 클릭 이벤트 리스너 등록
document.querySelector('#btn1').addEventListener('click', () => {
    // 동기 처리
    const value = foo();
    console.log(value);

    // 비동기 처리
    let value2;
    // 1초 후 실행될 비동기 작업 등록
    const timeoutId = setTimeout(() => {
        value2 = 200;
        console.log(value2);
    }, 1000);
    
    console.log(value2);  // setTimeout 이전 실행으로 undefined
});

const foo = () => 300;

// DOM 처리는 비동기 작업이다.
document.querySelector('#btn2').onclick = (e) => {
    loadScript('js/test.js', () => {
        test();
    });
};

// loadScript 함수 : 외부 스크립트를 읽어온 후 콜백 함수를 실행하는 함수
const loadScript = (src, callback) => {
    const script = document.createElement('script');  // script 태그 생성
    script.src = src;  // 불러올 스크립트 경로
    script.onload = callback;  // 스크립트 로드 완료시 콜백 실행
    document.body.append(script);  // body에 script 태그 추가
}; 

// btn3 클릭 이벤트 (시간에 따라 색상 변환)
document.querySelector('#btn3').onclick = () => {
    const $box = document.querySelector('div.box');
    $box.style.backgroundColor = 'red';
    setTimeout(() => {
        $box.style.backgroundColor = 'orange';
        setTimeout(() => {
            $box.style.backgroundColor = 'yellow';
            setTimeout(() => {
                $box.style.backgroundColor = 'green';
                setTimeout(() => {
                    $box.style.backgroundColor = 'blue';
                    setTimeout(() => {
                        $box.style.backgroundColor = 'navy';
                        setTimeout(() => {
                            $box.style.backgroundColor = 'purple';
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
};