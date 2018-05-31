// var user = prompt('Enter your name please?');

// var nameT = document.getElementById('name');
// nameT.innerHTML = 'Hello my name is ' + user ;

// function sayHello(){
// 	console.log("Hello World");
// }

// function introduction(name, age){

// 	console.log('Hello my name is ' + name + ' I am ' + age + ' years old! ');
// }

// introduction('Billy', 21);

// function add(num1, num2){
// 	return num1 + num2;
// }

// add(6, 16);
// console.log(add(6, 16));

// var clicks = 0;
// function buttonClicked(){
// clicks++;
// document.getElementById("b").value = "You click " + clicks + " times";
// }

function formValue(){
   
 var first = document.getElementById("fname").value;
    var second = document.getElementById("lname").value;

    // document.getElementById('display').innerHTML = "hello" + first+" "+second;
    document.getElementById("display").innerHTML = "hi " + first + " " + second;
}

// document.getElementById("sub").addEventListener("click", function(){

//     document.getElementById("display").innerHTML = "hello" + first+" "+second; 
// });
          
//         function formValue() {
//     var x = document.getElementById("forma");
//     var text = "";
//     var i;
//     for (i = 0; i < x.length ;i++) {
//         text += x.elements[i].value + "<br>";
//     }
//     document.getElementById("display").innerHTML = text;
// }           



