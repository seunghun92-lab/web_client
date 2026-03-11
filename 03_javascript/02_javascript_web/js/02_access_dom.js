/**
 * ID로 태그 찾기
 * - 1개의 태그 객체 또는 null 반환
 */
const test1 = () => {
    const li1 = document.getElementById('li1');  // id가 li인 요소 찾기
    console.log(li1);  // 요소 객체
    console.dir(li1);  // 요소 속성 구조

    console.log(li1.innerText);;  // 요소 텍스트 내용

    const notExist = document.getElementById('dsijofasd');  // 존재하지 않는 id
    console.log(notExist);  // 없으면 null
};

/**
 * 태그명으로 찾기
 * - 검색된 모든 태그를 배열로 반환
 * - 해당 태그가 존재하지 않으면 빈 배열을 반환
 */
const test2 = () => {
    const lis = document.getElementsByTagName('li');  // 모든 li 태그 조회
    console.log(lis);

    for (let tag of lis) {
        console.log(tag.innerText);  // list 내부 텍스트
        tag.style.backgroundColor = 'hotpink';
        tag.style.color = 'white';
    }

    const brs = document.getElementsByTagName('br');  // 존재하지 않는 tag
    console.log(brs);  // 존재하지 않으면 빈 배열
};

/**
 * 클래스명으로 찾기
 */
const test3 = () => {
    const group1 = document.getElementsByClassName('group1');  // class가 group1인 요소들 조회
    console.log(group1);
    for (let tag of group1) {
        tag.innerHTML += ' [group1]';  // 기존 내용 뒤에 문자열 추가
    }
};

/**
css선택자로 찾기
querySelector(): 선택자와 일치하는 한개의 요소만 반환 (존재하지 않으면 null 반환)
querySelectorAll(): 선택자와 일치하는 모든요소를 배열로 반환 (존재하지 않으면 빈 배열 반환)
*/
const test4 = () => {
    const li3 = document.querySelector('#li3');  // id가 li3인 요소 1개 조회
    li3.style.fontSize = '24px';

    const group2 = document.querySelector('.group2');  // 여러가지 요소일 때는 첫 번째 요소만 조회
    console.log(group2);
};

const test5 = () => {
    const group2 = document.querySelectorAll('.group2');  // class가 group2인 모든 요소 조회
    console.log(group2)

    group2.forEach((tag) => {  // 각 요소 순회
        console.log(tag);
        tag.innerHTML = tag.innerHTML.replace('HelloJS', '안녕 자바스크립트');
    });
};

/**
 * name 속성으로 찾기
 * - input[name]
 */
const test6 = () => {
    const hobbies = document.getElementsByName('hobby');  // name이 hobby인 요소 조회
    console.log(hobbies);

    let hobbyChecked = '';
    hobbies.forEach((tag) => {
        console.log(tag.checked);  // 체크 여부
        if (tag.checked) {  // 체크된 경우
            hobbyChecked += tag.value + ' '  // value 값 문자열에 추가
        }
    });
    alert(`[${hobbyChecked.trim()}]를 선택하셨습니다.`)
};

/**
 * 체크박스 전체선택/해제 처리
 */
const test7 = () => {
    const hobbyAll = document.querySelector("#all");  // 전체선택 체크박스 조회

    const hobbies = document.getElementsByName('hobby');  // 취미 체크박스들 조회
    hobbies.forEach((tag) => {  // 각 체크박스 순회
        tag.checked = hobbyAll.checked;  // 전체선택 상태와 동일하게 설정
    });
}

// test8() : 입력값을 읽은 뒤 출력
const test8 = () => {
    const user_name = document.querySelector('#name');  // id가 name인 요소 조회
    alert(user_name.value);
};

// test9() : range 입력값을 화면에 표시
const test9 = () => {
    const score = document.querySelector('#score');  // id가 score인 range 요소 조회
    const display_score = document.querySelector('#display-score')

    display_score.innerText = score.value;  // 현재 선택한 점수값을 화면에 출력
};