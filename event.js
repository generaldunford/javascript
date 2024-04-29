// function greeting(){
//    alert("sending notification")
// }

 let registerUsers = [
    {name: "john", email: "john@gmail.com", password: "12345"},
    {name: "doe", email: "doe@gmail.com", password: "57883"},
    {name: "prince", email: "prince@gmail.com", password: "p1022"},
 ]

 function Login(email, password){
     let checkifUserExists = registerUsers.find(function(each){
        return each.email === email && each.password === password
     })

     if(checkifUserExists == undefined){
        alert("invalid")
     }else{
        alert("successful")
     }

 }

 function handleChange(){
    alert('you press a key')
 }
 // registerUsers.find(function(each){
 //   console.log('${each.email} ${each.password}');
 // })

// function hello(){
//    alert("hello")
// }

// setTimeout(hell, 4000)

