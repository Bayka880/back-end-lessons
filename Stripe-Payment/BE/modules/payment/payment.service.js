const Stripe = require("stripe");
require("dotenv").config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const payment = async (req, res) => {
  let { amount, id } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Auction",
      payment_method: id,
      confirm: true,
    });
    res.json({
      message: "Payment successfull",
      success: true,
      data: payment,
    });
  } catch (err) {
    res.json({
      message: "Payment failed",
      success: false,
    });
  }
};
module.exports = { payment };
