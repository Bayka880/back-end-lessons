const paymentServie = require("./payment.service");
const payment = async (req, res) => {
  try {
    const payment = await paymentServie.payment(req, res);
    res.json({
      data: payment,
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports = { payment };
