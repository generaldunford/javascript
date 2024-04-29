for(let i = 0; i < 10; i++){
    console.log(i);

}


let boutique = [
    {name: "jeans", price: 20000, quantity:1},
    {name: "shoe", price: 45000, quantity:2},
    {name: "shoe", price: 90000, quantity:3},
    {name: "shirt", price: 10000, quantity:4},
] 

  //  for(let a = 0; a < boutique.length; a++){
  //      console.log(boutique[a].name + "" + boutique[a].price);
  //  }

  for(let f of boutique){
    console.log(f.price);
  }

  let person = {
    name: 'john',
    age: 1,
    city: "lagos"
  }

  // console.log(person['name']);
  // console.log(person['age']);
  // console.long(person['city']);


  for(let property in person){
    console.log(person[property]);
  }

 //  for(let a = 0; a < boutique.length; a++){
  //      console.log(boutique[a].name + "" + boutique[a].price);
  //  }

  //for(let f of boutique){
  //    console.log(f.price);
  //  }

 // let b = 0;
 // while(b < 10){
 //   console.log(b);
 //   b++
 // }

  let c = 10;
  do{
     console.log(c);
     c++
  }while(c < 10)

 // for(let c = 10; c < 10; c++){
 //     console.log(c);
 // }

 for(let c = 0; c < 10; c++){
     console.log("i will be a better programmer");
 }

