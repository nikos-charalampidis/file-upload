const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const addViolation = "i am a new violation"

//create Product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

//get all products 
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = {
  createProduct,
  getAllProducts,
};
