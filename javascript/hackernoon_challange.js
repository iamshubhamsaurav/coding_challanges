// 1 Print from 1 to 10
function print1To10() {
    for (let i = 1; i<=10; i++) {
        console.log(i);
    }
}

// print1To10();

// Print all odd number upto 100
function printOddUpTo100() {
    for (let i = 1; i <= 100; i += 2) {
        console.log(i);
    }
}

// printOddUpTo100();

// 3. Print multiplication table of 7
function printMultiplicationTableOf7() {
    for (let i = 1; i <= 10; i++) {
        console.log(`7 * ${i} = ${7 * i}`);
    }
}

// printMultiplicationTableOf7();

// 4. print Table from 1 to 10
function printTableFrom10To10() {
    for (let num = 1; num <= 10; num++) {
        for (let times = 1; times <= 10; times++) {
            console.log(`${num} * ${times} = ${num * times}`);
        }
    }
}

// printTableFrom10To10();

// 5. Calculate sum from 1 to 10
function calculateSumUpto10() {
    let sum = 0;
    for (let i = 1; i<= 10; i++) {
        sum += i;
    }
    console.log(sum);
}
// calculateSumUpto10();

// Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
function calculateOddNumSumFrom10To30() {
    let sum = 0;
    for(let i = 11; i <= 30; i += 2) {
        sum += i;
    }
    console.log(sum);
}

// calculateOddNumSumFrom10To30();

//8. Convert Fahrenheit to Celsius
function fromFahrenheitToCelsius(f) {
    const c = (f - 32) * 5/9;
    console.log(c);
    return c;
}

// fromFahrenheitToCelsius(12);

// 9. Convert Celcius to Fahrenheit
function fromCelsiusToFahrenheit(c) {
    const f = (c * 9/5) + 32
    console.log(f)
    return f
}

// fromCelsiusToFahrenheit(12)

// 10. Calculate the sum of array in array of numbers
function sumArray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
    return sum
}

// sumArray([1,2,3,4,5])

// 11. Calculate the average of the numbers in an array of numbers
function averageOfArray(array) {
    let total = 0
    for(let i = 0; i < array.length; i++) {
        total += array[i]
    }
    const average = total / array.length
    console.log(average)
    return average
}

// averageOfArray([1,2,3,433,442,43,3,])

// 12. Get posotive number frm an array
function getPositiveNumberFromArray(array) {
    let positiveArray = [];
    for(let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveArray.push(array[i])
        }
    }
    console.log(positiveArray)
    return positiveArray
}

// getPositiveNumberFromArray([2,3,-2,75,-4,0])

//Coding challenge #13: Find the maximum number in an array of numbers
function findMaxInArray(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i]>max) {
            max = array[i]
        }
    }
    console.log(max)
}

// findMaxInArray([1,2,3,4,5,9,7,6,8])

// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion
function first10FibonacciNumbers() {
    let fibs = []
    let fib1 = 0
    let fib2 = 1
    // console.log(fib1)
    fibs.push(fib1)
    for (let i = 1; i < 10; i++) {
        // console.log(fib2)
        fibs.push(fib2)
        sum = fib1+fib2
        fib1=fib2
        fib2=sum
    }
    console.log(fibs)
}

// first10FibonacciNumbers()

// Hitesh Chaudhary Coding Challange 2
function printStairCase() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write('**')
        }
        process.stdout.write('\n')
    }
}

printStairCase()