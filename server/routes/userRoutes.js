<<<<<<< HEAD
const express = require("express");
const { createUser, loginUser } = require("../controllers/userController");
const { validateUser } = require("../middleware/middleware");

const router = express.Router();

router.post("/signup", validateUser, createUser);
router.post("/login", loginUser);
=======
const express = require('express');
const {
  createUser,
  loginUser,
  getUserById,
  updateUser,
} = require('../controllers/userController');
const { validateUser, existUser } = require('../middlewares/userMiddlewares');

const router = express.Router();

router.post('/signup', validateUser, createUser);
router.post('/login', loginUser);
router.get('/:id', existUser, getUserById);
router.put('/:id', existUser, updateUser);
>>>>>>> aa053d88d5781a16b926f03ceb38848e9cd82a71

module.exports = { userRoutes: router };
