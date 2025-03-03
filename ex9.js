let result = "javascript" + 5; 
console.log(result); // "javascript5"
// Khi cộng chuỗi với số, JavaScript sẽ tự động chuyển số thành chuỗi và nối vào chuỗi ban đầu.

let result = "javascript" - 1;
console.log(result); // NaN
// Chuỗi "javascript" không thể chuyển thành số để thực hiện phép trừ, kết quả là NaN (Not a Number).

let result = "3" + 2;
console.log(result); // "32"
// Khi có chuỗi, toán tử `+` sẽ thực hiện phép nối chuỗi, biến số 2 thành chuỗi và ghép lại.

let result = "5" - 4;
console.log(result); // 1
// Khi thực hiện phép trừ, JavaScript sẽ cố gắng chuyển chuỗi thành số trước, nên "5" trở thành 5, và 5 - 4 = 1.

let result = isNaN("123");
console.log(result); // false
// "123" là một chuỗi số hợp lệ, khi chuyển thành số không bị lỗi, nên isNaN trả về false.

let result = isNaN("hello");
console.log(result); // true
// "hello" không thể chuyển thành số hợp lệ, nên isNaN trả về true.

let result = Number.isNaN("123");
console.log(result); // false
// "123" là một chuỗi nhưng không phải là NaN. Number.isNaN chỉ trả về true nếu giá trị là NaN thực sự.

let result = Number.isNaN(NaN);
console.log(result); // true
// NaN thực sự là NaN, nên Number.isNaN(NaN) trả về true.
