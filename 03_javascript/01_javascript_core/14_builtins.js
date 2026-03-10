/**
 * 내장 String API
 */
const test1 = () => {
    const str = 'Apple Samsung Pineapple';
    console.log(str);
    console.log(str.length);

    for(let i=0; i < str.length; i++) {
        console.log(str.charAt(i));
    }

    console.log(str.toLowerCase());
    console.log(str.toUpperCase());

    console.log(str.indexOf('Sam'));
    console.log(str.indexOf('Grape'));
    console.log(str.lastIndexOf('ppl'));
    
    console.log(str.substring(6, 9));
    console.log(str.substr(6, 3)); // deprecated

    console.log(str.replace('Apple', '사과')); // out-of-place연산
    console.log(str.replace('ppl', 'PPL')); // out-of-place연산
    console.log(str.replaceAll('ppl', 'PPL')); // out-of-place연산
    console.log(str.replace(/ppl/g, 'PPL')); // /정규표현식/ -> 정규표현식객체(new RegExp())
    console.log(str);

    console.log(str.split(' '));

    // @실습문제: 주어진 문자열에서 알파벳의 개수를 세어 출력
    const text = '안녕하세요, 저는 Steve입니다. California에 살고 있고, 제 Major는 AI Engineer입니다.';
    const matched = text.match(/[a-zA-Z]/g);
    console.log(matched.length);

    let cnt = 0;
    for(let i = 0; i < text.length; i++){
        const ch = text[i]; // text.charAt(i)
        if((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            cnt++;
        }
    }
    console.log(cnt);

}
test1();

/**
 * Math
 */
const test2 = () => {
    // 정수(난수 * 경우의수 + 최소값)
    console.log(Math.random()); // 0 ~ 1사이의 실수반환
    // 1 ~ 10사이의 난수
    console.log(Math.trunc(Math.random() * 10 + 1));

    console.log(Math.ceil(12.34));
    console.log(Math.round(12.34));
    console.log(Math.round(12.56));
    console.log(Math.floor(-12.56));
    console.log(Math.trunc(-12.56));

    // 123.456 -> 123.46
    console.log(Math.round(123.456 * 100) / 100);
};
test2();


/**
 * Date API
 */
const test3 = () => {
    const now = new Date();
    console.log(now);
    console.log(now.getFullYear());
    console.log(now.getMonth() + 1); // 0 ~ 11월
    console.log(now.getDate());
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    // Unix Time (Epoch Time): 1970년 1월 1일 자정기준으로 누적된 milli초 
    console.log(Date.now());

    // Unix Time -> Date
    const date = new Date(1770599633128);
    console.log(date);

    // 특정날짜
    const someday = new Date(2026, 3, 24, 17, 50, 0);
    console.log(someday);
};
test3();