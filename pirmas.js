


// uzduotis 1
"use strict";
var skaicius1;
var skaicius2;
var skaicius3;
var skaicius4;

skaicius1 = 24;
skaicius2 = 100;
skaicius3 = 140000;
skaicius4 = 2;

// isvesti 4 skaiciai
console.log("visi keturi skaiciai: ");
console.log(skaicius1, skaicius2, skaicius3, skaicius4);

// skaiciu suma
console.log("suma: ");
console.log(skaicius1+skaicius2+skaicius3+skaicius4);

//skaiciu daugyba
console.log("daugyba: ");
console.log(skaicius1*skaicius2*skaicius3*skaicius4);

// skaiciu sukeitimas
var temp;
temp = skaicius1;
skaicius1 = skaicius2;
skaicius2 = temp;

temp = skaicius3;
skaicius3 = skaicius4;
skaicius4 = temp;

//uzkniso :D
//alert("skaiciai is eiles: " + skaicius1+ " " + skaicius2 + " " + skaicius3 + " " + skaicius4);

// max skaicius
var maxSkaicius = Number.MAX_VALUE;
console.log(maxSkaicius);

// skaicius 5 ir 6 su xor ir html divas

var skaicius5 = 1, skaicius6 = 2;

if(skaicius5 ^ skaicius6)
{
    temp = skaicius5;
    skaicius5 = skaicius6;
    skaicius6 = temp;
}

document.getElementById("Rezultatas1").innerHTML = "skaicius 5 yra: " + skaicius5 + ", skaicius 6 yra: " + skaicius6;

// done