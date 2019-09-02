"use strict";

var _data_parser = _interopRequireDefault(require("./data_parser.js"));

var _preload_data = _interopRequireDefault(require("./preload_data.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Module to create webpages
 * 1. Read data from xlsx sheets in data folder
 * 2. Push data nodes into HTML
 **/
var fs = require("fs");

var xlsx = require("node-xlsx")["default"];

// Parse a buffer
// const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`./data/data.xlsx`));
var workSheetsFromBuffer = xlsx.parse(fs.readFileSync("./data/NoName.xlsx"));
var DataParserScript = new _data_parser["default"]();
var mendorList = DataParserScript.parse(workSheetsFromBuffer[0].data);
var bookmarksList = DataParserScript.parse(workSheetsFromBuffer[1].data); // Update each mendorList list with bookmarksList

mendorList.filter(function (item) {
  item["bookmarks"] = [];
  bookmarksList.filter(function (bookmark) {
    if (bookmark.vendor_id == item.id) {
      item["bookmarks"].push(bookmark);
    }
  });
});
var PreloadDataScript = new _preload_data["default"]();
PreloadDataScript.preload(mendorList.slice(0, 6), "public/index.html", "preloaded-home-data");
PreloadDataScript.preload(mendorList, "public/listing.html", "preloaded-listing-data"); // create dynamic mentor details page
// Create empty folder

var ROOT = "public";
fs.readFile("public/details.html", "utf8", function (err, contents) {
  if (err) {
    console.log(err);
    return false;
  }

  mendorList.filter(function (item) {
    var preloadData = JSON.stringify(item);
    var preloadNode = "<script id=\"preloaded-details-data\" type=\"text/json\">".concat(preloadData, "</script>");
    var currentMentorFileContent = contents.replace("{{data-preloader}}", preloadNode);
    fs.writeFile(ROOT + "/" + item.url + ".html", currentMentorFileContent);
  });
}); // PreloadDataScript.preload(
//   sheetData,
//   "public/details.html",
//   "preloaded-details-data"
// );