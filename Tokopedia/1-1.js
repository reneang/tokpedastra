function find(x, y){
    return (x < y ? 0 : (x - y));
}

var a = 10;
var b = 3;

console.log(find(a, find(a, b)));

// a > b; 10 : 3 = 3
// a = b; 10 : 10 = 10
// a < b;  3 : 10 = 3