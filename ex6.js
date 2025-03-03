let a = parseFloat(prompt("Nhap a"))
let b = parseFloat(prompt("Nhap b"))
let c = parseFloat(prompt("Nhap c"))
let x1
let x2
let check = b * b - 4 * a * c
if ( check < 0 ){
    console.log("PT vo nghiem")
} else if ( check == 0 ){
    x1 = - b / (2 * a)
    console.log(`PT co nghiem kep x1 = x2 = ${x1} `)
} else {
    x1 = (- b + Math.sqrt(check)) / (2 * a)
    x2 = (- b - Math.sqrt(check)) / (2 * a)

    console.log(`PT co 2 nghiem phan biet x1 = ${x1} va x2 = ${x2}`)
}