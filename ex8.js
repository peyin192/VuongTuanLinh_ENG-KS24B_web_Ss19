let month = parseFloat(prompt("Hay nhap thang"));

if (month >= 1 && month <= 12) {
    switch (month) {
        case 1 : case 2 : case 3 :
            console.log(`Thang ${month} la mua xuan`);
            break;
        case 4 : case 5 : case 6 :
            console.log(`Thang ${month} la mua he`);
        case 7 : case 8 : case 9 :
            console.log(`Thang ${month} la mua thu`)
        case 10 : case 11 : case 12 :
            console.log(`Thang ${month} la mua dong`)
    }
} else{
    parseFloat(prompt("Vui long nhap dung gia tri"))
}
