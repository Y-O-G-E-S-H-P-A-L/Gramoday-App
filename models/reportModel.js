const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  reportDetails: {
    userID: {
      type: String,
      required: [true, "Please enter user id"],
    },
    marketID: {
      type: String,
      required: [true, "Please enter market id"],
    },
    marketName: {
      type: String,
      required: [true, "Please enter market name"],
    },
    cmdtyID: {
      type: String,
      required: [true, "Please enter commodity id"],
    },
    marketType: {
      type: String,
      required: [true, "Please enter market type"],
    },
    cmdtyName: {
      type: String,
      required: [true, "Please enter commodity name"],
    },
    priceUnit: {
      type: String,
      required: [true, "Please enter price unit"],
    },
    convFctr: {
      type: Number,
      required: [true, "Please enter total price"],
    },
    price: {
      type: Number,
      required: [true, "Please enter price"],
    },
  },
});

module.exports = mongoose.model("Report", reportSchema);
