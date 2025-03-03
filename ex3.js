let number = parseFloat(prompt("Hay nhap vao so tien"))
let option = prompt("Ban muon doi sang VND hay USD")
let vnd
let usd
if ( option == "VND"){
   vnd = number * 23000
   console.log(vnd + " " + "VND") 
} else if ( option == "USD" ){
    usd = number / 23000
    console.log(usd + " " + "USD")
}