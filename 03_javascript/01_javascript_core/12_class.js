/**
 * class는 생성자함수의 개선된 문법
 * - class 선언을 통해 타언어의 상속모델과 흡사하게 작성
 * - 생성자함수/프로토타입객체에 대한 선언을 함께 작성
 */
class Pet {
    static address = '서울시 금천구 독산동';
    static introduce(){
        console.log('저는 반려동물🐶🐸😺입니다.');
    }

    constructor(name, breed, weight, age, ...colors){
        this.name = name;
        this.breed = breed;
        this.weight = weight;
        this.age = age;
        this.colors = colors;
    }
    // 프로토타입 메소드
    bark(){
        return this.weight < 10 ? '왈왈' : '멍멍';
    }
}

const test1 = () => {
    const pet = new Pet('구리구리', '푸들', 3, 10, 'white');
    console.log(pet);
    console.log(pet.bark()); 
    console.log(pet.__proto__);

    console.log(Pet.address);
    Pet.introduce();
};
test1();

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`안녕하세요? ${this.age}세 ${this.name}입니다.`);
    }
}

class Dev extends Person {
    constructor(name, age, ...langs) {
        super(name, age);
        this.langs = langs;
    }

    // 오버라이드
    sayHello(){
        super.sayHello();
        console.log(`저는 ${this.langs} 개발자입니다.`);
    }
}

const test2 = () => {
    const person = new Person('홍길동', 33);
    console.log(person);
    person.sayHello();

    const dev = new Dev('신사임당', 48, 'Python', "Javascript");
    console.log(dev);
    dev.sayHello();
    
};
test2();
