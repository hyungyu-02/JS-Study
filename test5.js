function add(a, b){
    return a + b;
}

const sum = add(2,3);
console.log(sum);

function hello(name){
    console.log('Hello, ${name}!');
}
hello('hyungyu');

//함수를 선언하는 또다른 방법(익명함수. 즉시 실행이 필요한 경우 적합)
const add2 = (a, b) => {
    return a + b;
}
//위 함수처럼 바로 return이 나오는 함수라면
const add3 = (a, b) => a+b;