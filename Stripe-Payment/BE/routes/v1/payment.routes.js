const express = require("express");
const router = express.Router();
const paymentController = require("../../modules/payment/payment.controller");

router.post("/", paymentController.payment);

module.exports = router;
