"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var preloadData = function preloadData(id) {
  var a = document.getElementById(id);
  return JSON.parse(a.innerText);
};

var MentorBookmark =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MentorBookmark, _React$Component);

  function MentorBookmark() {
    _classCallCheck(this, MentorBookmark);

    return _possibleConstructorReturn(this, _getPrototypeOf(MentorBookmark).apply(this, arguments));
  }

  _createClass(MentorBookmark, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "mentor-bookmark"
      }, React.createElement("div", {
        className: "list"
      }, React.createElement("div", {
        className: "list-thumbnail"
      }, React.createElement("img", {
        src: this.props.info.fav_ico,
        alt: this.props.info.title
      })), React.createElement("div", {
        className: "list-details"
      }, React.createElement("h4", null, this.props.info.title), React.createElement("span", {
        className: "author"
      }, this.props.info.type == "video" && React.createElement("i", {
        "class": "fas fa-play"
      }), this.props.info.author))));
    }
  }]);

  return MentorBookmark;
}(React.Component);

var MentorCard =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MentorCard, _React$Component2);

  function MentorCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MentorCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MentorCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getBookmarksItems", function (bookmarks) {
      console.log(bookmarks);
      var bookmarksList = bookmarks.map(function (bookmark) {
        return React.createElement(MentorBookmark, {
          info: bookmark
        });
      });
      return React.createElement(React.Fragment, null, bookmarksList);
    });

    _defineProperty(_assertThisInitialized(_this), "getMentorDetails", function () {
      return React.createElement("div", {
        className: "mentor-profile"
      }, React.createElement("div", {
        className: "mentor-img"
      }, React.createElement("img", {
        src: _this.props.item.image,
        alt: _this.props.item.name
      })), React.createElement("div", {
        className: "mentor-details"
      }, React.createElement("h3", null, _this.props.item.name), React.createElement("p", null, _this.props.item.current_position, " ", React.createElement("span", null, _this.props.item.role))));
    });

    _defineProperty(_assertThisInitialized(_this), "getIndicatorFooterAction", function (id) {
      return React.createElement("div", {
        className: "mentor-action col-sm-12"
      }, React.createElement("div", {
        className: "action left-section "
      }, React.createElement("ol", {
        className: "carousel-indicators"
      }, React.createElement("li", {
        "data-target": "#" + id,
        "data-slide-to": "0",
        className: "active"
      }), _this.props.item.bookmarks.length > 4 && React.createElement("li", {
        "data-target": "#" + id,
        "data-slide-to": "1"
      }))), React.createElement("div", {
        className: "action center-section"
      }, React.createElement("i", {
        className: "far fa-clock"
      }), _this.props.item.last_updated_on), React.createElement("div", {
        className: "action right-section text-center"
      }, React.createElement("a", {
        href: _this.props.item.url + ".html"
      }, "See list ", React.createElement("i", {
        className: "fas fa-chevron-right"
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "getBookmarksSlides", function () {
      return React.createElement("div", {
        className: "carousel-inner"
      }, React.createElement("div", {
        className: "carousel-item active"
      }, _this.getBookmarksItems(_this.props.item.bookmarks.slice(0, 4))), _this.props.item.bookmarks.length > 4 && React.createElement("div", {
        className: "carousel-item"
      }, _this.getBookmarksItems(_this.props.item.bookmarks.slice(4, 8))));
    });

    _defineProperty(_assertThisInitialized(_this), "getBookmarks", function () {
      var bookmarkId = "mentor-bookmarks" + _this.props.id;
      return React.createElement("div", {
        className: "mentor-bookmark-container"
      }, React.createElement("div", {
        id: bookmarkId,
        className: "carousel slide"
      }, _this.props.item.bookmarks.length > 0 && _this.getBookmarksSlides(), _this.props.item.bookmarks.length > 0 && _this.getIndicatorFooterAction(bookmarkId)));
    });

    return _this;
  }

  _createClass(MentorCard, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "col-12 col-sm-6 col-md-4"
      }, React.createElement("div", {
        className: "mentor-card"
      }, this.getMentorDetails(), this.getBookmarks()));
    }
  }]);

  return MentorCard;
}(React.Component);

var MentorCardList =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(MentorCardList, _React$Component3);

  function MentorCardList() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, MentorCardList);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(MentorCardList)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this2), "getMendorListing", function () {
      var mentors = _this2.props.list.map(function (item, index) {
        return React.createElement(MentorCard, {
          item: item,
          key: index,
          id: item.id
        });
      });

      return React.createElement(React.Fragment, null, mentors);
    });

    return _this2;
  }

  _createClass(MentorCardList, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "container mendor-listing-container"
      }, React.createElement("div", {
        className: "row"
      }, this.getMendorListing()));
    }
  }]);

  return MentorCardList;
}(React.Component);

document.addEventListener("DOMContentLoaded", function () {
  var domContainer = document.getElementById("home-container");
  var mendorList = preloadData("preloaded-home-data");
  ReactDOM.render(React.createElement(MentorCardList, {
    list: mendorList
  }), domContainer);
});