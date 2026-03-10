import _ from 'lodash'; // esmodule 방식

/**
 * 객체(object)
 * - python dict와 유사
 * - (속성명: 속성값) 모음 객체
 * - 속성명: 식별자/문자열 (모든 타입 가능)
 * - 속성값: 모든 타입 가능
 */
const test1 = () => {
    // 리터럴 생성
    const obj = {
        name: '홍길동',
        age: 33,
        married: true,
        hobby: ['넷플릭스', '야식', '수영'],
        pet: {
            name: '구리구리',
            breed: '푸들'
        },
        123: 456,
        'user-id': 'honngd',
        123: 789 // 속성명 중복을 허용하지 않음. 덮어쓰기
    };
    console.log(obj);

    // new 연산자를 이용한 객체 생성
    const obj2 = new Object();
    obj2.kor = 90;
    obj2.eng = 95;
    obj2.math = 80;
    console.log(obj2);    

    // 속성 읽기
    // 1. dot notation
    // 2. bracket notation
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.married);
    // console.log(obj.123);
    // console.log(obj.user-id);

    console.log(obj['name']);
    console.log(obj['age']);
    console.log(obj['married']);
    console.log(obj[123]);
    console.log(obj['user-id']);

    // 존재하지 않는 속성
    console.log(obj['parent']);
    // console.log(obj['parent']['name']);

    // 속성추가/수정/삭제
    obj.father = '홍명보';
    obj.father = '홍금보'; // 수정
    obj.father = null; // 속성값 제거
    delete obj.father; // 속성명 제거
    console.log(obj);

};
test1();

/**
 * 메소드: 객체의 속성값이 함수인 경우
 * 메소드에서 객체의 다른 속성을 참조하려면 this 참조 사용해야 함.
 */
const test2 = () => {
    const user = {
        username: '홍길동',
        run: function(){
            // this용법: 객체 메소드안에서 this는 현재객체를 가리킨다.
            console.log(`${this.username}이/가 달린다~`);
        },
        work: function(){
            console.log(this); // node환경에서 this는 global객체, 웹환경에서 this는 window객체를 가리킨다.
            console.log(`${this.username}이/가 일한다~`);
        },
        eat(){
            // 메소드 단축문법 
            console.log(`${this.username}이/가 밥먹는다~`);
        }
    };
    user.run();
    user['run']();

    user['work']();
    
    user['eat']();
};
test2();

/**
 * 객체를 namespace로 사용하기
 */
const calculator = {
    plus(a, b) {
        return a + b;
    },
    minus(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
    remainder(a, b) {
        return a % b;
    }
};

const test3 = () => {
    console.log(calculator.plus(10, 20));
    console.log(calculator.minus(10, 20));
    console.log(calculator.multiply(10, 20));
    console.log(calculator.divide(10, 20));
    console.log(calculator.remainder(10, 20));
};
test3();

/**
 * 반복순회 처리
 * - for..in`           
 * - Object.keys()
 * - Object.values()
 * - Object.entries()
 */
const test4 = () => {
    const dish = {
        name: '청국장',
        price: 15_000,
        ingredients: ['청국장', '양파', '대파', '마늘', '두부']
    }
    
    // for..in
    for (let attr in dish){
        console.log(attr, '->', dish[attr]);
    }

    // Object.keys()
    console.log(Object.keys(dish));
    Object.keys(dish).forEach((key, index, _arr) => {
        console.log(key, '-> ', dish[key]);
    });

    // Object.values()
    console.log(Object.values(dish));
    Object.values(dish).forEach((value) => console.log(value))
    Object.values(dish).forEach(console.log); // 전달된 값을 변경없이 그대로 처리

    // Object.entries()
    console.log(Object.entries(dish));
    Object.entries(dish).forEach((entry) => {
        const [key, value] = entry; // 구조분해할당
        console.log(key, '->', value);
    });
}
test4();

/**
 * 객체병합 
 * 1. 반복문(직접)
 * 2. Object.assign()
 * 3. 전개연산자
 * 4. loadash
 */
const test5 = () => {
    const obj1 = {
        name: 'banana',
        price: 1000
    };
    const obj2 = {
        name: '바나나',
        price: 2000,
        count: 10
    };

    const newObj = {}
    for(let key in obj1) {
        newObj[key] = obj1[key];
    }
    for(let key in obj2) {
        newObj[key] = obj2[key];
    }
    console.log(newObj)

    // Object.assign(newObj, obj1, obj2, ...)
    const newObj2 = Object.assign({}, obj1, obj2);
    console.log(newObj2);

    // ...전개연산자
    const newObj3 = {...obj1, ...obj2};
    console.log(newObj3);
};
test5();

/**
 * 얕은 복사
 * 깊은 복사 
 */
const test6 = () => {
    
    const obj1 = {
        name: '홍길동',
        tel: ['010-1234-1234', '010-5678-5678']
    };
    const obj2 = obj1; // 얕은 복사
    obj2.name = '고길동';
    console.log(obj2);
    console.log(obj1);

    const obj3 = {...obj1};
    obj3.name = '이길동';
    obj3.tel[0] = '010-8888-8888';
    console.log(obj3);
    console.log(obj1);

    // lodash 패키지 npm install lodash
    const obj4 = _.cloneDeep(obj1);
    obj4.name = '황길동';
    obj4.tel[0] = '010-7777-7777';
    console.log(obj4);
    console.log(obj1);

    const extra = {
        name: '고길동',
        address: '서울 금천구 독산동'
    };
    
    const newObj = {...obj1, ...extra}; // 속성값이 배열/객체에 대해서는 얕은 복사처리
    newObj.tel[0] = '010-4444-4444';
    console.log(newObj);
    console.log(obj1);

    const newObj2 = _.merge({}, obj1, extra); // 깊은 복사처리됨.
    newObj2.tel[0] = '031-1234-1234';
    console.log(newObj2);
    console.log(obj1);

};
test6();
