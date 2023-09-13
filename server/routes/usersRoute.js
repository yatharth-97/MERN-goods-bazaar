const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authMiddleware');

// new user registration
router.post('/register', async (req, res) => {
  try {
    // check if the user already exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      throw new Error('User already exists');
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //save user
    const newUser = new User(req.body); // creating new user record
    await newUser.save();
    res.send({
      success: true,
      message: 'User created Successfully',
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// user login
router.post('/login', async (req, res) => {
  try {
    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      throw new Error('User Not Found');
    }

    // compare password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password // hashed password
    );
    if (!validPassword) {
      throw new Error('Invalid Password');
    }

    // create and assign a token
    const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
      expiresIn: '1d',
    }); //first parameter -> data to encrypt, second -> secret key

    // send response
    res.send({
      success: true,
      message: 'User Logged In Successsfully',
      data: token,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

// get current user
router.get('/get-current-user', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    res.send({
      success: true,
      message: 'User fetched successfully',
      data: user,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
