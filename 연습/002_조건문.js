let 아보카도 = true;

if (아보카도) {
  console.log("아보카도 있었어(우유6개사옴)");
} else {
  console.log("아보카도 없었어(우유1개사옴)");
} // 아보카도 있었어 (우유 6개 사옴)

function 여보우유사와() {
  아보카도개수 = prompt("아보카도몇개");
  if (Number(아보카도개수) > 0) {
    console.log("아보카도 있었어 (우유6개사옴)");
  } else {
    console.log("아보카도 없었어 (우유1개사옴)");
  }
}

여보우유사와();
