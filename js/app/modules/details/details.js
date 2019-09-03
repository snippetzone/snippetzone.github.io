"use strict";

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

var MentorProfile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MentorProfile, _React$Component);

  function MentorProfile() {
    _classCallCheck(this, MentorProfile);

    return _possibleConstructorReturn(this, _getPrototypeOf(MentorProfile).apply(this, arguments));
  }

  _createClass(MentorProfile, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "container-fluid mentor-profile"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "row justify-content-md-center"
      }, React.createElement("div", {
        className: "col-12 col-md-6"
      }, React.createElement("div", {
        className: "row details"
      }, React.createElement("div", {
        className: "col-sm-12 "
      }, React.createElement("div", {
        className: "row img-name-role"
      }, React.createElement("div", {
        className: "col-sm-2 image-section"
      }, React.createElement("img", {
        src: this.props.info.image,
        alt: ""
      })), React.createElement("div", {
        className: "col-sm-10 name-role verticaly-center"
      }, React.createElement("h5", {
        className: "name"
      }, this.props.info.name), React.createElement("div", {
        className: "role"
      }, this.props.info.current_position, " ", this.props.info.role)))), React.createElement("div", {
        className: "col-sm-12 col-md-10 offset-md-2 bio-social"
      }, React.createElement("div", {
        className: "bio"
      }, this.props.info.bio), React.createElement("div", {
        className: "social"
      }, this.props.info.facebook && React.createElement("a", {
        href: this.props.info.facebook
      }, React.createElement("i", {
        className: "fab fa-facebook-f"
      })), this.props.info.linkedin && React.createElement("a", {
        href: this.props.info.linkedin
      }, React.createElement("i", {
        className: "fab fa-linkedin"
      })), this.props.info.twitter && React.createElement("a", {
        href: this.props.info.twitter
      }, React.createElement("i", {
        className: "fab fa-twitter"
      })))))))));
    }
  }]);

  return MentorProfile;
}(React.Component);

var Article =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Article, _React$Component2);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, _getPrototypeOf(Article).apply(this, arguments));
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "row article"
      }, React.createElement("div", {
        className: "col-12 col-md-8"
      }, React.createElement("a", {
        href: this.props.info.link,
        target: "_blank"
      }, React.createElement("img", {
        className: "fav img-fluid",
        src: this.props.info.fav_ico
      }), React.createElement("div", {
        className: "description"
      }, this.props.info.title), React.createElement("div", {
        className: "source"
      }, "Video by: ", this.props.info.author), React.createElement("div", {
        className: "description-2"
      }, this.props.info.short_description))), React.createElement("div", {
        className: "col-md-4 d-none d-md-block"
      }, React.createElement("a", {
        href: this.props.info.link,
        target: "_blank"
      }, React.createElement("img", {
        className: "img-fluid cover",
        src: this.props.info.thumbnail
      }))));
    }
  }]);

  return Article;
}(React.Component);

var Video =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Video, _React$Component3);

  function Video() {
    _classCallCheck(this, Video);

    return _possibleConstructorReturn(this, _getPrototypeOf(Video).apply(this, arguments));
  }

  _createClass(Video, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "row video align-items-center"
      }, React.createElement("div", {
        className: "col-12 col-md-7"
      }, React.createElement("a", {
        href: this.props.info.link,
        target: "_blank"
      }, React.createElement("img", {
        className: "fav img-fluid",
        src: this.props.info.fav_ico
      }), React.createElement("div", {
        className: "description"
      }, this.props.info.title), React.createElement("div", {
        className: "source"
      }, "Video by: ", this.props.info.author))), React.createElement("div", {
        className: "col-12 col-md-5"
      }, React.createElement("a", {
        href: this.props.info.link,
        target: "_blank"
      }, React.createElement("img", {
        className: "img-fluid cover",
        src: this.props.info.thumbnail
      }))));
    }
  }]);

  return Video;
}(React.Component);

var MentorBookMarks =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(MentorBookMarks, _React$Component4);

  function MentorBookMarks() {
    _classCallCheck(this, MentorBookMarks);

    return _possibleConstructorReturn(this, _getPrototypeOf(MentorBookMarks).apply(this, arguments));
  }

  _createClass(MentorBookMarks, [{
    key: "render",
    value: function render() {
      var bookmarksItems = this.props.list.map(function (item, index) {
        if (item.type == "video") {
          return React.createElement(Video, {
            key: index,
            info: item
          });
        } else {
          return React.createElement(Article, {
            key: index,
            info: item
          });
        }
      });
      return React.createElement("div", {
        className: "container-fluid"
      }, React.createElement("div", {
        className: "container"
      }, React.createElement("div", {
        className: "row justify-content-md-center"
      }, React.createElement("div", {
        className: "col-12 col-md-8"
      }, bookmarksItems))));
    }
  }]);

  return MentorBookMarks;
}(React.Component);

var MentorDetails =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(MentorDetails, _React$Component5);

  function MentorDetails() {
    _classCallCheck(this, MentorDetails);

    return _possibleConstructorReturn(this, _getPrototypeOf(MentorDetails).apply(this, arguments));
  }

  _createClass(MentorDetails, [{
    key: "render",
    value: function render() {
      return React.createElement(React.Fragment, null, React.createElement(MentorProfile, {
        info: this.props.info
      }), React.createElement(MentorBookMarks, {
        list: this.props.info.bookmarks
      }));
    }
  }]);

  return MentorDetails;
}(React.Component);

document.addEventListener("DOMContentLoaded", function () {
  var domContainer = document.getElementById("details-container");
  var mendorInfo = preloadData("preloaded-details-data");
  ReactDOM.render(React.createElement(MentorDetails, {
    info: mendorInfo
  }), domContainer);
});