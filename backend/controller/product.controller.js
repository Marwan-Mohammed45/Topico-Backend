// ✅ Product Controller with Validation
import Product from "../models/product.model.js";

// Helper function for validation
const validateProductFields = ({ name, price, description, category, images, stock }) => {
  if (!name || !price || !description || !category || !images || !Array.isArray(images) || images.length === 0 || stock == null) {
    return "All product fields are required and images must be a non-empty array.";
  }
  if (typeof price !== "number" || price < 0) return "Price must be a valid number.";
  if (typeof stock !== "number" || stock < 0) return "Stock must be a valid number.";
  return null;
};

// Create Product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, images, stock } = req.body;

    const validationError = validateProductFields({ name, price, description, category, images, stock });
    if (validationError) return res.status(400).json({ message: validationError });

    const product = new Product({ name, price, description, category, images, stock });
    await product.save();

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Create Product Error:", error);
    res.status(500).json({ message: "Error creating product" });
  }
};

// Get All Products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// Get Product by ID
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
};

// Update Product
export const updateProduct = async (req, res) => {
  try {
    const { name, price, description, category, images, stock } = req.body;

    const validationError = validateProductFields({ name, price, description, category, images, stock });
    if (validationError) return res.status(400).json({ message: validationError });

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, description, category, images, stock },
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product" });
  }
};

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product" });
  }
};
