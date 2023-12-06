// question 1

// const arr = ["apple" , "banana" , "mango" , "orange" , "strawberry"];

// for(let i = 0; i < arr.length; i++){
//     console.log(`Element at index ${i} is ${arr[i]}`);
// }


// // question 2

// const A = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// const userInp = prompt('search any item');

// for(let i = 0; i < A.length; i++){
//     if(userInp === A[i]){
//         alert('Yes! This product is avalable in my bakery')
//         break;
//     }
//     else{
//         alert('Sorry! this is not avalable in my bakery.')
//         break;
//     }
// }


// Question 3

// function printNumbers(array, stopValue) {
//    stopValue = Math.min(stopValue, array.length);

//    for (let i = 0; i < stopValue; i++) {
//        console.log(array[i]);
//    }
// }

// var array = [12 , 45 , 3 , 22 , 34 , 50];
// var userInput = prompt("enter value")

// printNumbers(array,userInput);
       
        
    

// question 4

// var numLines = parseInt(prompt("Enter the number of lines for pattern a:"));

//  a
// for (var i = 0; i < numLines; i++) {
//     var line = '';
//     for (var j = 0; j < 5; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

//  b
// for (var i = 1; i <= numLines; i++) {
//     var line = '';
//     for (var j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }
// document.write('<br>');

// //  c
// for (var i = numLines; i > 0; i--) {
//     var line = '';
//     for (var j = 0; j < i; j++) {
//         line += '*';
//     }
//     document.write(line + '<br>');
// }


// question 5

// function calculate(num1 , num2 , operator){
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;

//         case '-':
//             result = num1 - num2;
//             break;    
    
//         case '*':
//             result = num1 * num2;
//             break; 
            
//         case '/':
//             result = num1 / num2;
//             break;  

//         default:
//             return 'Invalid operator'
//     }
//     return result;
// }

// let num1 = 4;
// let num2 = 6;
// let operator = '*'
// let result = calculate(num1 , num2 , operator)
// console.log(result);


// question 6

// function isPalindrome(inputString){
    
//         let cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();   
//         let reversedString = cleanString.split('').reverse().join('');
//         return cleanString === reversedString;
//     }
//     let testString = "alto";
//     if (isPalindrome(testString)) {
//         console.log(`${testString} is a palindrome.`);
//     } else {
//         console.log(`${testString} is not a palindrome.`);
//     }


// question 7

// function celsiusToFahrenheit(celsius){
//     let fahrenheit = (celsius * 9/5) + 32;
//     console.log(celsius + "°C is " + fahrenheit + "°F");
// }
 
// function fahrenheitToCelsius(fahrenheit){
//     let celsius = (fahrenheit - 32) * 5/9;
//     console.log(fahrenheit + "°F is " + celsius + "°C");
// }
 
// let celsiusTemperature = -40; 
// let fahrenheitTemperature = 86; 
 
// celsiusToFahrenheit(celsiusTemperature);
// fahrenheitToCelsius(fahrenheitTemperature);


// question 8

const  books = [
    {title:"Book1",author:"Author1",price:20},
    {title:"Book2",author:"Author2",price:30},
    {title:"Book3",author:"Author3",price:25},
    {title:"Book4",author:"Author4",price:15},
]

function filterBooks(bookArray, maxPrice){
    const affordableBooks = [];
    for(const book of bookArray){
        if(book.price <= maxPrice){
            affordableBooks.push(book);
        }
    }
    return affordableBooks;
}

const maxPrice = 15;
const affordableBooks = filterBooks(books , maxPrice);

if(affordableBooks.length > 0){
    console.log(`Books with prices less than or equal to ${maxPrice}:`);
    console.log(affordableBooks);
} else{
    console.log(`No books found with prices less than or equal to ${maxPrice}`);
}

