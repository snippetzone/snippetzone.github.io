"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var fs = require("fs");

var PreloadData =
/*#__PURE__*/
function () {
  function PreloadData() {
    _classCallCheck(this, PreloadData);
  }

  _createClass(PreloadData, [{
    key: "preload",
    value: function preload(data, filePath, nodeId) {
      fs.readFile(filePath, "utf8", function (err, contents) {
        if (err) {
          console.log(err);
          return false;
        }

        var preloadData = JSON.stringify(data);
        var preloadNode = "<script id=\"".concat(nodeId, "\" type=\"text/json\">").concat(preloadData, "</script>");
        contents = contents.replace("{{data-preloader}}", preloadNode);
        fs.writeFile(filePath, contents);
      });
    }
  }]);

  return PreloadData;
}();

module.exports = PreloadData;