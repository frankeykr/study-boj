// FileSystem의 약자인 fs 모듈은 파일을 처리하는 모듈
// 직접 입력파일을 읽어와서 처리한다
var fs = require('fs');

// 입력값 전체를 하나의 문자열로 만들어서 split메서드로 배열을 만들고
// 그안의 요소를 가져다가 쓰는 방식으로 입력을 받는다
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

// parseInt로 정수로 변환하고 0번째 배열에 넣는다
var a = parseInt(input[0]);

// parseInt로 정수로 변환하고 1번째 배열에 넣는다
var b = parseInt(input[1]);

// a*b값을 출력한다
console.log(a*b);