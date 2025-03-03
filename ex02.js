function isLetter(char) {
    return /^[a-zA-Z]$/.test(char);
}

const input = prompt("Nhập một ký tự: ");
if (input) {
    console.log(`Ký tự '${input}' là chữ cái:`, isLetter(input));
} else {
    console.log("Bạn chưa nhập ký tự nào.");
}
