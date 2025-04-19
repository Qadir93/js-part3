let var1 = "Hello", var2 = 123, var3 = true;

let myVar, _count, $price, user1, camelCase;


// Illegal variable names
// let 1start, var-name, @value, function, let;



document.write("<p>Variable names can only contain letters, numbers, $, and _.<br>For example: <b>$my_1stVariable</b></p>");
document.write("<p>Variables must begin with a letter, $ or _.<br>For example: <b>$name</b>, <b>_name</b> or <b>name</b></p>");
document.write("<p>Variable names are case <b>sensitive</b>.</p>");
document.write("<p>Variable names should not be JS <b>keywords</b>.</p>");



let num1 = 10;
let num2 = 20;
document.write("<h2>Addition of Two Numbers</h2>")
let sum = num1 + num2;
document.write("<p>The sum of " + num1 + " and " + num2 + " is: <b>" + sum + "</b></p>");



let num3 = 20;
let num4 = 6;

document.write("<h2>Basic Math Operations in JavaScript</h2>");

let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

document.write("<p>Subtraction of " + num3 + " and " + num4 + " is: <b>" + subtraction + "</b></p>");
document.write("<p>Multiplication of " + num3 + " and " + num4 + " is: <b>" + multiplication + "</b></p>");
document.write("<p>Division of " + num3 + " by " + num4 + " is: <b>" + division + "</b></p>");
document.write("<p>Modulus of " + num3 + " % " + num4 + " is: <b>" + modulus + "</b></p>");




let number;
document.write("<h2>JavaScript Mathematical Expressions</h2>")

document.write("<p>Value after variable declaration is: " + number + "</p>");

number = 5;
document.write("<p>Initial value: " + number + "</p>");

number++;
document.write("<p>Value after increment is: " + number + "</p>");

number += 7;
document.write("<p>Value after addition is: " + number + "</p>");

number--;
document.write("<p>Value after decrement is: " + number + "</p>");
let remainder = number % 3;
document.write("<p>The remainder is: " + remainder + "</p>");



document.write("<h2>Movie Ticket Calculator</h2>")
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.write("<p>Cost of one movie ticket is: " + ticketPrice + " PKR</p>");
document.write("<p>Total cost to buy 5 tickets is: <b>" + totalCost + " PKR</b></p>");




let numberz = 5;
document.write("<h2>Multiplication Table of " + numberz + "</h2>");
for (let i = 1; i <= 10; i++) {
    document.write("<p>" + numberz + " x " + i + " = " + (numberz * i) + "</p>");
}


document.write("<h2>Temperature Converter</h2>");

let celsius = 30;

let fahrenheitFromC = (celsius * 9 / 5) + 32;
document.write("<p>" + celsius + "°C is " + fahrenheitFromC + "°F</p>");

let fahrenheit = 86;

let celsiusFromF = (fahrenheit - 32) * 5 / 9;
document.write("<p>" + fahrenheit + "°F is " + celsiusFromF + "°C</p>");



document.write("<h2>Shopping Cart Receipt</h2>");

let priceItem1 = 650;

let priceItem2 = 100;

let quantityItem1 = 3;

let quantityItem2 = 7;

let shippingCharges = 100;

let totalCosting = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<p>Price of Item 1: " + priceItem1 + " PKR</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Price of Item 2: " + priceItem2 + " PKR</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<hr>");
document.write("<h3>Total Cost of Your Order is: " + totalCosting + " PKR</h3>");



let a = 10;

document.write("<h2>Result:</h2>");
document.write("The value of a is: " + a + "<br>........................................<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a + "<br>");


