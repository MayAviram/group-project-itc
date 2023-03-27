const express = require('express');
const {
  createUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require('../controllers/userController');
const { validateUser, existUser } = require('../middlewares/middleware');

const router = express.Router();

router.post('/signup', validateUser, createUser);
router.post('/login', loginUser);
router.get('/:id', existUser, getUserById);
router.put('/:id', existUser, updateUser);
router.delete('/:id', existUser, deleteUser);
router.get('/', getAllUsers);

module.exports = { userRoutes: router };
