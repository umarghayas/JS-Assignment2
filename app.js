// JavaScript Assignment 2

// Chapter 13 - 15
// Q.1 Declare an empty array using JS literal notation to store
// student names in future.
// var studentnames = [];  //DONE

// Q.2 Declare an empty array using JS object notation to store
// student names in future.
// var studentnames = [];   //DONE

// Q.3 Declare and initialize a strings array.

// var strArr=["Thing1","Thing2","Thing3"]  //DONE

// Q 4. Declare and initialize a numbers array.
// var arr1 = [2,4,87,56] // DONE

// Q 5. Declare and initialize a boolean array.
// var arr1 = [true, false] // DONE

// Q 6. Declare and initialize a mixed array.
// var arr1 = [2,8,"Hello", true] //DONE

// Q 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS"," BCOM"," MS"," M. Phil.", "PhD"]

// document.write("Qualifications", qualifications) // DONE

// Q 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

// var students = ["Micheal", "John", "Tony"]
// var marks = [320, 230, 480]
// var percent;

// for (var i = 0; i < students.length; i++) {
//     percent = (marks[i] / 500) * 100
//     document.write("Score of " + students[i] + " is " + marks[i] + ". Percentage: " + percent + "% <br />")
// }  //DONE

// Q 9. Initialize an array with color names. Display the array
// elements in your browser.
// var colors = ["orange","blue","green", "red", "brown"]
// document.write(colors + "<br />")
// // a. Ask the user what color he/she wants to add to the
// // beginning & add that color to the beginning of the array.
// var userColor = prompt("What color do you want to add to the start of the array?")
// colors.unshift(userColor)
// // Display the updated array in your browser.
// document.write(colors  + "<br />")

// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// var userColor = prompt("What color do you want to add to the End of the array?")
// colors.push(userColor)
// document.write(colors  + "<br />")

// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// colors.unshift("magenta","cyan")
// document.write(colors  + "<br />")
// // d. Delete the first color in the array. Display the updated
// // array in your browser.
// colors.shift()
// document.write(colors  + "<br />")
// // e. Delete the last color in the array. Display the updated
// // array in your browser.
// colors.pop()
// document.write(colors  + "<br />")

// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.

// var userReq = []
// userReq[0] = prompt("What index do you want to add the color to?")
// userReq[1] = prompt("What color do you want to add?")
// colors.splice(userReq[0],0,userReq[1])
// document.write(colors  + "<br />")

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser

// var userReq = []
// userReq[0] = prompt("What index do you want to remove colors from?")
// userReq[1] = prompt("How many colors do you want to remove?")
// colors.splice(userReq[0],userReq[1])
// document.write(colors  + "<br />")   //DONE

// Q 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method
// var score = [320, 230, 480, 120];
// document.write("Scores of Students: " + score + "<br>");

// score.sort();

// document.write("Ordered Scores of Students: ", score);

// Q 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

// var cities = ["Karachi","Lahore","Islamabad","Quetta", "Peshawar"]
// var selectedCities = cities.slice(2, 4)
// document.write("Cities List: "+ cities + "<br />")
// document.write("Selected Cities List: "+ selectedCities + "<br />")  //DONE


// Q 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = ["This","is","my","cat"];
// var newArray = arr.join(" ")
// document.write(newArray) //DONE

// Q 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

// var dev = [
//     "keyboard",
//     "mouse",
//     "printer",
//     "monitor"
// ]
// document.write("Devices : <br />" + dev + "<br />")
// for(var i=0;i<=dev.length;i++){
//     document.write("Out: <br />" + dev[i] + "<br />")
// } //DONE

// Q 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In - First Out)
// var dev = [
//     "keyboard",
//     "mouse",
//     "printer",
//     "monitor"
// ]
// document.write("Devices : <br />" + dev + "<br />")
// for(var i=dev.length-1;i>=0;i--){
//     document.write("Out: <br />" + dev[i] + "<br />")
// } //DONE


// Chapter 13 - 15 DONE

// Chapter 17 - 20 DONE
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var arr = [
//     ["Hasan", 21],
//     ["Jaffar", 23],
//     ["Hunain", 25]
// ] //DONE

//2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// console.log(matrix) //DONE

// 3. Write a program to print numeric counting from 1 to 10.
// for(var i=1;i<=10;i++){
//     document.write(i+"<br />")
// }  //DONE

// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user
// var num = +prompt("Enter a number to show its multiplication table")
// var len = +prompt("Enter length of multiplication table")
// for (var i = 1; i <= len; i++) {
//     document.write(num + " x " + i + " = " + num * i + "<br />")
// }  //DONE

// Write a program to print items of the following array 
// using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// document.write(fruits + "<br />")
// for(var i=0;i<=fruits.length;i++){
//     document.write("Element at index "+i+" is "+fruits[i]+"<br />")
// }  // DONE 

// Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h5>Counting: </h5>")
// for(var i=1;i<=15;i++){
//     document.write(i + ",")
// }
// document.write("<br />")
// // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// document.write("<h5>Reverse Counting</h5>")
// for(var i=10;i>=1;i--){
//     document.write(i + ",")
// }
// document.write("<br />")

// // c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// document.write("<h5>Even: </h5>")
// for(var i=0;i<=20;i+=2){
//     document.write(i + ",")
// }
// document.write("<br />")

// // d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// document.write("<h5>Odd: </h5>")
// for(var i=1;i<=20;i+=2){
//     document.write(i + ",")
// }
// document.write("<br />")
// // e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write("<h5>Even: </h5>")
// for(var i=2;i<=20;i+=2){
//     document.write(i + "k, ")
// }   //DONE 

// 7. You have an array
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var flag = false
// var ind;
// var userSearch = prompt("Welcome to ABC Bakery. What would you like to order?")
// for (var i = 0; i <= A.length; i++) {
//     if (A[i] === userSearch) {
//         flag = true
//         ind = i
//         break;
//     }
// }

// if (flag == false) {
//     document.write("We are Sorry. " + userSearch + "is not available in our bakery")
// }
// else {
//     document.write(userSearch + "is available at index " + ind + " in our bakery")
// }  // DONE 


// Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
// document.write("Array Items: " + A + "<br>")

// A.sort()

// document.write("Largest Number is : " + A[A.length - 1])   //DONE


// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]
// document.write("Array Items: " + A + "<br>")
// A.sort()
// document.write("Smallest Number is : " + A[0])   //DONE


// 10. Write a program to print multiples of 5 ranging 1 to 100+
// for(var i=5;i<=100;i+=5){
//     document.write(i + " , ")
// }  //DONE

// CHAPTER 17 - 20 DONE

// CHAPTER 21 - 25 

// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name

// var firstName = prompt("What is your first name")
// var lastName = prompt("What is your last name")
// var fullName = firstName + " " + lastName

// alert("Hello there " + fullName)  //DONE


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser

// var favPhone = prompt("What is your favorite phone ?")
// document.write("My favorite phone is: " + favPhone + "<br /> Length of String: " +favPhone.length)   //DONE

//3. Write a program to find the index of letter "n" in the word
// "Pakistani" and display the result in your browser 

// var nationality = "Pakistani"
// document.write("String: " + nationality + "<br /> Index of 'n': "+nationality.indexOf('n'))  //DONE

//4. Write a program to find the last index of letter "l" in the 
// word "Hello World" and display the result in your browser

// var Str1 = "Hello World"

// document.write("Last index of 'l' is : " + Str1.lastIndexOf('l'))

// 5. Write a program to find the character at 3rd index in the 
// word "Pakistani" and display the result in your browser.

// 6. Repeat Q1 using string concat() method

// var firstName = prompt("What is your first name")
// var lastName = prompt("What is your last name")

// alert("Hello there " + firstName.concat(" " , lastName))  //DONE

// 7. Write a program to replace the "Hyder" to "Islam" in the 
// word "Hyderabad" and display the result in your browser.

// var city = "Hyderabad"
// document.write("City: "+ city)
// city = city.replace("Hyder","Islam")
// document.write("After Replacement : "+ city)


// 8. Write a program to replace all occurrences of "and" in the
// string with "&" and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together."
// message = message.replace(/and/g,"&")
// document.write(message)

// 9. Write a program that converts a string "472" to a number 
// 472. Display the values & types in your browser
// var num = "472"
// document.write("Value: " + num + "<br />Type: " + typeof num)
// num = Number(num)
// document.write("<br />Value: " + num + "<br />Type: " + typeof num)

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.

// var input = prompt("Please give an input")
// document.write("User input: " + input + "<br />")
// input = input.toUpperCase()
// document.write("Uppercase: " + input + "<br />")

// 11 . Write a program that takes user input. Convert and 
// show the input in title case.
// var input = prompt("Please give an input")
// document.write("User input: " + input + "<br />")
// input = input[0].toUpperCase() + input.slice(1)
// document.write("Uppercase: " + input + "<br />")

// 12 . Write a program that converts the variable num to 
// string.
// Remove the dot to display "3536" display in your browser.
// var num = 35.36 ;
// document.write("Number: "+num+"<br />")
// var str1= String(num)
// var res = str1.slice(0,str1.indexOf('.')) + str1.slice(str1.indexOf('.')+1)
// document.write("Result: "+res+"<br />")  //DONE

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

// var username = prompt("Enter your username")
// var flag = false

// for(var i=0;i<username.length;i++){
//     if(username[i] === '!' || username[i] === '@' || username[i] === '.' || username[i] === ','){
//         flag=true
//     }
// }

// if(flag==true){
//     alert("Please enter valid username")
// }
// else{
//     document.write(username)
// }   //DONE

// 14. You have an array
// A = [cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable "search by user input" in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
// A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var flag = false
// var ind;
// var userSearch = prompt("Welcome to ABC Bakery. What would you like to order?")
// userSearch = userSearch.toLowerCase()
// for (var i = 0; i <= A.length; i++) {
//     if (A[i] === userSearch) {
//         flag = true
//         ind = i
//         break;
//     }
// }

// if (flag == false) {
//     document.write("We are Sorry. " + userSearch + " is not available in our bakery")
// }
// else {
//     document.write(userSearch + " is available at index " + ind + " in our bakery")
// }  // DONE 

// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// function checkPassword(password) {
//     const hasAlpha = /[a-zA-Z]/.test(password);
//     const hasDigit = /\d/.test(password);

//     const lengthValid = password.length >= 6;
//     const startsWithLetter = isNaN(parseInt(password.charAt(0)));

//     return hasAlpha && hasDigit && lengthValid && startsWithLetter;
// }

// function getValidPassword() {
//     let isValid = false;

//     while (!isValid) {
//         let password = prompt("Enter a password: ");

//         if (checkPassword(password)) {
//             isValid = true;
//             console.log("Password is valid!");
//         } else {
//             alert("Password requirements not met. Please enter a valid password.");
//         }
//     }
// }

// getValidPassword();  //DONE


// Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser
// var university ="University of Karachi"
// var arr = university.split("")
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i]+"<br>")
// }     //DONE 

// Write a program to display the last character of a user 
// input.

// var input = prompt("Enter a String")
// document.write("User input: " + input + "<br />")
// document.write("Last character of input: " + input.slice(-1) + "<br />")  //DONE

// You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string
// var str = "The quick brown fox jumps over the lazy dog"
// str = str.toLowerCase()

// document.write("Text: " + str + "<br /> There are " + str.match(/the/g).length + " occurrence(s) of the word 'the'")
//DONE

// CHAPTER 21 - 25 DONE 


// // CHAPTER 26-30
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter a positive integer")
// if(num<0){
//     alert("Enter Positive integer")
// }
// else{
//     document.write("Number: " + num + "<br />round off value: " + Math.round(num) + "<br />floor value: " + Math.floor(num) + "<br />ceil value: " + Math.ceil(num))
// }
//DONE

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter a positive integer")
// if(num>0){
//     alert("Enter Negative integer")
// }
// else{
//     document.write("Number: " + num + "<br />round off value: " + Math.round(num) + "<br />floor value: " + Math.floor(num) + "<br />ceil value: " + Math.ceil(num))
// }

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = +prompt("Enter any Number")
// document.write("The absolute value of " + num + " is " + Math.abs(num))

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your browser

// var dice = Math.floor(Math.random()*6+1)
// document.write("random dice value: "+dice)

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser
// var toss = Math.floor(Math.random() * 2 + 1)
// if (toss == 1) {
//     document.write(toss, "<br />Tails")
//     }
// else{
//     document.write(toss, "<br />Heads")
// } //DONE

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// var random = Math.floor(Math.random() * 100 + 1)

// document.write("random number between 1 and 100: "+random)

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter your weight")
// if(isNaN(weight)){
//     var abc = weight.search(/[a-zA-z]/)
//     weight = weight.slice(0,abc)
// }
// document.write("The weight of user is " +weight+ " kilograms")  //DONE

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.

// var num = Math.floor(Math.random() * 10 + 1)
// var inp = +prompt("Enter a value between 1 and 10")
// if (inp == num) {
//     document.write("Congrats! You guessed the right number: " + num)
// } else {
//     document.write("The right number was " + num + ". Please try again :( ")
// }  //DONE


// // CHAPTER 26-30 DONE


// CHAPTER 31-34