var a = 1;
var b = 2;
var c = 3;

a |= 4;
b >>= 1;
c <<= 1;
a ^= c;

console.log("a = ", a, "; b = ", b, "; c = ", c);

// Write a function that gets a decimal number as string
// and converts it to it's binary representation
// Do not use any existing library functions

// Example input : 15
// Output : 1111