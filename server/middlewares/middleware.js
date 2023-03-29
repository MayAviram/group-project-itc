const { ajv } = require("../utils/ajv.config");
const jwt = require("jsonwebtoken");
const { User } = require("../model/userModel");

const userSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 20,
    },
    lastName: {
      type: "string",
      minLength: 2,
      maxLength: 20,
    },
    email: {
      type: "string",
      format: "email",
      errorMessage: "Invalid email",
    },
    number: {
      type: "number",
    },
    password: {
      type: "string",
      minLength: 8,
      maxLength: 20,
      errorMessage: "Password must be at least 8 characters",
    },
  },
};

const validateUser = (req, res, next) => {
  const isValid = ajv.validate(userSchema, req.body);

  if (!isValid) {
    const errors = ajv.errors.map((error) => {
      return { value: error.instancePath.slice(1), message: error.message };
    });

    return res.status(400).json({
      errors,
    });
  }

  return next();
};

const protectToken = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded.id;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const existUser = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    return next();
  } catch (error) {
    return res.status(404).json({ message: "User not found" });
  }
};

module.exports = { validateUser, existUser, protectToken };
