// Question 1
let label = "keyincollege";
let tld = 'ca';
let domainname = `${label}.${tld}`;
console.log(domainname);
console.log("hello world");

// Question 2
if (domainname === "keyincollege.ca") {
    let iskeyin = true;
    console.log(iskeyin);

}
else {
    let iskeyin = false;
    console.log(iskeyin);

}

// Question 3
if (domainname === "keyincollege.ca") {
    let iskeyin = false;
    console.log(iskeyin);
}
else {
    let iskeyin = true;
    console.log(iskeyin);
}

// Question 4
byte1 = Math.floor(Math.random()*256);
byte2 = Math.floor(Math.random()*256);
byte3 = Math.floor(Math.random()*256);
byte4 = Math.floor(Math.random()*256);


// Question 5
let ipaddress = `${byte1}.${byte2}.${byte3}.${byte4}`;
console.log(ipaddress);

// Question 6
let table = 5;
for (let i = 0; i < 10; i++) {

    console.log(`${table} x ${i} = ${table*i}`);
};

// Question 7 and 8
let sum = 0;
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        sum += i;
        console.log("even");
        console.log(i);
    }
    else {
        console.log("odd");
        console.log(i);
    }
};
console.log(sum);


// Question 9
let PerfNum = 496;
let PerfSum = 0;
for (let i = 1; i < PerfNum; i++) {
    if (PerfNum % i == 0) {
        PerfSum += i;
    }
}   
if (PerfSum == PerfNum) {
    console.log("perfect number");
}

// Question 10

let num = 19;
let prime = true;
for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        prime = false;
        break;
    }
}
if (prime == false) {
    console.log("not prime");
}
else {
    console.log("prime");
};