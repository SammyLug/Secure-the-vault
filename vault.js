//Create an alert tab including directions for opening the vault using a secret code.
// Assign three variables - 17, 27, 77
// Each variable will contain corresponding results of the calculation using arithemetic operator.
// Each must equal one of three codes in the combination 
// Add comments throughout code to explain each step 
// Create a dialog box displaying vault code using popup dialog.

//Creating a string
const greeting = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"

// Creating variables ------------- Should these show in the console? Or just the final sequence
var num1 = 10 + 7;
console.log(num1);
var num2 = 20 + 7;
console.log(num2);
var num3 = 70 + 7;

console.log(num3)
console.log("" + num1 + " " + num2 + " " + num3);

//Creating dialog string popup
alert(greeting + " " + num1 + " " + num2 + " " + num3)