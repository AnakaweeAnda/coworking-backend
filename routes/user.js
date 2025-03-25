const express = require('express');
const {
    register,
    login,
    getMe,
    logout,
    
} = require('../controllers/auth');

const { getUsers } = require('../controllers/user');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/logout', logout);

// Add this route to get all users (ADMIN ONLY)
router.get('/users', protect, authorize('admin'), getUsers);

module.exports = router;