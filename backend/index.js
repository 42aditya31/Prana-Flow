// express server
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;


// mongodb 
const mongoose = require("mongoose");
const User = require("./models/User");

const bcrypt = require('bcrypt');


// Use CORS middleware
app.use(cors());


// Middleware to parse JSON
app.use(express.json());


// Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/Prana_Flow";
mongoose.connect(MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));


// fetching the data from database
const totalCount = async () => {
  try {
    const totalCount = await User.countDocuments();
    return totalCount;
  } catch (err) {
    console.error("Error counting total documents in database!: ", err)
  }
}

const fetchUser = async (doc_num) => {
  try {
    const users = await User.find(); // Fetch all users
    return (users[doc_num].email);
  } catch (err) {
    console.error('Error fetching users:', err);
  }
}

const findUser = async (email) => {

  try {
    const count = await totalCount()

    for (let i = 0; i < count; i++) {
      if (email == await fetchUser(i)) {
        return email
      }
    }
    return 1;
  } catch (err) {
    console.error("Getting an error: ", err)
  }
}

// Signup Route
app.post("/signup", async (req, res) => {

  const { name, email, password } = req.body;

  try {

    const DBuser = await findUser(email)
    if (DBuser != 1) {
      res.status(409).json({ message: "Email id already exist!" });
    }
    else {
      const hashedPassword = await bcrypt.hash(password, 10); // hashing the password

      const newUser = new User({ name, email, password: hashedPassword });

      await newUser.save()
      res.status(201).json({ message: "User saved successfully!", user: newUser });
    }

  } catch (error) {
    res.status(500).json({ message: "An error occurred while saving the user." });
  }
})


// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const DBuser = await findUser(email);
  const databasePassword = await User.findOne({ email: DBuser }, 'password');
  console.log(databasePassword)

  try {
    if (DBuser == 1) {
      console.log("Please enter a valid email id")
      res.status(401).json({ error: "Invalid email" });
    } else {

      if (email === DBuser && bcrypt.compareSync(password, databasePassword.password)) {
        res.status(200).json({ message: "Login successful!" });
      } else {
        res.status(401).json({ error: "Invalid email or password!" })
      }
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while Login" });
  }

})

// Change Password
const changePassword = async (email, new_password) => {
  const hashedNewPassword = await bcrypt.hash(new_password, 10); // hashing the password
  const filter = { email: email }
  await User.updateOne(filter, { $set: { password: hashedNewPassword } })
}

// Forgot Password
app.post("/forgot-password", async (req, res) => {
  const { email, password, confirm_password } = req.body;

  try {
    const DBuser = await findUser(email)

    if (DBuser == 1) {
      res.status(409).json({ message: "User is not exist!" });
    } else {
      if (password == confirm_password) {
        const new_password = password
        changePassword(email, new_password)
        res.status(200).json({ message: "Password Change Successfully!" });
      } else {
        res.status(200).json({ message: "Both passwords are not same. Please Recheck!" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred while changing the Password!" });
  }

})


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
