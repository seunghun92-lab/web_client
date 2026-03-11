/**
 * DOM은 Node로 구성되어 있다.
 * - TextNode
 * - CommentNode
 * - ElementNode(태그객체)
 */
const test1 = () => {
    // $로 시작하는 변수는 태그객체임을 표시
    const $sample = document.querySelector('#sample');
    console.dir($sample)
};

/**
 * DOM Tree 탐색
 * 
 * Node제공 속성 (모든 노드 대상)
 * 1. 자식탐색 firstChild, lastChild, childNodes
 * 2. 부모탐색 parentNode
 * 3. 형제탐색 nextSibling, previousSibling
 * 
 * Element제공 속성 (Element만 탐색)
 * 1. 자식탐색 firstElementChild, lastElementChild, children
 * 2. 부모탐색 parentElement
 * 3. 형제탐색 nextElementSibling, previousElementSibling
 */
const test2 = () => {
    const $src = document.querySelector('.wrapper');  // class가 wrapper인 부모 요소 조회
    console.dir($src);

    const $target = $src.children;  // 자식 Element 목록 조회
    console.log($target);  // HTMLCollection 형태 확인

    // Array.from() : 배열로 변환
    Array.from($target).forEach((tag) => {
        tag.style.color = 'magenta'
    });
};

/**
 * 부모 방향 탐색
 */
const test3 = () => {
    const $src = document.querySelector('#p4')  // id가 p4인 요소 조회
    const $target = $src.parentElement.parentElement;  // 부모의 부모 요소 조회

    console.log($target);
    $target.style.backgroundColor = 'yellowgreen';
};

/**
 * 형제방향 탐색
 * nextElementSibling, previousElementSibling
 */
const test4 = () => {
    const $src = document.querySelector("#p3")
    const $target = $src.nextElementSibling.nextElementSibling;  // 다음 다음 형제 요소 조회
    $target.style.textDecoration = 'underline';  // 밑줄 스타일 적용
};