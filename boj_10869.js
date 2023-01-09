// FileSystem의 약자인 fs 모듈은 파일을 처리하는 모듈
// 직접 입력파일을 읽어와서 처리한다
var fs = require('fs');

// 입력값 전체를 하나의 문자열로 만들어서 split메서드로 배열을 만들고
// 그안의 요소를 가져다가 쓰는 방식으로 입력을 받는다
// require("fs").readFileSync("/dev/stdin")의 반환값은 문자열이 아닌 Buffer 객체다
// readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다
// 따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다
// 문자열로 바꾸기 위해서는 위의 코드처럼 toString() 메서드를 사용한다
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

// parseInt로 정수로 변환하고 0번째 배열에 넣는다
var a = parseInt(input[0]);

// parseInt로 정수로 변환하고 1번째 배열에 넣는다
var b = parseInt(input[1]);

// a+b값을 출력한다
console.log(a+b);

// a-b값을 출력한다
console.log(a-b);

// a*b값을 출력한다
console.log(a*b);

// a/b값을 출력한다
// 여기서 한번 틀렸다
// 이대로 하면 소수점 그대로 제출되기때문에
// Math.floor()를 이용해서 소수점을 버릴 필요가 있다
// 참고 URL
// https://wdevp.tistory.com/59
console.log(Math.floor(a/b));

// a*b값을 출력한다
console.log(a%b);