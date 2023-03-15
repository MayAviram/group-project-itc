const Ajv = require('ajv');
const ajvFormats = require('ajv-formats');
const ajverrors = require('ajv-errors');

const ajv = new Ajv({ allErrors: true });
ajvFormats(ajv);
ajverrors(ajv);

module.exports = { ajv };
