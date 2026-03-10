function Pet(name, breed, weight, age, ...colors) {
    // this용법: 생성자함수안에서 this가 현재객체를 가리킨다.
    this.name = name;
    this.breed = breed;
    this.weight = weight; 
    this.age = age;
    this.colors = colors;
}
// new Pet() 생성객체들의 부모 prototype객체에 메소드 등록
Pet.prototype.bark = function(){
    return this.weight < 10 ? '왈왈' : '멍멍';
};

// 생성자함수의 속성/메소드
Pet.address = '서울시 금천구 독산동';
Pet.introduce = function(){
    console.log('저는 반려동물🐶🐸😺입니다.');
};

/**
 * 자바스크립트 객체지향 언어
 * - prototype기반의 상속모델
 * - 모든 객체는 해당타입의 prototype를 상속받아 사용할 수 있다. 
 * 
 * - Constructor함수객체 Pet
 * - Prototype객체 Pet.prototype: 생성자함수와 함께 생성됨.
 * - 생성된 객체: new연산자로 생성자함수를 호출한 결과
 * 
 */
const test1 = () => {
    // 생성자함수객체 Pet
    console.log(Pet);
    // 프로토타입객체 
    console.log(Pet.prototype);
    // 객체생성
    const pet = new Pet('구리구리', '푸들', 3, 10, 'white');
    console.log(pet);

    console.log(pet.__proto__);
    console.log(pet.__proto__ === Pet.prototype);

    // 프로토타입의 속성/메소드 작성 -> 자식객체 사용
    Pet.prototype.owner = '홍길동';
    console.log(pet.owner); 
    console.log(pet.bark());

    // 생성자함수의 속성/메소드
    console.log(Pet.address);
    Pet.introduce();
};

test1();

/**
 * 프로토타입 체인
 * - 모든 프로토타입객체는 부모 프로토타입객체를 상속한다. 
 * - 최상위 프로토타입객체는 Object.prototype객체이다.
 */
const test2 = () => {
    const pet = new Pet('구리구리', '푸들', 3, 10, 'white');
    console.log(pet); // 생성객체
    console.log(pet.__proto__); // 
    console.log(pet.__proto__.__proto__);

    console.log(pet.toString());
};
test2();