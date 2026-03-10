/**
 * 객체배열
 */
const test1 = () => {
    const pets = [];
    pets.push({
        name : '구리구리',
        breed : '푸들',
        weight : 3, 
        age : 10,
        color : ['white'],
        bark() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    pets.push({
        name : '애득',
        breed : '말티즈',
        weight : 4, 
        age : 9,
        color : ['white'],
        bark() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });
    pets.push({
        neme : '사랑이',
        breed : '코카스파니엘',
        weight : 13, 
        age : 5,
        color : ['white', 'brown'],
        bark() {
            return this.weight < 10 ? '왈왈' : '멍멍';
        }
    });

    console.log(pets);
};
test1();

/**
 * 생성자함수
 * - 객체생성을 위한 함수. new연산자와 함께 호출해야 한다.
 * - 관례적으로 생성자함수는 대문자로 시작!
 * - 함수선언식으로 작성 (함수표현식/화살표함수는 생성자함수로 사용불가)
 */
function Pet(name, breed, weight, age, ...colors) {
    // this용법: 생성자함수안에서 this가 현재객체를 가리킨다.
    this.name = name;
    this.breed = breed;
    this.weight = weight; 
    this.age = age;
    this.colors = colors;
    this.bark = function(){
        return this.weight < 10 ? '왈왈' : '멍멍';
    }
}

const test2 = () => {
    const pets = [];
    // pet = new Pet('구리구리', '푸들', 3, 10, 'white');
    // console.log(pet);
    pets.push(new Pet('구리구리', '푸들', 3, 10, 'white'));
    pets.push(new Pet('애득', '말티즈', 4, 9, 'white'));
    pets.push(new Pet('사랑이', '코카스파니엘', 13, 5, 'white', 'brown'));
    console.log(pets);

    pets.forEach((pet) => {
        console.log(`${pet.name}이/가 ${pet.bark()} 짖는다.🐶`);
    });
}
test2();

