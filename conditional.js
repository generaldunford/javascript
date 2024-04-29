let  score = 54

if(score >= 70 && score <= 100){
    console.log("A");
 
}else if(score >=60 && score < 70){
          console.log("B");



}else if(score >= 50 && score < 60){
         console.log("C");

}else if(score >=40 && score < 50){
          console.log("Fail");
          
}

let day = 1

switch(day){

case 1:
        console.log("today is monday");
        break;

  case 2:
       console.log("today is tuesday")
       break;

case 3:
      console.log("today is wednesday")
      break;

case 4:
      console.log("today is thurday")
     break;

 case 5:
      console.log("today is friday")
     break;

 default:
      console.log("it is weekend");


     
}
    
let email = prompt("enter your email address")
let password = prompt("eneter your password")

if(email === "a@b.com" && password === "12345"){
    alert("login successful")

}else{
    alert("invalid credentails")
}



    

