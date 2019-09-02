"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DataParser =
/*#__PURE__*/
function () {
  function DataParser() {
    _classCallCheck(this, DataParser);
  }

  _createClass(DataParser, [{
    key: "mapKeyValue",
    value: function mapKeyValue(keys, item) {
      var obj = {};
      keys.filter(function (key, i) {
        obj[key] = item[i];
      });
      return obj;
    }
  }, {
    key: "parse",
    value: function parse(data) {
      var _this = this;

      var list = [];
      data.filter(function (item, index) {
        if (index > 0 && item[0]) {
          list.push(_this.mapKeyValue(data[0], item));
        }
      });
      return list;
    }
  }]);

  return DataParser;
}();

module.exports = DataParser;