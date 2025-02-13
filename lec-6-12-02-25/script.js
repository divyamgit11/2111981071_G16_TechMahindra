// console.log(1);
// console.log(sumOfTwo(10,5));
// function sumOfTwo(a,b) {
//     return a + b;
// }
// setTimeout(()=>{console.log(4)},2000);
// var start = 1;
// var end = 1000000000000000;

// while (start < end) {
//     start++;
// }
// console.log("end");
// setInterval(()=>{console.log(9)},4000);


// Whenever the main execution thread encounters a blocking task it waits and does not execute browser APIs 
// like setTimeout or setInterval even if they are completed

// Functions

func1();
func2(); //TypeError: Not a functiom
func3(); //TypeError: Not a function

// function statement or declaration
function func1() {
    console.log("Hello from func1");
}

// function expression
var func2 = function func2Name(){
    console.log("Hello from func2");
}

//Arrow function
var func3 = ()=>{
    console.log("Hello from func3")
}

func1();
func2();
func2;  // Not a function call
func3();
func2Name(); // ReferenceError