//setTimeout setInterval

// function two() {
//     return 2;
// }

// function four() {
//     return 4;
// }

// console.log(1);
// console.log(two());
// setInterval(()=>{
//     console.log(3);
// },3000);
// console.log(four());
// setInterval(()=>{
//     console.log(5);
// },5000);
// console.log(6);

//Closure



// for (var i = 1; i <= 6; i++ ) {
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }

// function count(i) {
//     setTimeout(()=>{
//         console.log(i);
//     },1000);
// }

// for (var i = 1; i <= 6; i++) {
//     count(i);
// }


// function z() {
//     var b = 900;
//     function x() {
//         var a = 7;
//         function y() {
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }

// z();

//IMPORTANT

// var count = 0;

// function increment() {
//     count++;
// }

// increment();
// increment();
// increment();

// console.log(count); //3

// function MyCount() {    // this is a higher order function which can take another function as an argument and return functions.
//     var count = 0;

//     function increment() {
//         count++;
//         console.log(count);
//     }

//     return increment;
// }

// // incrementing using closure

// var outIncrement = MyCount();
// outIncrement() // 1
// outIncrement() // 2


function Counter() {
    var count = 0;
    
    this.increment = function() {
        count++;
        console.log(count);
    }

    this.decrement = function() {
        count--;
        console.log(count);
    }
}

var myCounter = new Counter();

myCounter.decrement();
myCounter.decrement();

myCounter.increment();
myCounter.increment();
