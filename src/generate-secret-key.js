const crypto = require("crypto");

function generateSecretKey() {
	return new Promise((resolve, reject) => {
		try {
			// generate 256 random bytes, which results in a string
			// of 512 random hexadecimal characters
			const newSecretKey = crypto.randomBytes(256).toString("hex");
			resolve(newSecretKey);
		} catch (error) {
			console.error("Error generating secret key:", error);
			reject(error);
		}
	});
}

module.exports = {
	generateSecretKey: generateSecretKey
};
