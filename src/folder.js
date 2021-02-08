const config = require("./config");
const fs = require("fs");

exports.check = function () {
  if (!fs.existsSync(config.destinationFolder)) {
    fs.mkdirSync(config.destinationFolder);
  }
};
