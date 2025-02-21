// // call, apply and bind 

// let student1 = {
//     firstName : "John",
//     lastName : "Doe",
//     // getResult : function(){
//     //     return "Passed";
//     // },
//     // getName : function(){
//     //     return this.firstName + " " + this.lastName;
//     // }
// }

// // console.log(object.firstName);
// // console.log(object.getResult());
// // console.log(object.getName());

// let student2 = {
//     firstName : "Mary",
//     lastName : "Sue"
// }

// function getName(className) {
//     console.log(`${this.firstName} ${this.lastName} from ${className}`);
//     return "passed";
// }

// let studentCall = getName.call(student1,"g16"); //.call() and.apply() directly invokes the function
// let studentApply = getName.apply(student2,["g14","g15","g16"]);  // in apply we can pass argsArray 

// console.log(studentCall); // from here we can see that call and apply invokes the function as the variable stores the return value

// let studentBind = getName.bind(student1,"g16");       // we need to call bind seperately

// studentBind();


// Event Bubbling : by bdefault child->parent->grandparent
// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("This is grandparent div")
// });

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("This is parent div")
// });

// document.getElementById("child").addEventListener("click",()=>{
//     console.log("This is child div")
// });

//Event capturing 
// document.getElementById("grandparent").addEventListener("click",()=>{
//     console.log("This is grandparent div")
// },{capture : true});

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("This is parent div")
// },{capture : true});

// document.getElementById("child").addEventListener("click",()=>{
//     console.log("This is child div")
// },{capture : true});



// Event Delegation
// document.getElementById("subjects").addEventListener("click",(e)=>{
//     window.location.href = e.target.id;
//     console.log("https://localhost/" + e.target.id);
// })

//Debouncing
document.getElementById("searchbox").addEventListener("input",(e)=>{Debouncing(e.data)});

let call = 0;
function fetchData(query){
    console.log(`data fetched on ${query}`,call++);
}


function Debouncing(input){
    clearTimeout(timeout);
    let timeout=setTimeout(fetchData,2000);
}
