let userName = "Zeyad"
let age = 19 
let phone = "01100000000";
let points =0
console.log(phone.length)
if (phone.length!=11) {
    console.log("Please Check the Phone Number")
}
if (phone.startsWith("010")) {
    points+= 5
    console.log(points)
}else if (phone.startsWith("011")) {
    points += 6
    console.log(points)
}else if (phone.startsWith("012")) {
    points+=7
    console.log(points)
}else{
    points+=8
    console.log(points)
}
console.log( `Hi ${userName} you earned ${points}`)
if (age > 18) {
    console.log(`Welcome ${userName} Your Age is ${age} So You Qualified To Travel With Us !  ` )
}
else if (age< 18) {
    
    console.log(`Welcome ${userName} Your Age is ${age} So You Are Not Qualified To Travel With Us ! :-( `)
}