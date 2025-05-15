const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

//create Product
const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(StatusCodes.CREATED).json({ product });
};

const test = "test";
const new;
const newNew;

//get all products 
const getAllProducts = async (req, res) => {
  const products = await Product.find({});
  res.status(StatusCodes.OK).json({ products });
};

module.exports = {
  createProduct,
  getAllProducts,
};
