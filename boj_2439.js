const fs = require('fs');
const input = fs.readFileSync('example.txt').toString();
let number = Number(input);

// number가 5인경우
// i는 0~4가 될때까지 루프
for (let i=0; i<number; i++) {
  // star에 빈 문자열 추가
  let star = '';
  // j는 number빼기1로 4까지 지정 
  // 4~0이 될때까지 루프
  for (let j=number-1; j>=0; j--) {
    // i는 0 이고 j는 4임
    // i는 j보다 크거나 같나?
    // false
    // star변수에 빈문자열 추가 (공백한개째)
    // start = " ";

    // i는 0 이고 j는 3임
    // i는 j보다 크거나 같나?
    // false
    // star변수에 빈문자열 추가 (공백두개째)
    // start = "  ";

    // i는 0 이고 j는 2임
    // i는 j보다 크거나 같나?
    // false
    // star변수에 빈문자열 추가 (공백세개째)
    // start = "   ";

    // i는 0 이고 j는 1임
    // i는 j보다 크거나 같나?
    // false
    // star변수에 빈문자열 추가 (공백네개째)
    // start = "    ";

    // i는 0 이고 j는 0임
    // i는 j보다 크거나 같나?
    // ture
    // star변수에 별문자 추가
    // start = "    *";
    
    // 루프 탈출
    star += j <= i ? '*' : ' ';
  }
  // 출력
  console.log(star);
}
