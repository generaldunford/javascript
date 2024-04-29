let registerUser = []

let name = prompt("enter your name")
let email = prompt("enter your email")
let password = prompt("enter your password")


let user = {
    thename: name,
    theemail: email,
    thepassword: password
}
registerUser.push(user)

console.log(registerUser);