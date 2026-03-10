/*
js 함수 작성법
1. 함수선언식 Function Declaration
    - hoisting 처리
2. 함수표현식 Function Expression
    - hoisting 처리 안됨

hoisting이란? 끌어올려져 처리.
*/

foo();
console.log(k); // undefined 오류발생 안함.
// console.log(m); // 오류

/**
 * 함수 선언식
 */
function foo(){
    console.log('fooooooooo');
}
foo();
var k = 10;
let m = 20;

// bar();
/**
 * 함수 표현식
 * - 익명함수를 변수에 대입
 */
const bar = function () {
    console.log('baaaaaaaaaaaaar');
};
bar();

/**
 * IIFE:
 * - Immediately Invoked Function Expression
 * - 함수를 정의/호출하는 방식
 * - 전역변수 대신 지역변수를 선언하고, 보호하는 방식
 */
(function () {
    console.log('IIFEeeeeee');
})();

(function(name){
    console.log(`Hello ${name}`);
})('홍길동');

let app_name = 'MyFantasticApp';

(function(){
    let pet_name = '햄토리';
    // ...
})();
// console.log(pet_name); // ReferenceError: pet_name is not defined

app_name = 'YourFantasticApp';
console.log(app_name);

/**
 * 매개변수/매개인자가 불일치해도 오류가 발생하지 않는다.
 */
const test1 = function(a, b) {
    console.log(a, b);

    // 숨은 참조변수 arguments
    console.log(arguments);
};
test1(10, 20);
test1(10);
test1();
test1(10, 20, 30);

/**
 * 모든 함수는 리턴값을 갖는다.
 * - return절을 명시하지 않은 경우, undefined 반환
 */
const test2 = function(){
    // return undefined;
    // return 100;
};
console.log(test2());

/**
 * 화살표함수 Arrow Function
 * - 파이썬 lambda와 같이 함수를 간결하게 작성하는 문법
 */
const f1 = function(a, b) {
    console.log(a, b);
    return a + b;
};
console.log(f1(10, 20));

const f2 = (a, b) => a + b;
console.log(f2(10, 20));

const f3 = (a, b) => console.log(a, b); 
f3(10, 20);

/**
 * 파이썬 *, **: 
 * - packing: def foo(*args), def foo(**kwargs) 매개변수
 * - unpacking: foo(*mylist), foo(**mydict) 매개인자
 * 
 * JS ...
 * - 나머지파라미터(rest parameter): 함수선언자리에서 매개인자 묶어 처리. 매개변수(공간)
 * - 전개연산자(spread operator): 배열/객체의 요소를 나열. 매개인자(값)
 */
const test3 = (year, ...names) => {
    console.log(names, typeof(names));

    for(let name of names) {
        console.log(name);
    }
};
test3(1999, '홍길동');
test3(2000, '홍길동', '신사임당');
test3(2026, '홍길동', '신사임당', '이순신');

const names = ['홍길동', '신사임당'];
test3(2026, names);
test3(2026, ...names); // 전개연산자 

/**
 * 전개연산자 적용예시
 */
(() => {
    const a = [1, 2, 3];
    const b = ['a', 'b', 'c'];

    const c = a.concat(b);
    console.log(c);

    const d = [...a, ...b];
    console.log(d);
})()


/**
 * 자바스크립트 함수는 1급시민객체이다!
 * 
 * 1급시민객체란?
 * - 무명의 리터럴로 생성가능해야 한다. 
 * - 변수 또는 자료구조(배열/객체)에 저장가능해야 한다.
 * - 함수의 매개인자로 사용이 가능해야 한다.
 * - 함수의 리턴값으로 사용이 가능해야 한다.
 */
const test4 = (k) => {
    console.log(`🐸🐸🐸 ${k}`)
};
test4('안녕');
const test5 = test4;
test5('잘가');

const obj_funcs = {
    test4: test4 // test4 식별자, test4 함수
};
obj_funcs['test4']('ㅋㅋㅋ');
const funcs = [test1, test2, test3, test4];
funcs[3]('되네??');

// 함수의 매개인자로 함수를 사용한다.
const runner = (f, n) => {
    for(let i = 0; i < n; i++) {
        f('안녕');
    }
};
runner(test4, 3);

// 함수를 리턴값으로 사용한다. 
const test6 = (emoji) => {
    return () => {
        console.log(emoji);
    };
};
const dog_emoji = test6('🐶');
dog_emoji();
const cat_emoji = test6('😺');
cat_emoji();

/**
 * (사용자가 원하는 디저트를 반환하는 함수)를 반환하는 함수
 */
const getDessert = (dessert) => {
    // return () => dessert;
    return (name) => `${name}이/가 ${dessert}을/를 먹어요~`;
};

const getCake = getDessert('🍰'); // (철수) => 철수이/가 🍰을/를 먹어요~
const getDonut = getDessert('🍩'); // (은희) => 은희이/가 🍩을/을 먹어요~

console.log(getCake('철수')); // 철수이/가 🍰을/를 먹어요~
console.log(getDonut('은희')); // 은희이/가 🍩을/을 먹어요~

// 고차함수 
const getDessert2 = (dessert) => (name) => `${name}이/가 ${dessert}을/를 먹어요~`;
const getCarrot = getDessert2('🥕');
console.log(getCarrot('햄토리'));


// @실습문제
const friends = ['길동', '순신', '관순'];
const getCorn = getDessert('🌽');
/*
    철수이/가 🌽을/를 먹어요~
    순신이/가 🌽을/를 먹어요~
    관순이/가 🌽을/를 먹어요~
*/
friends.forEach((friend) => console.log(getCorn(friend)));
const results = friends.map((friend) => getCorn(friend));
console.log(results);