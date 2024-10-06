const a = 2
console.log(a)
let b = 200;
console.log(b);
b = 2;
const equals = a === b;
//같은지 비교하여 boolean 값 반환
// =가 두개면 타입검사를 하지 않음, 3개면 타입까지 검사
// =가 두개인 경우 숫자 1과 문자 '1'을 같은 것으로 본다
console.log(equals);
const eq = true == a;
console.log(eq);

const num = 2;
const tx = '4';
const fulltx = num+tx;
console.log(fulltx);