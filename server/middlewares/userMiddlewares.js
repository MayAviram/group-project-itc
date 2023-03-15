const { ajv } = require('../utils/ajv.config');

const userSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      minLength: 2,
      maxLength: 20,
    },
    lastName: {
      type: 'string',
      minLength: 2,
      maxLength: 20,
    },
    email: {
      type: 'string',
      format: 'email',
      errorMessage: 'Invalid email',
    },
    number: {
      type: 'number',
    },
    password: {
      type: 'string',
      minLength: 8,
      maxLength: 20,
      errorMessage: 'Password must be at least 8 characters',
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

module.exports = { validateUser };
