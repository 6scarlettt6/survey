var x = 10;
var g = 50;
var chris = "ceo";
var chase ="10x";

var array = ["Chase Array Name","Second"];

// if (x == 10 && g < 20 ){
//     console.log("Conditions met son");
// } else if (x > 50) {
//     console.log("else if");
// } else {
//     console.log("dead end");
// }

// function test(array) {
//     return array;
// }

// var sum = test(array);
// array.push
// alert(sum);
// alert(sum); 

var myArray = [];

for (var i = 0; i <= 5; i++) {
    myArray.push(i * 2);
}

for (var i = 0; i <= 5; i++) {
    document.write(myArray.pop() + "<br/>");
}

alert(myArray.length);