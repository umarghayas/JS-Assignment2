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


// Chapter 13 - 15