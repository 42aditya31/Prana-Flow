// express server
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


// mongodb 
const mongoose = require("mongoose");
const User = require("./models/User");


// password encryption
// const bcrypt = require("bcrypt");
// const saltRounds = 10;


// Use CORS middleware
app.use(cors());


// Middleware to parse JSON
app.use(express.json());


// Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/Prana_Flow";
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));



// Signup Route
app.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  const bcrypt = require('bcrypt');
  // const saltRounds = 5;


  // bcrypt.hash(password, saltRounds, (err, hash) => {
  //   if (err) throw err;
  //   hashPassword = hash
  // });



  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)



    const newUser = new User({ name, email, password });

    await newUser.save()
    res.status(201).json({ message: "User saved successfully!", user: newUser });

  } catch (error) {
    res.status(500).json({ message: "An error occurred while saving the user." });
  }

})

const fetchUser = async () => {
  try {
    const users = await User.find(); // Fetch all users
    console.log('Users:', users);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

// fetchUser()

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Sample validation (replace with actual user validation)
  if (email === "test@example.com" && password === "password123") {
    res.status(200).json({ message: "Login successful!" });
  } else {
    res.status(401).json({ error: "Invalid email or password!" });
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
