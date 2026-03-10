
/*
js의 8가지 자료형
1. undefined
2. string
3. number
4. boolean
5. null
6. object(array, object, function)
7. bigint 큰수/정밀한수를 제어하기 위한 숫자형
8. symbol 고유하고 수정불가능한 자료형형
*/

/*
변수선언 키워드
- let: 변수 선언
- const: 상수 선언
- var: (legacy) 예전 브라우져 실행하는 경우
*/

// 1. underfined : 타입/값이 정의되지 않은 상태
let a;
console.log(a, typeof(a));

// 2. number: 정수/실수 통합 처리
a = 3;
console.log(a, typeof(a));

let b = 10;
let c = 123.45;
console.log(b, type(b));
console.log(c, type(c));

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);



// 3. string 문자열 : "", '', ``,

const username = '홍길동';
console.log(username, typeof(username));
console.log(`안녕하세요!
제 이름은 ${username}입니다.
반갑습니다.`) // 템플릿 문자열


let bool = true;

// 4. boolean 논리형 : true/false
console.log(bool, typeof(bool));
console.log(!bool)

// 5. null : 값 없음, 값 제거 (undefined는 최초 값이 정의되지 않은 경우)
// type 검사하면 object
let k = 100;
k = null;
console.log(k, typeof(k));


// object : array / object / function
const arr = [1, 2, 3];
console.log(arr, typeof(arr));
console.log(arr[0], arr[1], arr[100])

const obj = {
    username : 'hoggd',
    age : 20,
    scores : [90, 80, 100]

};
console.log(obj, typeof(obj));
console.log(obj['username'], obj['age'], obj['scores'])
console.log(obj.username, obj.age, obj.scores)

function foo(k) {
    console.log('fooooooo', k)
}
console.log(foo, typeof(foo));
console.dir(foo)    // 함수 객체 구조를 디렉토리 형태로 출력


function test1(age) {
    if(age >= 20) {
        console.log('당신은 성인입니다.');
    }
    else if (age >= 0 && age < 20) {
        console.log("당신은 미성년자 입니다.");
    }
    else {
        console.log('유효한 숫자가 아닙니다.');
    }
}

test1(15);
test1(30);
test1(-100);

function test2(en_color){
    let ko_color = '';
    switch(en_color) {
        case 'red':
            ko_color = '빨강';
        break;
        case 'yellow':
            ko_color = '노랑';
        break;
        case 'blue':
            ko_color = '파랑';
            break;
        default:
            ko_color = '알수 없는 색상';  
    }
    return ko_color;
}

console.log(test2('red'))
console.log(test2('yellow'))
console.log(test2('blue'))
console.log(test2('black'))

/**
 * 기본 for문
 * - for(초기식; 조건식; 증감식)
 * - 증감변수: 반복문의 실행흐름/반복횟수 제어용 변수
 * - 초기식: 증감변수 초기화. 처음 한번만 실행!
 * - 조건식: 참인 경우 for블럭 실행, 거짓인 경우 반복문 종료
 * - 증감식: 증감변수 업데이트 i++ 1씩 증가, i-- 1씩 감소
 * - 초기식 -> 조건식 -> 반복실행 -> 증감식
 */

function test3(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    // 10 ~ 1
    for(let i = 10; i > 0; i--){
         console.log(i);
    }

    for(let i = 10; i > 0; i--){
         if (i % 2 == 0){
            console.log(i);
        }
    }

    const arr = ['a', 'b', 'c'];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

test3;

function test4(){
    let i = 0;
    while (i < 5){
        console.log(i);
        i++;
    }
}

test4();

function test5(){
    const arr = ['사과', '배', '멜론', '바나나'];
    console.log(Object.getOwnPropertyDescriptors(arr, '0').enumerable);
    console.log(Object.getOwnPropertyDescriptors(arr, '1').enumerable);
    console.log(Object.getOwnPropertyDescriptors(arr, '2').enumerable);
    console.log(Object.getOwnPropertyDescriptors(arr, '3').enumerable);
    console.log(Object.getOwnPropertyDescriptors(arr, 'length').enumerable);

    for (let i in arr){
        console.log(i, ':', arr[i])
    }

    let pet = {
        petname : '햄토리',
        type : '햄스터',
        weight : 0.5
    };
    for (let name in pet){
        console.log(name, ':', pet[name]) //객체의 key와 value의 출력
    }
}

test5()


// for .. of : 배열 요소 자체를 순회하는 함수