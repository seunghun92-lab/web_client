/**
 * 단축평가 
 * - 표현식 평가중에 결과가 확정된 경우, 이후 연산을 수행하지 않음
 * - ||: 좌항이 true인 경우 우항을 검사하지 않음.
 * - &&: 좌항이 false인 경우 우항을 검사하지 않음.
 */

import readline from 'readline';    // 사용자 입력 모듈

function test1(){
    // or ||
    console.log('apple' || 'banana');
    console.log('' || 'banana')

    const fruit = 'apple' || 'banana';
    console.log(fruit)

    // and &&
    console.log('apple' && 'orange');
    console.log('' && 'orange')
}

test1()

function get_user_num(){
    const rl = readline.createInterface({
        input: process.stdin,   // 표준 입력
        output: process.stdout, // 표준 출력
    });

    rl.question('숫자 하나를 입력하세요.', (answer) => {
        answer = Number(answer) || 1000;    // 입력값이 없거나 0, NaN 등이면 1000 사용
        console.log(`입력하신 숫자는 ${answer}입니다.`);
        rl.close();     // 입력 인터페이스 종료
    });
}

get_user_num();

/**
 * 단축평가를 이용한 if문 처리
 * - 조건식 && 실행문: true경우만 실행 
 * - 조건식 || 실행문: false경우만 실행
 */

function test2(num){
    num % 2 == 0 && console.log(`${num}은 짝수입니다.`);
    num % 2 == 0 || console.log(`${num}은 홀수입니다.`);
}

test2(3);
test2(100);

// optional chaining : 객체 속성에 안전하게 접근
function test3(user) {
    // user 객체가 존재하면 username 속성값 사용, 없으면 null값 대입
    // const username = user && user.usernmae
    const username = user?.username;
    console.log(`username = ${username}`);
}

test3({username: 'sinsa'});
test3({});
test3(null);