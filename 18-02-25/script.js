// function checkTable() {
//     console.log("Check table");
// }

// function checkMenu(){
//     console.log("check menu");
// }

// function orderStarter(){
//     console.log("order starter");
// }

// function orderMainCourse(){
//     console.log("order main course");
// }

// function orderDessert(){
//     console.log()
// }




// Callback v/s HOF

// data = [2,4,6,8,10];

// const calculateDoubleData = function (data) {
//     const output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }

// const calculateHalfData = function (data) {
//     const output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// const calculateAddTen = function (data) {
//     const output = [];
//     for (let i = 0; i < data.length; i++){
//         output.push(data[i] + 10);
//     }
//     return output;
// }

// console.log(calculateDoubleData(data));
// console.log(calculateHalfData(data));
// console.log(calculateAddTen(data));

//HOF

// var data = [2,4,6,8,10];
// const operation = function (data,x){
//     const output = [];
//     for(let i = 0; i < data.length; i++){
//         output.push(x(data[i]));
//     }
//     return output;
// }

// const double = function(ele){
//     return ele*2;
// }

// const half = function(ele){
//     return ele/2;
// }

// const addTen = function(ele){
//     return ele + 10;
// }

// // console.log(operation(data,double));
// // console.log(operation(data,half));
// // console.log(operation(data,addTen));

// //console.log(data.map(double));

// // Polyfill of map using prototype

// Array.prototype.dataCalculator = function (logic){
//     var output = [];
//     for (let i = 0; i < this.length; i++){
//         output.push(this[i]);
//     }
//     return output;
// }

// // console.log(data.dataCalculator(double));

// // Map
// radiusData = [2,9,16,42,71]

// const calculateDiameter = function(radius){
//     return radius*2;
// }

// const calculateArea = function(radius) {
//     return Math.PI*radius*radius;
// }

// const calculateCircumference = function(radius) {
//     return Math.PI*radius*2;
// }

// console.log(radiusData.map(calculateDiameter));
// console.log(radiusData.map(calculateCircumference));
// console.log(radiusData.map(calculateArea));

//Filter
// data = [2,4,5,6,7,9,11]
// function filterFun(data,condition){
//     output = [];
//     for(let i = 0; i < data.length; i++){
//         if (condition(data[i])){
//             output.push(data[i]);
//         }
//     }
//     return output;
// }

// Array.prototype.customFilter = function (condition){
//     output = [];
//     for (let i = 0; i < this.length; i++) {
//         if (condition(this[i])){
//             output.push(this[i]);
//         }
//     }
//     return output;
// }

// const isOdd = function(ele) {
//     if (ele%2 !=0){
//         return ele;
//     }
// }

// console.log(filterFun(data,isOdd));
// console.log(data.customFilter(isOdd));
// console.log(data.filter(isOdd));


const users = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Smith", age: 22 },
    { firstName: "Emily", lastName: "Johnson", age: 30 },
    { firstName: "Michael", lastName: "Brown", age: 27 },
    { firstName: "Chris", lastName: "Davis", age: 23 }
  ];
  

//Combine firstname and lastname using map

const fullNames = users.map((user)=>{
    return user.firstName + " " + user.lastName;
})
console.log(fullNames);

//Filter users by age
console.log(users.filter((user)=>{
    return user.age > 24;
}));
