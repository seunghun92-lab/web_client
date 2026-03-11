/**
 * BOM : navigator, location, history, screen 함수
 * navigator : 웹 브라우저의 정보
 */
const test1 = () => {
    console.log(navigator);  // 브라우저 정보가 담긴 navigator 객체
    console.log(navigator.userAgent);  // 브라우저와 OS 식별 문자열
};

/**
 * location : 주소창과 관련된 정보 제공
 */
const test2 = () => {
    console.log(location);  // 현재 주소 관련 정보가 담긴 location 객체

    // location.href = 'https://naver.com';
    location.reload();  // 현재 페이지 새로고침
};

/**
 * history : 방문 기록 관련된 정보 (뒤로가기, 앞으로가기 등 함수)
 */
const test3 = () => {
    console.log(history);  // 브라우저 history 객체
};

/**
 * screen : 브라우저가 실행중인 모니터에 대한 정보
 */
// 화면 중앙에 새 창을 여는 함수
const test4 = () => {
    console.log(screen);  // 모니터 정보가 담긴 screen 객체

    const width = 500;
    const height = 300;

    const left = (screen.width - width) / 2 + screen.availLeft;  // 화면 중앙 기준 가로 위치
    const top = (screen.height - height) / 2 + screen.availTop;  // 화면 중앙 기준 세로 위치

    open("", "", `width=${width}, height=${height}, left=${left}, top=${top}`)
};