// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.
let DataTypes = ["test", true, undefined, null];

DataTypes.forEach((item)=>{
    console.log(typeof item);
});

// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

let userName = 'Govind';
let userLastName = 'Magar';
let maritalStatus = 'Married';
let citizenship = 'India';
let age = 28;

console.log(`My name is ${userName} ${userLastName}, I am ${age} years old, I am ${maritalStatus} and I live in ${citizenship}.`)

// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

let testSentence = 'The quick brown fox jumps over the lazy dog';

console.log(testSentence.toUpperCase());

// 4. Check if the string contains a word Script using includes() method.

console.log(testSentence.includes('fox'));

// 5. Split the string into an array using split() method

let splitArr = testSentence.split(' ');

console.log(splitArr);

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let faangMaang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';

console.log(faangMaang.split(','));

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.

console.log(faangMaang.lastIndexOf('o'));

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.

console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'));

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.

let withTrim = ' This is just to check the functionality of trim function ';

let withoutTrim = withTrim.trim();

console.log(withoutTrim);

// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.

let truthyOne = 'My name is Govind'.includes('Govind');
let truthyTwo = true||false;
let truthyThree = true && true;
let falsyOne = 'Test sentence'.endsWith('o');
let falsyTwo = false && false;
let falsyThree = 'test sentence'.startsWith('a');

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

let str1 = 'python';
let str2 = 'jargon';
console.log(str1.length==str2.length);

// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let dateToday = new Date();

console.log(dateToday.getFullYear());
console.log(dateToday.getMonth()+1);
console.log(dateToday.getDate());
console.log(dateToday.getUTCDay());
console.log(dateToday.getHours());
console.log(dateToday.getMinutes());
console.log(dateToday.getMilliseconds());
console.log(Math.floor(new Date().getTime() / 1000))

// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let length = parseFloat(prompt("Enter the base of triangle."));
let height = parseFloat(prompt("Please enter the height of the triangle"));

let area = 0.5*length*height;

alert("The area of triangle is: "+area);

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function Slope_(x1, y1, x2, y2) {
    
    return (y2-y1)/(x2-x1);
}

console.log(Slope_(2,2,6,10));

// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let rad = parseFloat(prompt("Please enter the radius of circle."));
let pi = 3.142;

function AreaOfCircle(rad, pi) {
    return pi*rad*rad;
}

console.log(AreaOfCircle(rad, pi));

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let ageNow = parseFloat(prompt("Please enter your age."));

function Message(age) {
    return age>=18 ? 'You are old enough to drive.' : 'Wait for the number of years he needs to turn 18.'
}

alert(Message(ageNow));

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


let number = parseInt(prompt("Please enter a number"));

function CheckEven(number) {
    return number%2==0 ? 'Entered number is even' : 'Entered number is odd';
}

alert(CheckEven(number));

// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

function EvenOdd () {
    let sumEven = 0;
    let sumOdd = 0;
    for(let i=0; i<=100; i++) {
        if(i%2==0){
            sumEven+=i;
        }
        else {
            sumOdd+=i;
        }
    }

    return [sumEven, sumOdd];
}

let resultArr = EvenOdd();

console.log(resultArr);
