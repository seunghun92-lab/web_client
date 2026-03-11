/**
 * DOM 객체의 style 속성을 변경하면, inline-style 속성을 변경하는 것과 같다.
 */
const test1 = () => {
    const $first = document.querySelector('#first');
    $first.style.backgroundColor = 'black';
    $first.style.color = 'white';
}

/**
 * 클래스 속성을 통한 styling
 */
// 태그객체를 받는 함수
const checkSubject = ($checkbox) => {
    const checked = $checkbox.checked;  // 체크 상태

    const $td = $checkbox.parentElement;  // 부모 요소

    if(checked) {
        $td.classList.add('on')  // 클래스 추가
    } else {
        $td.classList.remove('on')  // 클래스 제거
    }
};