// controllers/user.js

const User = require('../models/User');

//@desc Get all users
//@route GET /api/v1/auth/users
//@access Private/Admin
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (err) {
    console.error(err); // Log the error for debugging purposes
    res.status(500).json({
      success: false,
      message: 'Error retrieving users'
    });
  }
};