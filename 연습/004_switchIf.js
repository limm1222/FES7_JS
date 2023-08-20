// switch 문을 if 문으로 고치기

let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}
let a = 2 + 2;

if (a === 3) {
	alert( '비교하려는 값보다 작습니다.' );
} else if ( a === 4) {
	alert( '비교하려는 값과 일치합니다.' );
} else if ( a === 5) {
	alert( '비교하려는 값보다 큽니다.' );
} else {
	alert( '어떤 값인지 파악이 되지 않습니다.' );
}


// case 구분 묶기 (switch 문은 break 가 없으면 break 를 만날 때까지 실행됨)

let a = 3;

switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert('계산 결과가 이상하네요.');
}


// 삼항 연산자

// 아보카도 코드 바꾸기
// 파선아실 (파라미터는 선언할 때, 아규먼트는 실제 사용할 때)

let 아보카도 = true;

if (아보카도) {
	console.log("아보카도 있었어(우유6개사옴)")
} else {
	console.log("아보카도 없었어(우유1개사옴)")
} // 아보카도 있었어 (우유 6개 사옴)


// 삼항 연산자로 바꾸기
function 아보카도사와(파라미터) {
	return 파라미터 ? "아보카도 있었어(우유6개사옴)" : "아보카도 없었어(우유1개사옴)"
}
console.log( 아보카도사와(아보카도) ); // 아보카도 있었어(우유6개사옴)


// 삼항 연산자를 if 문으로 만들기
function getFee(파라미터) {
    return 파라미터 ? '$2.00':'$10.00';
}

getFee(true) // '$2.00'


// if문으로 바꾸기
function getFee(파라미터) {
    if (true) { return '$2.00'; }
    else { return '$10.00'; }
}

getFee(true) // '$2.00'


// 리턴값
// console.log("???"); 의 반환값(return)은 undefined 이다.
// console.log에 반환값이 필요할까? 필요없다. console.log()는 콘솔창에 표시하고 리턴값이 없다.
// 함수의 실행 결과값이 undefined 이란 의미다. (return undefined 가 생략되어 있다.)

function test(p) {
     return p+2
}

test(10); // 12


// 고급 스킬 (return 활용법) : return 은 값을 돌려주기도 하지만 return 을 만나면 함수가 종료된다.

// index 0 ~ 99 까지 실행
function checkNum(파라미터) {
    for (let index = 0; index < 100; index++) {
    	console.log(index);
        if(파라미터==index) {
            console.log("범위안에 값이 있습니다.");
        }
    }
    return "아 끝났다"
}

console.log(checkNum(30)); // 30 이후에도 99까지 인덱스를 출력한다.
// index 0 ~ 30 까지 실행
function checkNum(파라미터) {
    for (let index = 0; index < 100; index++) {
    	console.log(index);
        if(파라미터==index) {
            console.log("범위안에 값이 있습니다.");
            return "빨리 끝났다";
        }
    }
    return "아 끝났다"
}

console.log(checkNum(30));


// 디스트럭쳐링 (구조분해할당)
// 배열의 구조분해할당
// 순서에 영향을 받는다.

const arr = [1,2,3];
console.log(arr); // [1,2,3]

const [a,b,c] = arr; // 구조분해할당
console.log(a,b,c, "구조분해할당한것"); // 변수명에 관계없이 순서대로 들어감

// 주의할 점은 key 가 같아야 한다. 배열과 달리 순서의 영향을 받지 않는다. (key 로 찾기 때문)

// var o = { p: 42, q: "hello"}
var o = { age: 42, speak: "hello"}

// key 가 불일치하면 할당되지 않는다.
var { p, q } = o;
console.log(p); // undefined
console.log(q); // undefined

// 구조분해할당 (디스트럭쳐링)
var { age, speak, up } = o;
console.log(age); // 42
console.log(speak); // hello
console.log(up); // undefined

//변수 기본값 설정 (key 에 매칭된 value 가 undefined 일 경우 기본값이 적용됨)
var o = { age: 42, speak: "hello"}

// key의 value가 undefined 경우에 대해 기본값 할당
var { age=30, speak="hi", man="철수" } = o;

console.log(man); // 철수 : 변수 o에 없는 undefined 로 기본값 적용됨
console.log(age); // 42 : 변수 o에 값이 있어 기본값 30이 적용안됨
console.log(speak); // hello : 변수 o에 값이 있어 기본값 hi가 적용안됨

//새로운 변수 이름으로 선언하기
//name 은 기본적으로 window.name 이라는 기본 속성이 있어서 console.log 의 결과가 나온다.
//다른 변수명으로 하면 age 와 같이 참조 오류(Uncaught ReferenceError)가 나온다.
//전역에서는 name 이라는 변수명을 쓰지 말자

var o = { age: 42, name: "hello" };

// 구조분해할당할때 {원래키값:내가쓸변수명,원래키값:내가쓸변수명}
var { name:이름, age:나이 } = o;

console.log(나이); // 42
console.log(이름); // true
console.log(name); // hello
console.log(age); // Uncaught ReferenceError: age is not defined

//실무에서 사용하는 것 (복잡한 구조를 함수를 통해 구조분해할당하여 파악 또는 활용함)

var o = { age: 42, name: "hello" };
var {name,age} = o;

function name(o) {
    // o = { age: 42, name: "hello" };
    const {name,age} = o;
    console.log(name,"이름"); // hello
    console.log(age,"나이"); // 42
}

name(o);


// && (and/논리곱)

// 모든 조건이 참(true) 이어야 논리연산의 결과가 참이다.
// true && true 의 결과는 true (1x1=1)
// true && false 의 결과는 false (1x0=0)
// false && false 의 결과는 false (1x1=1)

const a=3;

console.log("a가 2보다 큽니까? 그리고 a가 5보다 작습니까?");

if (a>2 && a<5) { // true && true 모두가 참이어야 한다.
    console.log("네 맞습니다.");
}

// || (or/논리합)

// 하나의 조건이 참(true) 라면 논리연산의 결과는 참이다.
// true || true 의 결과는 true (1+1=2)
// true || false 의 결과는 true  (1+0=1)
// false || false 의 결과는 false   (0+0=0)

const a=3;

if (a>2 || a<5) { // 둘 중 하나만 true 이면 된다.
	console.log("a가 2보다 크거나 a가 5보다 크면 통과합니다.");
}


// 클로저
// a 가 함수() 실행전에 선언되지 않거나 없어지면 오류가 발생한다.
// 전역이 아닌 함수만이 변수를 기억하게 하는 방법이 필요하다.

const a=1;

function 함수() {
    console.log(a); // 1
}

함수();

// 함수를 만드는 함수() 내부에 있는 함수() 가 클로저
// 함수가 실행되고 종료되면 함수를만드는함수() 가 날란다.
// 그걸 지켜주기 위해 클로저를 쓴다.

// 클로저 -> 격리된 환경

function 함수를만드는함수(x) {
    const a=1;
    function 함수() {
		console.log(x);
    }
    return 함수;
}
const 함수를만드는함수를통해만든함수 = 함수를만드는함수(3); // 함수()가 리턴되어 들어감
함수를만드는함수를통해만든함수();

// 함수가 실행되나면 날아간다는 것은 함수 종료 후 코드블럭의 변수와 내부의 함수가 메모리에서 사라짐
// 가비지 컬렉터가 메모리를 회수한다.
// 코드 블럭의 내부는 '함수를만드는함수를통해만든함수' (새로운 변수)에 들어가게 된다.
// 새로운 변수는 코드 블럭을 가두고 혼자 쓰기 위해 가져간다.
// 클로저는 격리된 환경 (닫힌것)
// 함수를만드는함수()는 종료 후 내부함수와 변수값은 메모리에서 지워진다. 하지만 새로운 변수가 return으로 반환되는 내부함수 클로저를 참조하고, 클로저가 변수값을 참조하면서 연결된 것들은 메모리에서 지워지지 않도록 붙잡는다.
// 다시말해, 클로저는 새로 할당된 변수에서 참조하고 있어서 사라지지 않고 x까지 붙들고 있다. (클로저 형성)
// 다른 변수에 넣어 사용하면 클로저는 계속 생성된다.

// 클로저 -> 격리된 환경

function 함수를만드는함수(x) {

	function 함수() {
		console.log(x);
    }
    return 함수;
}
const 함수를만드는함수를통해만든함수 = 함수를만드는함수(3); // 함수()가 리턴되어 들어감
함수를만드는함수를통해만든함수(); // 함수가 사라져도 값 3을 가져올 수 있다.

const 함수를만드는함수를통해만든함수2 = 함수를만드는함수(2); // 함수()가 리턴되어 들어감
함수를만드는함수를통해만든함수2(); // 함수가 사라져도 값 2을 가져올 수 있다.


// 화살표 함수
// 화살표 함수는 쉽다.

const 함수명 = (파라미터) => {
	return 파라미터*2;
}

const 함수명2 = (파라미터) => 파라미터*2 // (특수한 문법) 바로 리턴이 된다.

console.log([1,2,3,4,5].map(파라미터)=>파라미터*2);