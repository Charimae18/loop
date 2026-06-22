let forText = "";

// Random numbers example (for loop)
for (let i = 0; i < 10; i++) {
    const rand = Math.floor(Math.random() * 100) + 1; // 1..100
    forText += rand + "<br>";
}

document.getElementById("for-loop").innerHTML = forText;






let whileText = "";

let j = 0;

while (j < 8) {

    whileText += j + "<br>";

    j++;

}

document.getElementById("while-loop").innerHTML = whileText;



let doWhileText = "";

let k = 0;

do {

    doWhileText += k + "<br>";

    k++;

} while (k < 8);

document.getElementById("dowhile-loop").innerHTML = doWhileText;



let forInText = "";

// Removed Address field as requested
const person = { name: "Charie", age: 20 };

for (const key in person) {

    forInText += key + ": " + person[key] + "<br>";

}

document.getElementById("forin-loop").innerHTML = forInText;



let forOfText = "";

// More fruits example (for...of + forEach reuse this array)
const fruits = ["mango", "grape", "orange", "banana", "apple", "peach", "kiwi"];

for (const fruit of fruits) {

    forOfText += fruit + "<br>";

}

document.getElementById("forof-loop").innerHTML = forOfText;






let forEachText = "";

fruits.forEach((fruit, index) => {

    forEachText += index + ": " + fruit + "<br>";

});

document.getElementById("foreach-loop").innerHTML = forEachText;

