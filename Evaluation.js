/* ***** This a lot of JavaScript problems to resolve them it's not hard i hope that all of you  have a good score 

                           ***** Good LucK ******

/*

Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

Examples


arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

                                      ***************************

I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

Example

arrayPlusArray([1, 2, 3], [4, 5, 6]) -> 21

arrayPlusArray([-1, -2, -3], [-4, -5, -6]) -> -21*/



                                     *****************************

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20
//SOL:
function positiveSum(arr) {
    return arr.filter(el => el >= 0).reduce((a,b)=>a+b)
}
                                     *********************************

//Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
//sol
function UppString(str) {
    return(/[A-Z]/g).test(str)
    
    }

                                    *********************************

//Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

testEven(0)  ->   true 
testEven(0.5) ->  false
                                   *********************************


Create a function that takes a string as argument and  a write a regular expression to test for an empty string and return true if it is otherwise return false .
                   
                     ***************** => =>  Use a regular expression to test for an empty string


                                  *********************************

Create a function that returns true if a string contains any spaces.
hasSpaces("hello") ➞ false
hasSpaces("hello, world") ➞ true

//sol
function space(str){
let regex = RegExp(' ');
    return regex.test(str); 
}

                                  *********************************
Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.


 sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ->   30 
//sol

function sumEven(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i]%2==0  ) {
       sum += arr[i];
     }
    }
   return sum;
   }

                                   *********************************

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.


differenceInAges([82, 15, 6, 38, 35]) -> [6, 82, 76]
differenceInAges([57, 99, 14, 32]) -> [14, 99, 85]

*/
//sol

     
function maxArr(arr){
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    let diff=max-min
    return [max,min,diff]
    }
