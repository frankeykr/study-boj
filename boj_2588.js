// FileSystem의 약자인 fs 모듈은 파일을 처리하는 모듈
// 직접 입력파일을 읽어와서 처리한다
const fs = require('fs');

// require("fs").readFileSync("/dev/stdin")의 반환값은 문자열이 아닌 Buffer 객체다
// readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다
// 따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다
// 문자열로 바꾸기 위해서는 위의 코드처럼 toString() 메서드를 사용한다

// 일부 입력값의 마지막에 개행문자가 포함된 경우가 종종 있다
// 이를 방지하기 위해서 trim()을 사용한다

// 입력값이 개행으로 되어있기때문에 split('\n')으로 잘라서
// 각각 A와 B에 넣는다
const [A, B] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// B값을 한자리씩 split('')으로 나눠서
// B0, B1, B2에 넣는다
const [B0, B1, B2] = B.split('');

// 문제에서 원하는 출력값대로 변수를 지정
const temp1 = A * B2;
const temp2 = A * B1;
const temp3 = A * B0;
const sum = temp1 + Number(`${temp2}0`) + Number(`${temp3}00`);

// 출력
console.log(`${temp1}\n${temp2}\n${temp3}\n${sum}\n`);