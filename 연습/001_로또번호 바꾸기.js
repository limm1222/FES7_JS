// https://search.naver.com/search.naver?sm=tab_sug.aslt&where=nexearch&query=%EB%A1%9C%EB%98%90%EB%8B%B9%EC%B2%A8%EB%B2%88%ED%98%B8%EC%A1%B0%ED%9A%8C&oquery=%EB%A1%AF%EB%98%90&tqi=iMskjsp0J1sssKgHM%2BGsssssteZ-260740&acq=%EB%A1%9C%EB%98%90%EB%8B%B9&acr=1&qdt=0&acir=1

// 자바스크립트로 로또 번호 바꾸기
// 첫번째 로또 공 dom 요소 가져오기
const ball1 = document.querySelector(
  "#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)"
);

console.dir(ball1); // 첫번째 로또 공(ball1)의 개체의 속성
ball1.innerHTML; // 첫번째 로또 공의 속성 중 text 가져오기 (HTML 요소)
ball1.innerHTML = 10; // ball1의 text 바꾸기

// 함수로 만들기
function 첫번째공바꾸기(numStr) {
  const ball1 = document.querySelector(
    "#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)"
  );
  ball1.innerHTML = numStr;
}

첫번째공바꾸기(3); // 첫번째 로또 공의 글자를 3으로 바꾸기

// 프롬프트로 입력받은 숫자로 첫번째 로또 공 바꾸기
function 첫번째공바꾸기(numStr) {
  // 첫번째 로또 공의 요소의 js path copy
  const ball1 = document.querySelector(
    "#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)"
  );
  ball1.innerHTML = numStr;
}

const numStr = prompt();

첫번째공바꾸기(numStr);

// 첫번째 로또 공을 클릭해서 숫자 바꾸기
//  (1) 로또 공을 클릭하는걸 인식해야함
//  (2) 그리고 인식이 되면 만들어둔 함수에 값을 입력할수도 있어야함
//  (3) 값을 입력하면 화면의 공 숫자가 바뀜

const ball1 = document.querySelector(
  "#main_pack > div.sc_new.cs_lotto._lotto > div > div.content_area > div > div > div:nth-child(2) > div.win_number_box > div > div.winning_number > span:nth-child(1)"
);

function 클릭했을때() {
  const numStr = prompt("로또번호를 입력하세요");
  ball1.innerHTML = numStr;
}

ball1.addEventListener("click", 클릭했을때); // 첫번째 공 클릭하고 숫자넣으면 바꾸기

// 로또의 첫번째 공을 클릭하면 프롬프트가 뜬다.
