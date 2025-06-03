const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

const errorA = "i am an error";
const errorB = "i am another error";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
