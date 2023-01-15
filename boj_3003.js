// 문제풀이 참고 링크
// https://overcome-the-limits.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-3003-%ED%82%B9-%ED%80%B8-%EB%A3%A9-%EB%B9%84%EC%88%8D-%EB%82%98%EC%9D%B4%ED%8A%B8-%ED%8F%B0-with-nodejs

// FileSystem의 약자인 fs 모듈은 파일을 처리하는 모듈
// 직접 입력파일을 읽어와서 처리한다
const fs = require('fs');

// 입력값 전체를 하나의 문자열로 만들어서 split메서드로 배열을 만들고
// 그안의 요소를 가져다가 쓰는 방식으로 입력을 받는다
// require("fs").readFileSync("/dev/stdin")의 반환값은 문자열이 아닌 Buffer 객체다
// readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다
// 따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다
// 문자열로 바꾸기 위해서는 위의 코드처럼 toString() 메서드를 사용한다

// 현재 배열에 있는 값들이 문자열로 되어있기 때문에
// map(Number)함수를 사용해서 루프하면서 숫자로 변환
const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);

// 체스에서 필요한 말의 개수를 변수에 입력
const chess = [1, 1, 2, 2, 2, 8];

// map함수 참고 링크
// https://sysong85.tistory.com/111

// map()함수를 보면 첫번째 인자는 요소(값?)이고 두번째인자는 배열의 순서다
// input변수에 입력된 배열값을 map()함수로 루프를 돌면서
// chess변수와 비교하며 값을 계산한다 
const answer = input.map((item, index) => {
  return chess[index] - item;
})

// 참고 링크
// https://paperblock.tistory.com/62

// ES6 문법인 Spread Operator (스프레드 연산자) 를 사용해서
// 배열을 벗겨서 출력한다
console.log(answer);

