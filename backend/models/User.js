const mongoose = require("mongoose");

// Define the schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
