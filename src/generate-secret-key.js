const crypto = require("crypto");

// Generate 256 random bytes, which results in a string
// of 512 random hexadecimal characters
const newSecretKey = crypto.randomBytes(256).toString("hex");
console.log(newSecretKey);