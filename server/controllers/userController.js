const { User } = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    expiresIn: '1d',
  });

  user.password = undefined;

  res.status(200).json({ token, user });
};

module.exports = { createUser, loginUser };
