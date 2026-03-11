/**
 * fetch api (자바스크립트 표준)
 * - 비동기 네트워크 요청
 * - XMLHttpRequest객체의 개선버젼. Promise기반 작동.
 */
document.querySelector("#btn1").onclick = (e) => {
    const url = 'https://capybara-659865682482.asia-northeast3.run.app/user';

    // GET 요청 전송
    fetch(url)
        .then((response) => response.json())  // 응답 본문을 JSON으로 변환
        .then((data) => {
            console.log(data);
            const {id, company, classroom, cnt} = data;  // 응답객체에서 값 구조분해
            document.querySelector("#id").innerHTML = id;
            document.querySelector("#company").innerHTML = company;
            document.querySelector("#classroom").innerHTML = classroom;
            document.querySelector("#count").innerHTML = cnt;
        });
};

// btn2 클릭시 Github 사용자 정보 요청
document.querySelector("#btn2").onclick = (e) => {
    const url = 'https://api.github.com/users/capybara-helloworldlabs';

    // GET 요청
    fetch(url)
        .then((response) => response.json())  // 응답을 JSON으로 변환
        .then(({avatar_url}) => new Promise((resolve) => {
            console.log(avatar_url);  // 아바타 이미지 주소 출력

            const $img = document.createElement('img');  // img 태그 생성
            $img.src = avatar_url;
            $img.style = 'width: 200px, border-radius: 50%';
            $img.onload = () => resolve($img);  // 이미지 로드 완료시 img 요소 전달
            document.querySelector('.img-wrapper').append($img)  // 화면에 이미지 추가
        }))
        .then(($img) => {
            setTimeout(() => {
                $img.remove();
            }, 3000);
        });
};

// btn3 클릭시 axios 요청 실행
document.querySelector("#btn3").onclick = (e) => {
    const url = 'https://api.github.com/users/capybara-helloworldlabs';

    // get/post/put/patch/delete 별 메소드
    axios.get(url)
        .then(({data: {avatar_url}}) => {
            console.log(avatar_url);

            const $img = document.createElement('img');  // img 태그 생성
            $img.src = avatar_url;
            $img.style = 'width: 200px, border-radius: 50%';
            document.querySelector('.axios-img-wrapper').append($img)  // 화면에 이미지 추가
        });
};