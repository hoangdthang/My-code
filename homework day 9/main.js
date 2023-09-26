//bai 1//
function isPrime(a, b) {
  if (Number.isInteger(a) && Number.isInteger(b) && a > 0 && b > 0 && a <= b) {
    return true;
  } else {
    return false;
  }
}
console.log("${a} và ${b} là số nguyên tố");
//bai2//
function sumPrimesInRanger(a, b) {
  let tong = 0;
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      tong += i;
    }
  }

  return tong;
}
const a = 1;
const b = 100;
const tong = sumPrimesInRanger(a, b);
console.log("Tổng các số nguyên tố từ ${a} đến ${b}là ${tong}");
