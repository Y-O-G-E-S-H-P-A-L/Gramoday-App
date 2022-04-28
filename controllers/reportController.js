const Report = require("../models/reportModel");

exports.createReport = async (req, res) => {
  const report = await Report.create(req.body);
  res.status(200).json({
    success: true,
    report,
  });
};

exports.getReport = async (req, res) => {
  const idReport = await Report.findById(req.params.id);

  const { cmdtyName, cmdtyID, marketID, marketName } = idReport.reportDetails;

  const reports = await Report.find();
  const date = Date.now();
  let i = 0;
  let pricePerUnit = 0;
  let user = [];

  reports.forEach((r) => {
    const { userID, price, convFctr, cmdtyName: comName } = r.reportDetails;
    if (comName === cmdtyName) {
      pricePerUnit = pricePerUnit + price / convFctr;
      user.push(userID);
      i++;
    }
  });

  const result = {
    _id: req.params.id,
    cmdtyName,
    cmdtyID,
    marketID,
    marketName,
    users: user,
    timeStamp: date,
    priceUnit: "Kg",
    price: Math.trunc(pricePerUnit / i),
  };

  res.status(200).json({
    success: true,
    result,
  });
};
