// more decriptive variable name for number input submit button target
let numberInptBtn = document.querySelector("#submitButton");
// created a variable for the prime input submit button
let primeInptBtn = document.querySelector("#primeButton");

// made target more descriptive
numberInptBtn.addEventListener("click", () => {
    let input = document.querySelector("#numberInput");
    let value = parseInt(input.value);

    let interesting = isInteresting(value);

    let output = document.querySelector("#output");
    output.innerText = interesting;
});

// changed to variable that targets the Prime Input submit button
primeInptBtn.addEventListener("click", () => {
    let input = document.querySelector("#primeInput");
    let n = parseInt(input.value);

    isPrime = true;

    for (let i = n - 1; i > 1; --i) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    const output = document.querySelector("#primeOutput");
    if (isPrime) {
        output.innerHTML = n + " is prime!";
    } else {
        output.innerHTML = n + " is not prime!";
    }
});

// A number is interesting if it is has at least 2 of the following:
// prime,
// ends in 1 or 5,
// sum of digits is a multiple of 10,
// all digits are multiples of 3 or 5
function checkIfPrime (n, isPrime) {
    for (let i = n - 1; i > 1; --i) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

function checkEndsInOneOrFive (n, stringified, endsInOneOrFive, sumTen) {
    let sum = 0;
    for (let i = 0; i < stringified.length; ++i) {
        sum += parseInt(stringified[i]);
    }
    if (sum % 10 === 0) sumTen = true;

    if (n % 10 === 1 || n % 10 === 5) {
        endsInOneOrFive = true;
    }
    return endsInOneOrFive, sumTen;
}

function checkMultiplesFiveOrThree (stringified, multiplesFiveOrThree) {
    for (let i = 0; i < stringified.length; ++i) {
        if (+stringified[i] % 3 === 0 || +stringified[i] % 5 === 0) {
            continue;
        } else {
            multiplesFiveOrThree = false;
            break;
        }
    }
    return multiplesFiveOrThree;
}

function isInteresting(n) {
    let isPrime = true;
    let sumTen = false;
    let endsInOneOrFive = false;
    let multiplesFiveOrThree = true;

    let stringified = n.toString();

    checkIfPrime(n, isPrime);

    checkEndsInOneOrFive (n, stringified, endsInOneOrFive);

    checkMultiplesFiveOrThree (stringified, multiplesFiveOrThree);

    let count = 0;

    if (isPrime) count += 1;
    if (sumTen) count += 1;
    if (endsInOneOrFive) count += 1;
    if (multiplesFiveOrThree) count += 1;

    console.log(isPrime, sumTen, endsInOneOrFive, multiplesFiveOrThree);
    console.log("COUNT: ", count);

    if (count > 1) {
        return n + " is intersting";
    } else if (count > 0) {
        return n + " is okay";
    } else {
        return n + " is booooooring";
    }
}