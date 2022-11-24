const path = require("path");

// var fileDetail = "react-app/testserver.js";
var fileDetail = __dirname;

const pathMain = path.dirname(fileDetail + "/backend");
// const pathMain = path.basename(filePathReq);
// console.log("file path is ", pathMain);

module.exports = pathMain;
