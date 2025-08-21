const crypto = require("node:crypto");

console.log("Hello World");

var a = 100345;
var b = 2304;

// this syn function block all the code beacuse it is syn function
crypto.pbkdf2Sync("password","salt",50000,50,"sha512");
console.log("first key is Generated")
// this functio is asyn fucntion 

// password-based key derivation function
//this there is callback function 
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err, key) => {
    if (err) throw err;
    console.log("Key is Generated:", key.toString("hex").slice(0, 20), "...");
});

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication result is:", c);
