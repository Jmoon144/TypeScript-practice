//Boolean(true/false)
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//String('', ""), let재할당 가능, ` => ${}
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.
I'll be ${age + 1} years old next month.`;

let sentence1: string =
  "Hello, my name is " +
  fullName +
  ".\n\n" +
  "I'll be " +
  (age + 1) +
  " years old next month.";

//Array
let list: number[] = [1, 2, 3];
// 제네릭 배열
let list1: Array<number> = [1, 2, 3];

//Tuple

// 튜플 타입으로 선언
let x: [string, number];
// 초기화
x = ["hello", 10]; // 성공
// 잘못된 초기화
x = [10, "hello"]; // 오류

console.log(x[0].substring(1)); // 성공
console.log(x[1].substring(1)); // 오류, 'number'에는 'substring' 이 없습니다.

x[3] = "world"; // 오류, '[string, number]' 타입에는 프로퍼티 '3'이 없습니다.
console.log(x[5].toString()); // '[string, number]' 타입에는 프로퍼티 '5'가 없습니다.

//열거(Enum) = 값의 집합에 더 나은 이름을 붙여줄 수 있다.
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

console.log(colorName); // 값이 2인 'Green'이 출력됩니다.

//Any = 애플리케이션을 만들 때 알지 못하는 타입을 표현할 때 사용한다.
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

let list2: any[] = [1, true, "free"];

list2[1] = 100;

// ****void*** = 어떤 타입도 존재할 수 없음 any와 반대이고 함수에서 반환 값이 없을 때 타입 표현 사용
function warnUser(): void {
  console.log("This is my warning message");
}

let unusable: void = undefined;
unusable = null; // 성공  `--strictNullChecks` 을 사용하지 않을때만

//객체(object)

declare function create(o: object | null): void;

create({ prop: 0 }); // 성공
create(null); // 성공

create(42); // 오류
create("string"); // 오류
create(false); // 오류
create(undefined); // 오류
