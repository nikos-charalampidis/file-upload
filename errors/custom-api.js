class CustomAPIError extends Error {
  constructor(message) {
    super(message)
  }
}

const test = "test";

module.exports = CustomAPIError
