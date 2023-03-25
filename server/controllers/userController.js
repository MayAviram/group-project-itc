const { User } = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Favorite } = require('../model/favoriteSchema');
const { MyTeachers } = require('../model/myTeachersModel');
require('dotenv').config({ path: './.env' });

const createUser = async (req, res) => {
  const { name, lastName, email, number, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const salt = await bcrypt.genSalt(12);
  const hashPassword = await bcrypt.hash(password, salt);

  req.body.password = hashPassword;

  const newUser = await User.create(req.body);

  newUser.password = undefined;

  res.status(200).json({ newUser });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Credentials invalids' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  user.password = undefined;

  res.status(200).json({ token, user });
};

const getUserById = async (req, res) => {
  const { user } = req;
  user.password = undefined;
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  const { user } = req;
  const { password } = req.body;

  if (password) {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);

    req.body.password = hashPassword;
  }

  const updatedUser = await User.findByIdAndUpdate(user._id, req.body, {
    new: true,
  });

  updatedUser.password = undefined;

  res.status(200).json({ updatedUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  await Favorite.deleteMany({ userId: id });
  await MyTeachers.deleteMany({ userId: id });
  await User.findByIdAndDelete(id);

  res.status(200).json({ message: 'User deleted' });
};

module.exports = { createUser, loginUser, getUserById, updateUser, deleteUser };
