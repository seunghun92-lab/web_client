/**
 * 구조분해할당 Destructuring Assignment
 * - 배열/객체의 요소를 쉽게 변수에 대입하는 문법
 * - 배열은 인덱스기반으로, 객체는 속성명기반으로 처리
 */

/**
 * 배열 구조분해할당
 */
const test1 = () => {
    const arr = [1, 2, 3];
    const [a, b, c] = arr;
    console.log(a, b, c);

    const [d, e] = arr; 
    console.log(d, e);

    const [, f, g] = arr;
    console.log(f, g);

    const [h, i, j=10, k=20] = arr;
    console.log(h, i, j, k);

    const [l, ...m] = arr;
    console.log(l, m);
};
test1();

/**
 * 매개변수부의 구조분해 할당
 */
const test2 = () => {
    const foo = (name, [kor, eng, math]) => console.log(name, kor, eng, math);

    foo('신사임당', [99, 100, 78]);
    foo('홍길동', [99, 100]);
};
test2();

/**
 * 객체 구조분해 할당
 */
const test3 = () => {
    const obj = {
        a: 123,
        b: '겨울',
        c: true
    };
    // const {a, b, c} = obj;
    // console.log(a, b, c);

    // const {a, b, x='🐸'} = obj;
    // console.log(a, b, x);
    
    // const {b, c} = obj;
    // console.log(b, c);

    // 변수명을 속성명과 다르게 처리
    const {a: num, b: season, c: bool} = obj;
    console.log(num, season, bool);

    // 중첩객체 처리
    const user = {
        id: 'honggd',
        name: {
            firstName: '길동',
            lastName: '홍'
        },
        sns: ['tiktok', 'thread', 'X']
    };
    const {
        id,
        name: {firstName, lastName},
        sns: [mainSns, subSns]
    } = user;
    console.log(id, firstName, lastName, mainSns, subSns);

    // 나머지파라미터
    const {
        id: username, ...rest   // id는 username으로 따로 꺼내서 사용하고, 나머지는 rest 객체로 설정
    } = user;
    console.log(username, rest);
};
test3();

/**
 * 함수에서 객체 구조분해할당
 */
const handleId = ({id}) => console.log(id);
const handleName = ({name: {firstName, lastName}}) => console.log(firstName, lastName);
const handleSns = ({sns: [mainSns, subSns]}) => console.log(mainSns, subSns);

const test4 = () => {
    const user = {
        id: 'honggd',
        name: {
            firstName: '길동',
            lastName: '홍'
        },
        sns: ['tiktok', 'thread', 'X']
    };
    handleId(user);
    handleName(user);
    handleSns(user);

};
test4();