/**
 * 제어문
 * - 조건문 if
 * - 분기처리문 switch..case
 * - 반복문
 *  - for
 *  - while
 *  - for..in
 *  - for..of
 * - 반복분기처리 break/continue
 */

// if문
function test1(age) {
    if(age >= 20){
        console.log('당신은 성인입니다.')
    }
    else if (age >= 0 && age < 20){
        // && -> and, || -> or, ! -> not
        console.log('당신은 미성년자 입니다.')
    }
    else{
        console.log('유효한 숫자가 아닙니다.')
    }
}

test1(15);
test1(30);
test1(-100);

// switch
function test2(en_color){
    let ko_color = '';
    switch(en_color) {
        case 'red':
            ko_color = '빨강';
            break
        case 'blue':
            ko_color = '파랑';
            break
        case 'yellow':
            ko_color = '노랑';
            break
        default:
            ko_color = '알 수 없는 색상';
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
    // 0~4까지
    for(let i = 0; i < 5; i++){
        console.log(i);
    }

    // 10~1까지
    for(let i = 10; i > 0; i--){
        console.log(i);
    }

    // 짝수만
    for(let i = 10; i > 0; i--){
        if (i % 2 == 0){
            console.log(i);
        }
    } // ← 여기 추가

    const arr = ['a', 'b', 'c'];
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

test3();

// while : 조건식을 이용해 반복 여부 결정
function test4(){
    // 방법 1
    // let i = 0;
    // while (i < 5) {
    //     console.log(i);
    //     i++;
    // }

    // 방법 2
    let i = 0;
    while(true){
        if(i >= 5){
            break;
        }
        console.log(i);
        i++;
    }
}

test4();

// for ... in : 배열 인덱스와 객체 속성명을 순회
function test5(){
    const arr = ['사과', '배', '멜론', '바나나'];

    // enumerable 여부 확인
    console.log(Object.getOwnPropertyDescriptor(arr, '0').enumerable);
    console.log(Object.getOwnPropertyDescriptor(arr, '1').enumerable);
    console.log(Object.getOwnPropertyDescriptor(arr, '2').enumerable);
    console.log(Object.getOwnPropertyDescriptor(arr, '3').enumerable);
    console.log(Object.getOwnPropertyDescriptor(arr, 'length').enumerable);

    for(let i in arr){
        console.log(i, ':', arr[i]) // 배열의 인덱스/값 출력
    }

    let pet = {
        petname : '햄토리',
        type : '햄스터',
        weight : 0.5
    };

    for(let name in pet){
        console.log(name, ':', pet[name])   // 객체의 key와 value 출력
    }
}

test5();

// for ... of : 배열 요소 자체를 순회하는 함수
function test6(){
    const arr = ['사과', '배', '멜론', '바나나'];

}