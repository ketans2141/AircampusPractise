// Practice problems
// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal
/* Your answer here*/
let num1, num2, result;
num1 = 5;
num2 = 10;

result = num1 == num2 ? " Both are equal" : "Both are different";
console.log(result);










// 2. Write a  program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
/* Your answer here
*/

let a = 10;
if (a % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}









// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
// /* Your answer here


let b = 15;

if (b > 0) {
    console.log("Positive");
}
else {
    console.log("Negative");
}



// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here
*/
let year=2016;
if(year%4==0)
{
    console.log("2016 is a leap year");
}
else
{
    console.log("2016 Not a leap year")
}

// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
/* Your answer here
*/
let d = 20
if (d >= 18) {
    console.log("Congratulations! You are eligible for Voting ");
}
else {
    console.log("You are not eligible");
}


// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here
*/
let m, n;

if (m > 0) {
    console.log("1");
}
else if (m = 0) {
    console.log("0");
}
else if (m < 0) {
    console.log("-1");
}









// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here
*/
let height = 150
if (height < 135) {
    console.log("Short");
}
else if (height > 135 && height <= 200) {
    console.log("medium");
}
else {
    console.log("tall");
}



// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here
*/
let number1, number2, number3;
number1 = 12;
number2 = 25;
number3 = 52;

if (number1 > number2 && number1 > number3) {
    console.log("Number 1 is largest")
}
else {
    console.log("Number 3 is largest");
}
// ______________________or______________________________


let no1, no2, no3;
no1 = 12;
no2 = 25;
no3 = 52;


if (no1 > no2) {
    console.log("Number 1 is largest")
}
else if (no1 > no3) {
    console.log("Number 2 is largest");
}
else {
    console.log("Number 3 is largest");
}



// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here
*/
var x,y;
 x=7, y=-9
if(x>0 && y>0)
{
    console.log("1st quadrant")
}
else if(x<0 && y>0)
{
    console.log("2nd quadrant")
}
else if(x<0 && y<0)
{
    console.log("3rd quadrant")
}
else if(x>0 && y<0)
{
    console.log("4th quadrant")
}




// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140
// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.
/* Your answer here
*/
let Physics = 65;
Chemist = 51;
Maths = 72;
Maths + Physics + Chemist == 188;
Maths + Physics == 137;
if ((Maths >= 65 && Physics >= 55 && Chemist >= 50) && (Maths + Physics + Chemist >= 190) && (Maths + Physics >= 140)) {
    console.log("The candidate is eligible for addmission");
}
else {
    console.log("The candidate is not eligible for addmission")
}


// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here
*/
// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here
*/
// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here
*/
// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 60
// Expected Output :
// This is an isosceles triangle.
/* Your answer here
*/
let a3, b3, c3;

if (a3 + b3 + c3 == 180 && ((a3 + b3) > c3) || (b3 + c3) > a3 || (a3 + c3) > b3 && (a3 != 0 && b3 != 0 && c3 != 0)) {
    console.log("Valid");
    if (a3 == b3 && b3 == c3) {
        console.log("Equilateral");
    }
    else if (a3 == b3 || b3 == c3 || c3 == a3) {
        console.log("Isosceles");
    }
    else {
        console.log("Scalene");
    }
}
else {
    console.log("Not Valid");
}





// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here
*/
let a4, b4, c4;
a4 = 40;
b4 = 55;
c4 = 65;

if (a4 + b4 + c4 == 180 && ((a4 + b4) > c4) || (b4 + c4) > a4 || (a4 + c4) > b4 && (a4 != 0 && b4 != 0 && c4 != 0)) {
    console.log("Valid");
    if (a4 == b4 && b4 == c4) {
        console.log("Equilateral");
    }
    else if (a4 == b4 || b4 == c4 || c4 == a4) {
        console.log("Isosceles");
    }
    else {
        console.log("Scalene");
    }
}
else {
    console.log("Not Valid");
}




// 16. Write a program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here
*/
let x6;
x6 = 6;

if (x6 > a && x6 < z) {
    console.log("This is alphabet")
}
else if (x6 > 0 && x6 < 9) {
    console.log("This is digit");
}
else {
    console.log("This is Special charachter");
}





// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet is a consonant.
/* Your answer here
*/

let alphabet = 'u'
if (alphabet == 'a' || alphabet == 'e' || alphabet == 'i' || alphabet == 'o' || alphabet == 'u' || alphabet == 'A' || alphabet == 'E' || alphabet == 'I' || alphabet == 'O' || alphabet == 'U') {
    console.log("The alphabet is a vowel");
}
else {
    console.log("The alphabet is a consonant")
}



// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You can booked your profit amount : 200
/* Your answer here
*/
let a1, b1, c1;
a1 = 500;
b1 = 700;

c1 = b1 - a1;
console.log(c1);




// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :
// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-
// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here
*/
let electricUnit;
billAmount = 800;

if (electricUnit <= 199) {
    billAmount = electricUnit * 1.2;
}
else if (electricUnit >= 200 && electricUnit < 400) {
    billAmount = 199 * 1.2 + (electricUnit - 199) * 1.5;
}
else if (electricUnit >= 400 && electricUnit < 600) {
    billAmount = 199 * 1.2 + 200 * 1.5 + (electricUnit - 399) * 1.8;
}
else if (electricUnit >= 600) {
    billAmount = 199 * 1.2 + 200 * 1.5 + 200 * 1.8 + (electricUnit - 599) * 2;
}

if (billAmount > 400) {
    surchrg = billAmount * 15 / 100;
}

if (billAmount > 400) {
    billAmount = billAmount + billAmount + 0.15;
}
else if (billAmount < 100) {
    billAmount = 100;
}
console.log("Customer ID-NO :1001");
console.log("Customer Name :James");
console.log("Unit consumed:800")
console.log("billAmount:", billAmount);






// 20. Write a program to accept a grade and declare the equivalent description :
// Grade    Description
// E    Excellent
// V    Very Good
// G    Good
// A    Average
// F    Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
/* Your answer here
*/
let grade = 1;
switch (grade) {
    case 1:
        console.log("Average");
        break;
    case 2:
        console.log("Excellent")
    case V:
        console.log("Very Good");
        break;
    case 3:
        console.log("Good")
    case 4:
        console.log("Fail");
        break;

}






// 21. Write a program to read any day number in integer and display day name in the word.
// Test Data :
// 4
// Expected Output :
// Thursday
/* Your answer here
*/
let day = 4
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}




// 22. Write a program to read any digit, display in the word.
// Test Data :
// 4
// Expected Output :
// Four
/* Your answer here
*/
let number = 4
switch (number) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("Two");
        break;
    case 3:
        console.log("Three");
        break;
    case 4:
        console.log("Four");
        break;
    case 5:
        console.log("Five");
        break;
}



// 23. Write a program to read any Month Number in integer and display Month name in the word.
// Test Data :
// 4
// Expected Output :
// April
/* Your answer here
*/
let month = 4
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
}









// 24. Write a program to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days


let months = 4
switch (months) {
    case 1:
        console.log("31 Days");
        break;
    case 2:
        console.log("28 Days");
        break;
    case 3:
        console.log("31 Days");
        break;
    case 4:
        console.log("30 Days");
        break;
    case 5:
        console.log("31 Days");
        break;
    case 6:
        console.log("30 Days");
        break;
    case 7:
        console.log("31 Days");
        break;
    case 8:
        console.log("30 Days");
        break;
    case 9:
        console.log("30 Days");
        break;
    case 10:
        console.log("31 Days");
        break;
    case 11:
        console.log("30 Days");
        break;
    case 12:
        console.log("31 Days");
        break;
}
