// Reduce

// sum of an array using loop
// var sumOfArr = 0;
// const arr = [4,7,3,8,5];
// // for (let i = 0; i < arr.length; i++) {
// //     sumOfArr += arr[i];
// // }

// // console.log(sumOfArr);

// // using reduce
// // var reduceSumArr = arr.reduce((acc,curr)=>{ return acc + curr},0);
// // console.log(reduceSumArr);

// // count all users with different age values
// const users = [
//     { firstName: "John", lastName: "Doe", age: 25 },
//     { firstName: "Jane", lastName: "Smith", age: 22 },
//     { firstName: "Emily", lastName: "Johnson", age: 30 },
//     { firstName: "Michael", lastName: "Brown", age: 27 },
//     { firstName: "Chris", lastName: "Davis", age: 23 }
//   ];

//   const AgeMap = users.reduce(AgeFreq,{});

//   function AgeFreq(AgeMap,user){
//     let age = user.age;
//     if (!(age in AgeMap)){
//         AgeMap[age] = 1;
//     }
//     else{
//         AgeMap[age]++;
//     }
//     return AgeMap;
//   }

//   console.log(AgeMap);


// find max using reduce
// data = [23,45,3,4,6,77,12];

// const max = data.reduce((max,curr)=>{
//     if(curr > max){
//         max = curr;
//     } 
//     return max;  
// },0);

// console.log(max);

//Promises
//promises v/s Callbacks

//E-commerce

// const cart = ["shoes","watches","shirt","glasses","shorts"];

//createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet());


// will not work with .then() as it is a simple function not a promise
// function createOrder(cart){
//     console.log("order created")
// }


// function createOrder(cart){
//     return new Promise((resolve,reject)=>{
//         if (cart.length > 0){
//             resolve("12345")
//         }
//         else{
//             const err = new Error("CART EMPTY");
//             reject(err.message);
//         }
//     });
// }

// function orderPayment(orderId){
//     return new Promise((resolve,reject)=>{
//         if (orderId) {
//             resolve("Payment Successful",orderId);
//         }
//         else{
//             reject(new Error("Payment unsuccessful"));
//         }
//     });
// }

// function orderSummary(orderId){
//     return new Promise((resolve,reject)=>{
//         if (orderId){
//             resolve("Order Summary");
//         }
//         else{
//         reject(new Error("Order Summary not available"));
//         }
//     });
// }


// function updateWallet(){
//     return new Promise((resolve)=>{
//         resolve("Wallet Updated");
//     })
// }

// console.log(createOrder(cart));

// createOrder(cart)
// .then(orderPayment(orderId))
// .then(orderSummary(orderId))
// .then(updateWallet());



