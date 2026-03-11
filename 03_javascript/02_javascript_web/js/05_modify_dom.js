/**
 * DOM 요소를 추가/수정/삭제
 * 
 * 1. 텍스트로 처리
 * 2. 태그객체로 처리
 * 
 */
const $foo = document.querySelector('#foo');
const $bar = document.querySelector('#bar');
const $target = document.querySelector('#target');

// innerHTML로 HTML 구조 읽고, 복사
const test1 = () => {
    console.log($foo.innerHTML);
    $bar.innerHTML = $foo.innerHTML;
};

/**
 * innerText
 * - (getter) 자식 HTML을 제외한 문자열을 가져온다.
 * - (setter) HTML포함 문자열을 전달해도, HTML 파싱처리 하지 않음.
 */
const test2 = () => {
    console.log($foo.innerText);
    $bar.innerText = $foo.innerHTML;
};

/**
 * outerHTML
 * - (getter): 태그 자신을 포함한 문자열 반환
 * - (setter): 태그 자신을 덮어쓰기 처리
 */
const test3 = () => {
    console.log($foo.outerHTML);
    $foo.outerHTML = `<p id='koo'>쿠쿠쿠</p>`
};

/**
 * <!-- beforebegin: 이전 형제요소 추가 -->
 * <p> 
 * <!-- afterbegin: 첫번째 자식요소 추가 -->
 *  foo 
 * <!-- beforeend: 마지막 자식요소 추가 -->
 * </p>
 * <!-- afterend: 다음 형제요소 추가 -->
 */
const test4 = () => {
    $target.insertAdjacentHTML('beforebegin', '<span>★★★</span>')
}
const test5 = () => {
    $target.insertAdjacentHTML('afterbegin', '<span>★★★</span>')
}
const test6 = () => {
    $target.insertAdjacentHTML('beforeend', '<span>★★★</span>')
}
const test7 = () => {
    $target.insertAdjacentHTML('afterend', '<span>★★★</span>')
}

/**
 * Element 생성
 * - textNode: document.createTextNode(text)
 * - ElementNode: docuemnt.createElement(tagName)
 */
const test8 = () => {
    const $h3 = document.createElement('h3');  // h3 요소 생성
    const $text = document.createTextNode('안녕, HTML');  // 텍스트 노드 생성
    $h3.appendChild($text);
    console.log($h3);

    const $area = document.querySelector('#area');
    $area.appendChild($h3);  // area 하위에 h3 추가

    $h3.addEventListener('click', () => {  // h3 태그 클릭시 이벤트 등록
        alert('h3 태그가 추가되었습니다!')
    });
};

const test9 = () => {
    const $img = document.createElement('img');  // img 태그요소 생성
    $img.src = '../../../assets/image/hyunta.jpg'
    $img.width = 200;
    $img.style.borderRadius = '50%';
    $img.style.margin = '10px';

    const $area = document.querySelector('#area');
    $area.appendChild($img);
};

/**
 * remove() : 태그 자기자신 삭제
 */
const test10 = () => {
    const $target = document.querySelector('#good-morning');
    $target.remove();
};

/**
 * removeChild(child) : 자식 노드 제거
 */
const test11 = () => {
    const $parent = document.querySelector('#messages');

    // 모든 자식노드 삭제
    while($parent.firstChild) {
        console.log($parent.firstChild);
        $parent.removeChild($parent.firstChild);  // 첫 번째 자식 노드 삭제
    }
};

/**
 * innerHTML 통해서 삭제
 */
const test12 = () => {
    const $parent = document.querySelector('#messages');

    console.log($parent.innerHTML);
    $parent.innerHTML = '';  // 내부 내용을 비워서 자식 요소 전체 삭제
};

/**
 * 기존요소 이동
 * - 기존요소를 새 부모 밑에 추가
 */
const test13 = () => {
    const $target = document.querySelector('#good-morning');
    const $newParent = document.querySelector('#another-messages');
    $newParent.appendChild($target)  // 기존 요소를 새 부모 아래로 이동
};