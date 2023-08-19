// for문

let str = "";

for (let i = 1; i < 10; i++) {
  console.log(`9 x ${i} = ${9 * i}`);
}

console.log(str);

// while 문

// 조건식은 코드블럭({})이 실행되기 전에 평가된다.

// 1부터 9까지 수에 9를 곱합니다.
// 9에 어떤 수를 곱할 것입니다.
// 어떤 수는 1부터 시작하고, 1씩 증가하여 10보다 작을때 증가가 멈춥니다.
// 이렇게 어떤수와 9를 곱한 값을 출력합니다.

let i = 1;

while (i < 10) {
  console.log(9 * i++);
  // i++
}

// 배열의 반복 메소드 : arr.map()

// map 메소드의 원리
// 배열요소 각각에 대해서 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let index = 0; index < 9; index++) {
  // 구구단
  console.log(arr[index] * 9);
}

for (let index = 0; index < 9; index++) {
  // mapping 해서 새로운 배열 변환
  arr[index] = arr[index] * 9;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function 곱하기구해주는함수(num) {
  // 9를 곱해주는 함수
  return num * 9;
}

arr.map(곱하기구해주는함수); // 콜백함수로 mapping 해주는 함수
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.map(function (num) {
  return num * 2;
});

// [2, 4, 6, 8, 10, 12, 14, 16, 18]
// 배열의 map 메소드는 값을 하나씩 던저주는 애다.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.map(function (num, index, arr) {
  console.log(num, "현재값입니다.");
  console.log(index, "인덱스입니다.");
  console.log(arr, "배열입니다.");
});

arr.map(console.log);
// num index arr가 들어간다.
// 1 0 (5) [1, 2, 3, 4, 5]
// 2 1 (5) [1, 2, 3, 4, 5]
// 3 2 (5) [1, 2, 3, 4, 5]
// 4 3 (5) [1, 2, 3, 4, 5]
// 5 4 (5) [1, 2, 3, 4, 5]

// 배열의 반복 메소드 : arr.forEach()

// map 매서드와 달리 arr.forEach() 는 리턴값이 없다.
// 단순히 원소들을 하나하나 던져준다.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr.forEach(function (num) {
  console.log(num);
});

// map 매서드와 달리 리턴값이 없다.

// do...while

//무조건 do 의 코드 블럭을 일단 실행하고 반복하기

let result = "";
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result); // 12345

// 배열의 반복 메소드: for...of

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const item of arr) {
  console.log(item);
}

// 객체의 반복 메소드 : for...in

// 객체 안의 프로퍼티 개수 만큼 순환하고 키가 들어간다.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// "a: 1"
// "b: 2"
// "c: 3"
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  if (property == "a") {
    console.log("a가 있습니다.");
  }
}

if (object[a]) {
  console.log("a가 있습니다.");
}
const object = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9 };

// 9단 만들기
for (const property in object) {
  console.log(object[property] * 9);
}

// 배열에서 for...in 사용하기

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function 곱하기구해주는함수(num) {
  // 9를 곱해주는 함수
  return num * 9;
}

for (const item in arr) {
  console.log(곱하기구해주는함수(item)); // index 가 들어감
}

for (const item in arr) {
  console.log(곱하기구해주는함수(arr[item])); // 배열의 원소 값이 들어감
}

// for...in 은 객체의 반복을 위해 만들어 졌으며, 인덱스 순서가 중요한 배열(Array) 반복에서 사용은 추천하지 않는다.
// 배열 또한 객체이므로 프로퍼티가 포함될 수 있다.
// for..in은 특정 순서에 따라 인덱스를 반환하는 것을 보장할 수 없다.
// 반복되는 순서는 구현에 따라 다르기 때문에, 배열의 반복이 일관된 순서로 수행되지 못할 수 있다.
// 그렇기 때문에 배열에는 for...in 문을 사용하지 말고 일반적인 for문이나 for...of 문 또는 forEach() 메서드를 사용하길 권장한다.

const arr = [1, 2, 3];
arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있다.

for (const i in arr) {
  // 프로퍼티 x 도 출력된다.
  console.log(arr[i]); // 1 2 3 10
}

// arr.lenght 는 3이다.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1 2 3
}

// forEach 메서드는 요소가 아닌 프로퍼티는 제외한다.
arr.forEach((v) => console.log(v)); // 1 2 3

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당한다.
for (const value of arr) {
  console.log(value); // 1 2 3
}
