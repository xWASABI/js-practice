// Lesson
let isAccountLocked = false
let userRole = 'user'

if (isAccountLocked){
    console.log('is account locked')
} else if (userRole === 'admin') {
    console.log('welcome admin')
}else {
    console.log('welcome')
}


// Challenge
let temp =  80
// It is freezing outside
if (temp <= 30){
    console.log('it is freezing outside')
}
// It is hot outsie
else if (temp >= 110){
    console.log('it is hot outside')
}
// Go for it is, nice!
else {
    console.log('go outside')
}
