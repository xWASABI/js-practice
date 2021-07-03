// Lesson
let temp = 55

// Logical and < && > Operator - True if both side are true; False otherwise.
if (temp >= 60 && temp <= 90){
    console.log('It is a nice day out')
}
// Logical or < || > Operator - True if both side are true; False otherwise.
else if (temp <= 0 || temp >= 120 ){
    console.log('do not go outside')
} else {
    console.log('idc')
}

// Challenge
console.log('Challenge below')

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both Vegan? Only offer vegan dishes
if (isGuestOneVegan && isGuestTwoVegan){
    console.log('offering only vegan dishes')

} 
// At least one Vegan - Make sure to  both dishes
else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('offer both dishes')
} 
// Offer all dishes
else {
    console.log('offer all food')
}

 