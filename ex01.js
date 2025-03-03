let month = parseFloat(prompt("Hay nhap thang"));
let day;

if (month >= 1 && month <= 12) {
    switch (month) {
        case 4 : case 6 : case 9 : case 11:
            console.log(`Thang ${month} co 30 ngay`);
            break;
        case 1 : case 3 : case 5 : case 7 : case 8 : case 10 : case 12:
            console.log(`Thang ${month} co 31 ngay`);
        case 2:
            console.log(`Thang ${month} co 29 ngay`)
    }
} else{
    parseFloat(prompt("Vui long nhap dung gia tri"))
}
