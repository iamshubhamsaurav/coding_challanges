// Challange 1 : Simple Interest 
function simpleInterest(p, i, t) {
    return (p * i * t) / 100;
}

const si = simpleInterest(400, 100, 1)
console.log(si)

// Challange 2: Sum a list of numbers
function sumOfNums(...nums) {
    let total = 0
    for (i = 0; i < nums.length; i++) {
        total += nums[i]
    }
    return total
}

const t1 = sumOfNums(1,2,3,4,5)
console.log(t1)

// Challange 3: Write a functions which a number as parameter and print the table of the number
function printTableOf(number) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${number} * ${i} = ${number * i}`);
	}
}
printTableOf(5);

// Challange 4
// Find a number in the list of numbers
const findANumberInList = (num, nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (num === nums[i]) {
            return true
        }
    }
    return false
}

console.log(findANumberInList(2, [3,3,1,6]))

// Write a function which takes a number and return true if it is an even number and return false if the number is Odds
// Even or Odd
function isEven(num) {
	if (num % 2 == 0) {
		return true;
	}
	return false;
}


const fizzBuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Fizz Buzz"
    } else if (num % 3 === 0) {
        return "Fizz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else {
        return num
    }
}

console.log(fizzBuzz(3))



