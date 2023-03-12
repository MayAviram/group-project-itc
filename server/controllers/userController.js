const { User } = require('../model/userModel');

const createUser = async (req, res) => {
  const user = User.create(req.body);

  res.status(200).json({ user });
};

module.exports = { createUser };
