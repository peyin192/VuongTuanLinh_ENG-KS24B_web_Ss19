let number = parseFloat(prompt("Nhap so"))
if ( number % 3 == 0 && number % 5 == 0){
    console.log(` ${number} chia het cho ca 3 va 5 `)
} else {
    console.log(` ${number} khong chia het cho 3 va 5 `)
}