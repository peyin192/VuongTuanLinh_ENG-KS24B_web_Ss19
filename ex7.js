let num1 = parseFloat(prompt("Nhập số thứ nhất: "));
let num2 = parseFloat(prompt("Nhập số thứ hai: "));
let num3 = parseFloat(prompt("Nhập số thứ ba: "));

let maxNum = (num1 > num2 && num1 > num3) ? num1 : (num2 > num3 ? num2 : num3);
console.log(`Số lớn nhất là: ${maxNum}`);
