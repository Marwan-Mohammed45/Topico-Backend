import Order from "../models/Order.model.js";
import Product from "../models/product.model.js";

export const createOrder = async (req, res) => {
  try {
    const { items, totalPrice, shippingAddress } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Order must contain at least one item." });
    }

    const order = new Order({
      user: req.user._id, // من middleware
      items,
      totalPrice,
      shippingAddress,
    });

    await order.save();
    res.status(201).json({ message: "Order placed successfully.", order });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ message: "Failed to create order." });
  }
};

// جلب كل الطلبات (Admin فقط)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch orders." });
  }
};

// جلب الطلبات الخاصة بمستخدم معيّن
export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch user orders." });
  }
};

// تعديل حالة الطلب
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found." });

    order.status = req.body.status || order.status;
    await order.save();

    res.status(200).json({ message: "Order status updated.", order });
  } catch (error) {
    res.status(500).json({ message: "Failed to update order." });
  }
};

//  حذف طلب (Admin فقط)
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found." });

    res.status(200).json({ message: "Order deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete order." });
  }
};
