// 아직 이해가 안됨
// https://overcome-the-limits.tistory.com/entry/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B0%B1%EC%A4%80-3003-%ED%82%B9-%ED%80%B8-%EB%A3%A9-%EB%B9%84%EC%88%8D-%EB%82%98%EC%9D%B4%ED%8A%B8-%ED%8F%B0-with-nodejs
const fs = require('fs');
const input = fs.readFileSync('example.txt').toString().trim().split(' ').map(Number);
const chess = [1, 1, 2, 2, 2, 8];

// 어느정도 이해는 되었는데
// 좀더 이해 필요
const answer = input.map((item, index) => {
  // console.log(item);
  return chess[index] - item;
})
// ... 점3개가 아직도 모르겠음
console.log(...answer);


