function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
   }

// let x = 50
// x = 100
x = findMax(1, 123, 500, 115, 44, 88);
function findMax() {
 let max = -Infinity;
 for (let i = 0; i < arguments.length; i++) {
 if (arguments[i] > max) { 
 max = arguments[i];
 }
 }
 return max;
}
alert ("nilai x adalah " + x)

console.log(1 == '1');
console.log(1 === '1');