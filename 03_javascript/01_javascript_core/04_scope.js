/*
Scope란? 변수 유효범위

- 전역스코프(global scope): 전역에서 선언된 변수는 전역에서 접근 가능하다. 
- 지역스코프(local scope): 지역에서 선언된 변수는 지역에서만 접근 가능하다.
    - 함수블럭
    - if/for블럭
*/
let a = 10;
console.log(a);


if (true){
    let c = 30;
    console.log(c);

    a *= 10;
    console.log(a);
}