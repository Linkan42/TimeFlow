const crypto = require("crypto");

const newSecretKey = crypto.randomBytes(256).toString("hex");
console.log(newSecretKey);