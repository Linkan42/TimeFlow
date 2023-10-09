const cron = require("node-cron");
const gen = require("../src/generate-secret-key");
const fs = require("fs");
const dotenv = require("dotenv");

function startCronJob() {
	cron.schedule("*/1 * * * *", async () => {
		console.log("This runs every minute.");

		try {
			// Generate a new random hexadecimal string
			const newKey = await gen.generateSecretKey();

			// Write the newKey to the .env file
			dotenv.config(); // Load existing .env file into process.env
			process.env.SECRET_KEY = newKey; // Update SECRET_KEY in process.env
			fs.writeFileSync(".env", `SECRET_KEY=${newKey}`); // Update .env file

			console.log("New SECRET_KEY:", newKey);
		} catch (error) {
			console.error("Error generating or writing secret key:", error);
		}
	});
}

module.exports = {
	startCronJob: startCronJob
};
