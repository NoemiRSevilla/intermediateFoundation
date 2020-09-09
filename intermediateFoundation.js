[1]

// Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(num){
  var sigmaSum=0;
  for (var i=0; i<=num; i++){
    sigmaSum+=i
  }
  return sigmaSum;
}

console.log(sigma(5));

[2]

// Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
  var product=1;
  for (var i=1; i<=num; i++){
    product*=i;
  }
  return product;
}

console.log(factorial(5));

[3]

// Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(argument){
  var sum=1;
  if(argument==0){
    sum=0;
  }
  if (argument==1){
    sum=1;
  }
  for (var i=2; i<argument; i++){
    sum=fibonacci(argument-1)+fibonacci(argument-2);
  }
  return sum;
}

console.log(fibonacci(6));

[4]
// Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function fourth(arr){
  var almostLast;
  for (var idx=0; idx<arr.length; idx++){
    if(arr.length<2){
      almostLast=null;
    }
    else{
      almostLast=arr[arr.length-2];
    }
  }
  return almostLast;
}

console.log(fourth(['Kelly','blue','book']));

[5]
// Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function five(arr, n){
  var number;
  for (var idx=0; idx<arr.length; idx++){
    if(n>arr.length){
      number=null;
    }
    else{
      number=arr.length-n;
    }
  }
  return number;
}

console.log(five([5],3));

[6]
// Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function six(arr){
  var largest=[0];
  var secondLargest=[0];
  for (var idx=0; idx<arr.length; idx++){
    if (arr.length<2){
      secondLargest=null;
    }
    if (arr[idx]>largest){
      secondLargest=largest;
      largest=arr[idx];
    }
  }
  return secondLargest;
}

console.log(six([42,1,4,3.14,7,5,1,324,2.4,13243246]));

[7]
// Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr){
  New=[];
  for (var idx=0; idx<arr.length; idx++){
    New.push(arr[idx]);
    New.push(arr[idx]);
  }
  return New;
}

console.log(doubleTrouble([4, "Ulysses", 42, "tree"]));

[Assignment]
// Create a function Fib(n) where it returns the nth Fibonacci number.  Use recursion for this.

function fib(n){
  if (n<=1){
    return n;
  }
  return fib(n-1)+fib(n-2);
}

console.log(fib(7));


