import WebFont from 'webfontloader';
import { Util, Badge as Badge$1, Collapse as Collapse$1, FormGroup as FormGroup$1, Input as Input$1, Label, NavbarBrand, Navbar, NavbarToggler, Jumbotron, Nav as Nav$1, Card as Card$1 } from 'reactstrap';
export { Alert, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Fade, Form, FormFeedback, FormText, InputGroup, InputGroupAddon, InputGroupButtonDropdown, InputGroupText, Jumbotron, Label, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Media, Modal, ModalBody, ModalFooter, ModalHeader, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, PaginationItem as PagerItem, PaginationLink as PagerLink, Popover, PopoverBody, PopoverHeader, PopperContent, PopperTargetHelper, Row, TabContent, TabPane, Table, Tooltip, UncontrolledAlert, UncontrolledButtonDropdown, UncontrolledCarousel, UncontrolledCollapse, UncontrolledDropdown, UncontrolledTooltip, Util } from 'reactstrap';
import PropTypes from 'prop-types';
import React, { Component, PureComponent, Fragment } from 'react';
import Transition from 'react-transition-group/Transition';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      "default": obj
    };
  }

  module.exports = _interopRequireDefault;
});
unwrapExports(interopRequireDefault);

var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
});

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var setPrototypeOf = createCommonjsModule(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */

  /* global define */
  (function () {

    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);

          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(' ');
    }

    if ( module.exports) {
      classNames["default"] = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

var throttle_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var throttle = function throttle(fn) {
    var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var last;
    var timer;
    return function () {
      var now = +new Date();
      var timePassed = !!last && now < last + threshold;

      if (timePassed) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn();
        }, threshold);
      } else {
        last = now;
        fn();
      }
    };
  };

  var _default = throttle;
  exports["default"] = _default;
});
unwrapExports(throttle_1);

var Scrollspy_1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _defineProperty2 = interopRequireDefault(defineProperty);

  var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

  var _classCallCheck2 = interopRequireDefault(classCallCheck);

  var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

  var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

  var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

  var _createClass2 = interopRequireDefault(createClass);

  var _inherits2 = interopRequireDefault(inherits);

  var _propTypes = interopRequireDefault(PropTypes);

  var _react = interopRequireDefault(React);

  var _classnames = interopRequireDefault(classnames);

  var _throttle = interopRequireDefault(throttle_1);

  function isEqualArray(a, b) {
    return a.length === b.length && a.every(function (item, index) {
      return item === b[index];
    });
  }

  var Scrollspy =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(Scrollspy, _React$Component);
    (0, _createClass2["default"])(Scrollspy, null, [{
      key: "propTypes",
      get: function get() {
        return {
          items: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
          currentClassName: _propTypes["default"].string.isRequired,
          scrolledPastClassName: _propTypes["default"].string,
          style: _propTypes["default"].object,
          componentTag: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
          offset: _propTypes["default"].number,
          rootEl: _propTypes["default"].string,
          onUpdate: _propTypes["default"].func
        };
      }
    }, {
      key: "defaultProps",
      get: function get() {
        return {
          items: [],
          currentClassName: '',
          style: {},
          componentTag: 'ul',
          offset: 0,
          onUpdate: function onUpdate() {}
        };
      }
    }]);

    function Scrollspy(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, Scrollspy);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Scrollspy).call(this, props));
      _this.state = {
        targetItems: [],
        inViewState: [],
        isScrolledPast: [] // manually bind as ES6 does not apply this
        // auto binding as React.createClass does

      };
      _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2["default"])(_this));
      return _this;
    }

    (0, _createClass2["default"])(Scrollspy, [{
      key: "_initSpyTarget",
      value: function _initSpyTarget(items) {
        var targetItems = items.map(function (item) {
          return document.getElementById(item);
        });
        return targetItems;
      } // https://github.com/makotot/react-scrollspy/pull/45

    }, {
      key: "_fillArray",
      value: function _fillArray(array, val) {
        var newArray = [];

        for (var i = 0, max = array.length; i < max; i++) {
          newArray[i] = val;
        }

        return newArray;
      }
    }, {
      key: "_isScrolled",
      value: function _isScrolled() {
        return this._getScrollDimension().scrollTop > 0;
      }
    }, {
      key: "_getScrollDimension",
      value: function _getScrollDimension() {
        var doc = document;
        var rootEl = this.props.rootEl;
        var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
        var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
        return {
          scrollTop: scrollTop,
          scrollHeight: scrollHeight
        };
      }
    }, {
      key: "_getElemsViewState",
      value: function _getElemsViewState(targets) {
        var elemsInView = [];
        var elemsOutView = [];
        var viewStatusList = [];
        var targetItems = targets ? targets : this.state.targetItems;
        var hasInViewAlready = false;

        for (var i = 0, max = targetItems.length; i < max; i++) {
          var currentContent = targetItems[i];
          var isInView = hasInViewAlready ? false : this._isInView(currentContent);

          if (isInView) {
            hasInViewAlready = true;
            elemsInView.push(currentContent);
          } else {
            elemsOutView.push(currentContent);
          }

          var isLastItem = i === max - 1;

          var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


          var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

          if (isLastShortItemAtBottom) {
            elemsOutView.pop();
            elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2["default"])(elemsInView));
            elemsInView = [currentContent];
            viewStatusList = this._fillArray(viewStatusList, false);
            isInView = true;
          }

          viewStatusList.push(isInView);
        }

        return {
          inView: elemsInView,
          outView: elemsOutView,
          viewStatusList: viewStatusList,
          scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
        };
      }
    }, {
      key: "_isInView",
      value: function _isInView(el) {
        if (!el) {
          return false;
        }

        var _this$props = this.props,
            rootEl = _this$props.rootEl,
            offset = _this$props.offset;
        var rootRect;

        if (rootEl) {
          rootRect = document.querySelector(rootEl).getBoundingClientRect();
        }

        var rect = el.getBoundingClientRect();
        var winH = rootEl ? rootRect.height : window.innerHeight;

        var _this$_getScrollDimen = this._getScrollDimension(),
            scrollTop = _this$_getScrollDimen.scrollTop;

        var scrollBottom = scrollTop + winH;
        var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
        var elBottom = elTop + el.offsetHeight;
        return elTop < scrollBottom && elBottom > scrollTop;
      }
    }, {
      key: "_isAtBottom",
      value: function _isAtBottom() {
        var rootEl = this.props.rootEl;

        var _this$_getScrollDimen2 = this._getScrollDimension(),
            scrollTop = _this$_getScrollDimen2.scrollTop,
            scrollHeight = _this$_getScrollDimen2.scrollHeight;

        var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
        var scrolledToBottom = scrollTop + winH >= scrollHeight;
        return scrolledToBottom;
      }
    }, {
      key: "_getScrolledPast",
      value: function _getScrolledPast(viewStatusList) {
        if (!viewStatusList.some(function (item) {
          return item;
        })) {
          return viewStatusList;
        }

        var hasFoundInView = false;
        var scrolledPastItems = viewStatusList.map(function (item) {
          if (item && !hasFoundInView) {
            hasFoundInView = true;
            return false;
          }

          return !hasFoundInView;
        });
        return scrolledPastItems;
      }
    }, {
      key: "_spy",
      value: function _spy(targets) {
        var _this2 = this;

        var elemensViewState = this._getElemsViewState(targets);

        var currentStatuses = this.state.inViewState;
        this.setState({
          inViewState: elemensViewState.viewStatusList,
          isScrolledPast: elemensViewState.scrolledPast
        }, function () {
          _this2._update(currentStatuses);
        });
      }
    }, {
      key: "_update",
      value: function _update(prevStatuses) {
        if (isEqualArray(this.state.inViewState, prevStatuses)) {
          return;
        }

        this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
      }
    }, {
      key: "_handleSpy",
      value: function _handleSpy() {
        (0, _throttle["default"])(this._spy(), 100);
      }
    }, {
      key: "_initFromProps",
      value: function _initFromProps() {
        var targetItems = this._initSpyTarget(this.props.items);

        this.setState({
          targetItems: targetItems
        });

        this._spy(targetItems);
      }
    }, {
      key: "offEvent",
      value: function offEvent() {
        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
        el.removeEventListener('scroll', this._handleSpy);
      }
    }, {
      key: "onEvent",
      value: function onEvent() {
        var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
        el.addEventListener('scroll', this._handleSpy);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this._initFromProps();

        this.onEvent();
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.offEvent();
      }
    }, {
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps() {
        this._initFromProps();
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var Tag = this.props.componentTag;
        var _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            scrolledPastClassName = _this$props2.scrolledPastClassName,
            style = _this$props2.style;
        var counter = 0;

        var items = _react["default"].Children.map(children, function (child, idx) {
          var _classNames;

          if (!child) {
            return null;
          }

          var ChildTag = child.type;
          var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
          var childClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
          return _react["default"].createElement(ChildTag, (0, _extends2["default"])({}, child.props, {
            className: childClass,
            key: counter++
          }), child.props.children);
        });

        var itemClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className), className));
        return _react["default"].createElement(Tag, {
          className: itemClass,
          style: style
        }, items);
      }
    }]);
    return Scrollspy;
  }(_react["default"].Component);

  exports["default"] = Scrollspy;
});
var Scrollspy = unwrapExports(Scrollspy_1);

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps = {
  tag: 'div'
};
function Accordion(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames('collapse-div', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
}
Accordion.propTypes = propTypes;
Accordion.defaultProps = defaultProps;

var propTypes$1 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func
};
var defaultProps$1 = {
  tag: 'button'
};
function AccordionHeader(props) {
  var className = props.className,
      Tag = props.tag,
      active = props.active,
      onToggle = props.onToggle,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "active", "onToggle"]);

  var classes = classnames('collapse-header');
  var toggleClasses = classnames(className, {
    collapsed: active
  });
  return React.createElement("div", {
    className: classes
  }, React.createElement(Tag, _extends({
    "data-toggle": "collapse",
    "aria-expanded": active ? 'true' : 'false',
    className: toggleClasses,
    onClick: onToggle
  }, attributes)));
}
AccordionHeader.propTypes = propTypes$1;
AccordionHeader.defaultProps = defaultProps$1;

var _transitionStatusToCl;
var TransitionTimeouts = Util.TransitionTimeouts,
    TransitionPropTypeKeys = Util.TransitionPropTypeKeys,
    TransitionStatuses = Util.TransitionStatuses,
    pick = Util.pick,
    omit = Util.omit;

var propTypes$2 = _extends({}, Transition.propTypes, {
  // eslint-disable-line react/forbid-foreign-prop-types
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  onToggle: PropTypes.func
});

var defaultProps$2 = _extends({}, Transition.defaultProps, {
  timeout: TransitionTimeouts.Collapse,
  tag: 'div'
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var AccordionBody =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(AccordionBody, _Component);

  function AccordionBody() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      height: null
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onEntering", function (node, isAppearing) {
      _this.setState({
        height: getHeight(node)
      });

      _this.props.onEntering(node, isAppearing);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onEntered", function (node, isAppearing) {
      _this.setState({
        height: null
      });

      _this.props.onEntered(node, isAppearing);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onExit", function (node) {
      _this.setState({
        height: getHeight(node)
      });

      _this.props.onExit(node);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onExiting", function (node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

      _this.setState({
        height: 0
      });

      _this.props.onExiting(node);
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onExited", function (node) {
      _this.setState({
        height: null
      });

      _this.props.onExited(node);
    });

    return _this;
  }

  var _proto = AccordionBody.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        active = _this$props.active,
        children = _this$props.children,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "active", "children"]);

    var height = this.state.height;
    var transitionProps = pick(attributes, TransitionPropTypeKeys);
    var childProps = omit(attributes, TransitionPropTypeKeys);
    return React.createElement(Transition, _extends({}, transitionProps, {
      "in": active,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var transitionClass = getTransitionClass(status);
      var classes = classnames(className, transitionClass);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement(Tag, _extends({
        className: classes,
        style: _extends({}, childProps.style, {}, style)
      }, childProps), React.createElement("div", {
        className: "collapse-body"
      }, children));
    });
  };

  return AccordionBody;
}(Component);
AccordionBody.propTypes = propTypes$2;
AccordionBody.defaultProps = defaultProps$2;

var propTypes$3 = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  className: PropTypes.string
};
var defaultProps$3 = {
  color: 'secondary',
  pill: false,
  tag: 'span'
};

var Badge = function Badge(props) {
  var children = props.children;
  return React.createElement(Badge$1, props, children);
};

Badge.propTypes = propTypes$3;
Badge.defaultProps = defaultProps$3;

var propTypes$4 = _extends({}, Collapse$1.propTypes, {
  // eslint-disable-line react/forbid-foreign-prop-types

  /** Indica se il componente Collapse è usato all'interno di un componente Header */
  header: PropTypes.bool,

  /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  inOpen: PropTypes.bool,

  /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
  onOverlayClick: PropTypes.func
});

var Collapse = function Collapse(_ref) {
  var header = _ref.header,
      className = _ref.className,
      navbar = _ref.navbar,
      children = _ref.children,
      isOpen = _ref.isOpen,
      onOverlayClick = _ref.onOverlayClick,
      attributes = _objectWithoutPropertiesLoose(_ref, ["header", "className", "navbar", "children", "isOpen", "onOverlayClick"]);

  if (navbar && header) {
    var _classes = classnames(className, 'navbar-collapsable', {
      expanded: isOpen
    });

    return React.createElement(Collapse$1, _extends({
      className: _classes,
      navbar: navbar,
      style: {
        display: isOpen ? 'block' : 'none'
      }
    }, attributes), React.createElement("div", {
      className: "overlay",
      style: {
        display: isOpen ? 'block' : 'none'
      },
      onClick: onOverlayClick
    }), React.createElement("div", {
      className: "close-div sr-only"
    }, React.createElement("button", {
      className: "btn close-menu",
      type: "button"
    }, React.createElement("span", {
      className: "it-close"
    }), "close")), children);
  }

  var classes = classnames(className, {
    'link-list-wrapper': header
  });
  return React.createElement(Collapse$1, _extends({
    className: classes
  }, attributes, {
    navbar: navbar,
    isOpen: isOpen
  }), children);
};

Collapse.propTypes = propTypes$4;
Collapse.defaultProps = Collapse$1.defaultProps;

var FormGroup =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(FormGroup, _Component);

  function FormGroup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      active: _this.props.active || false,
      value: null
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onFocus", function (callback, active) {
      if (active === void 0) {
        active = true;
      }

      _this.setState({
        active: active
      }, function () {
        if (callback) {
          callback();
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onBlur", function (callback, active) {
      if (active === void 0) {
        active = false;
      }

      _this.setState({
        active: active
      }, function () {
        if (callback) {
          callback();
        }
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onChange", function (callback, event) {
      var value;
      var target;

      if (event && event.persist) {
        // SyntheticEvent
        event.persist();
        target = {
          event: event
        };
        value = {
          target: target
        };
      } else if (event.label) {
        // Autocomplete
        value = event.label;
      }

      _this.setState({
        value: value
      }, function () {
        if (callback) {
          callback(event);
        }
      });
    });

    return _this;
  }

  var _proto = FormGroup.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        active = _this$state.active,
        value = _this$state.value;

    var _this$props = this.props,
        children = _this$props.children,
        className = _this$props.className,
        col = _this$props.col,
        rest = _objectWithoutPropertiesLoose(_this$props, ["children", "className", "col"]);

    var hasValue = !!value;
    var classNames = [className, active ? 'active' : '', col ? 'col' : ''].join(' ');
    return React.createElement(FormGroup$1, _extends({}, rest, {
      className: classNames
    }), function () {
      return React.Children.map(children, function (child) {
        if (child === null) return;
        var _child$props = child.props,
            _onFocus = _child$props.onFocus,
            _onBlur = _child$props.onBlur,
            _onChange = _child$props.onChange,
            className = _child$props.className;

        switch (child.type) {
          case Input$1:
            var isLabelActive = null;
            return React.cloneElement(child, _extends({}, child.props, {
              onFocus: function onFocus() {
                _this2.onFocus(_onFocus);
              },
              onBlur: function onBlur() {
                _this2.onBlur(_onBlur);
              },
              onChange: function onChange(e) {
                _this2.onChange(_onChange, e);
              }
            }, isLabelActive));

          case Label:
            var hasChildValue = false;
            React.Children.toArray(children).filter(function (child) {
              switch (child.type) {
                case Input$1:
                  return true;

                default:
                  return false;
              }
            }).map(function (child) {
              if (child.props.value) {
                hasChildValue = true;
              }

              return false;
            });
            classNames = hasValue || hasChildValue ? [className, 'active'].join(' ') : className;
            return React.cloneElement(child, _extends({}, child.props, {
              className: classNames
            }));

          default:
            return child;
        }
      });
    }());
  };

  return FormGroup;
}(Component);

FormGroup.defaultProps = FormGroup$1.defaultProps;
FormGroup.propTypes = FormGroup$1.propTypes;

/**
 * HeaderContext
 * {
 *  type: PropTypes.oneOf([SLIM, CENTER, NAVBAR]).isRequired
 * }
 */

var HeaderContext = React.createContext({});
var SLIM = 'slim';
var CENTER = 'center';
var NAVBAR = 'navbar';

var propTypes$5 = {
  /** Classi addizionali per il componente Header */
  className: PropTypes.string,
  // cannot use variables above here or storybook writes the full import stacktrace

  /** Tipo di componente Header: può essere solamente uno di questi tre tipi */
  type: PropTypes.oneOf(['slim', 'center', 'navbar']).isRequired,

  /** Quando abilitato render il componente "sticky", ovvero fisso in alto quando si scorre la pagina */
  sticky: PropTypes.bool,

  /** Riduce la grandezza del componente Header. Funziona solamente con Header "center". */
  small: PropTypes.bool,

  /** Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
   *  il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
   *  in mobile, mentre "dark" in versione desktop.
   */
  theme: PropTypes.oneOf(['', 'light', 'dark'])
};
var defaultProps$4 = {
  small: false,
  sticky: false
};

var Header = function Header(_ref) {
  var _classNames;

  var className = _ref.className,
      small = _ref.small,
      sticky = _ref.sticky,
      theme = _ref.theme,
      type = _ref.type,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "small", "sticky", "theme", "type"]);

  // use context here as theme
  var classes = classnames(className, (_classNames = {}, _classNames["it-header-" + type + "-wrapper"] = type, _classNames['it-header-sticky'] = sticky, _classNames['it-small-header'] = type === CENTER && small, _classNames["theme-" + theme] = type !== NAVBAR && theme, _classNames['theme-dark-mobile'] = type === NAVBAR && theme === 'dark', _classNames['theme-light-desk'] = type === NAVBAR && theme === 'light', _classNames));
  return React.createElement(HeaderContext.Provider, {
    value: {
      type: type
    }
  }, React.createElement("div", _extends({
    className: classes
  }, attributes)));
};

Header.propTypes = propTypes$5;
Header.defaultProps = defaultProps$4;

var propTypes$6 = {
  /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
  shadow: PropTypes.bool,

  /** Classi addizionali per il componente Headers */
  className: PropTypes.string
};
var defaultProps$5 = {
  shadow: false
};

var Headers = function Headers(_ref) {
  var className = _ref.className,
      shadow = _ref.shadow,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "shadow"]);

  var classes = classnames('it-header-wrapper', {
    'it-shadow': shadow
  }, className);
  return React.createElement("div", _extends({
    className: classes
  }, attributes));
};

Headers.propTypes = propTypes$6;
Headers.defaultProps = defaultProps$5;

var iconSprite = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOSAxMy4ybC01LjQgNS4zVjNoLTF2MTUuNWwtNS40LTUuMy0uNy43IDYuNiA2LjUgNi42LTYuNXpNMTIgMTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYgMTMuMmwuNy43LTQuMyA0LjMtNC4zLTQuMy43LS43IDMuMSAzLjFWN2gxdjkuMnpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1kb3duLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjIgMTJoNS42YTEgMSAwIDAxLjcgMS43TDEyIDE3LjNsLTMuNS0zLjZhMSAxIDAgMDEuNy0xLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgMTEuNUg1LjVsNS4zLTUuNC0uNy0uN0wzLjYgMTJsNi41IDYuNi43LS43LTUuMy01LjRIMjF6TTUgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNyAxMS41SDE3djFINy44bDMgMy4xLS43LjdMNS44IDEybDQuMy00LjMuNy43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LWxlZnQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuMnY1LjZhMSAxIDAgMDEtMS43LjdMNi44IDEybDMuNS0zLjVhMSAxIDAgMDExLjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuOSA1LjRsLS43LjcgNS4zIDUuNEgzdjFoMTUuNWwtNS4zIDUuNC43LjcgNi42LTYuNnpNMTkgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMy45IDcuN2w0LjMgNC4zLTQuMyA0LjMtLjctLjcgMy4xLTMuMUg3di0xaDkuMmwtMy0zLjF6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE0LjhWOS4yYTEgMSAwIDAxMS43LS43bDMuNSAzLjUtMy41IDMuNWExIDEgMCAwMS0xLjctLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjYgMTAuMUwxMiAzLjVsLTYuNiA2LjYuNy43IDUuNC01LjNWMjFoMVY1LjVsNS40IDUuM3pNMTIgNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy11cC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDUuOGw0LjMgNC4zLS43LjctMy4xLTMuMVYxN2gtMVY3LjhsLTMuMSAzLS43LS43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXVwLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC44IDEySDkuMmExIDEgMCAwMS0uNy0xLjdMMTIgNi44bDMuNSAzLjVhMSAxIDAgMDEtLjcgMS43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJlaGFuY2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik03LjgzIDUuNzVhOCA4IDAgMDExLjYuMTUgMy4zOCAzLjM4IDAgMDExLjI0LjUxYy4zNDUuMjMzLjYyLjU1NC44LjkzLjIwMi40NTYuMjk4Ljk1Mi4yOCAxLjQ1YTIuNjggMi42OCAwIDAxLS40MiAxLjU0IDMuMDUgMy4wNSAwIDAxLTEuMjUgMSAyLjkyIDIuOTIgMCAwMTEuNjggMS4xNWMuMzkzLjU5LjU5IDEuMjkuNTYgMmEzLjM5IDMuMzkgMCAwMS0uMzIgMS41OSAzLjA4IDMuMDggMCAwMS0xIDEuMTEgNC4yNyA0LjI3IDAgMDEtMS40LjY0QTYgNiAwIDAxOCAxOEgyVjUuNzVoNS44M3ptLS4zNSA1YTIgMiAwIDAwMS4xOS0uMzVjLjMyOC0uMjcuNS0uNjg3LjQ2LTEuMTFBMS40NyAxLjQ3IDAgMDA5IDguNTRhMS4xNiAxLjE2IDAgMDAtLjQyLS40M0ExLjggMS44IDAgMDA4IDcuOWEzLjI2IDMuMjYgMCAwMC0uNy0uMDZINC43NHYyLjg3bDIuNzQuMDR6bS4xNSA1LjIyYy4yNTIuMDAzLjUwMy0uMDIuNzUtLjA3YTIgMiAwIDAwLjYyLS4zIDEuMzkgMS4zOSAwIDAwLjQ0LS40OSAxLjczIDEuNzMgMCAwMC4xNi0uOEExLjY0IDEuNjQgMCAwMDkuMDkgMTNhMi4zMyAyLjMzIDAgMDAtMS40MS0uNEg0Ljc0djMuMzhsMi44OS0uMDF6bTguNTQtLjA4YTIuMTggMi4xOCAwIDAwMS41OC41NCAyLjI0IDIuMjQgMCAwMDEuMjUtLjM3IDEuNiAxLjYgMCAwMC42NS0uNzloMi4xNWE0LjA2IDQuMDYgMCAwMS0xLjU4IDIuMjkgNC42NCA0LjY0IDAgMDEtMi41OC42OSA1LjIzIDUuMjMgMCAwMS0xLjktLjMzIDQgNCAwIDAxLTIuMzMtMi40NCA1LjI1IDUuMjUgMCAwMS0uMzItMS44OSA1LjEyIDUuMTIgMCAwMS4zMy0xLjg2IDQuMTQgNC4xNCAwIDAxLjkzLTEuNDkgNC40OCA0LjQ4IDAgMDExLjQ0LTEgNC41OSA0LjU5IDAgMDExLjg1LS4zNiA0LjMxIDQuMzEgMCAwMTIgLjQ0QTQgNCAwIDAxMjEgMTAuNWMuMzcuNTA1LjYzNiAxLjA4Ljc4IDEuNjlhNi4xOCA2LjE4IDAgMDEuMTcgMmgtNi4zOGEyLjUgMi41IDAgMDAuNiAxLjd6TTE5IDExLjIyYTEuODMgMS44MyAwIDAwLTEuMzgtLjQ5IDIgMiAwIDAwLTEgLjIgMS44IDEuOCAwIDAwLS42Mi40OSAxLjYyIDEuNjIgMCAwMC0uMzMuNjIgMi44NyAyLjg3IDAgMDAtLjExLjU5aDRhMi40IDIuNCAwIDAwLS41Ni0xLjQxem0tMy45My00LjY1aDQuOTh2MS4yMWgtNC45OFY2LjU3eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYnVyZ2VyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMiA1djFIMlY1ek0yIDEyLjVoMjB2LTFIMnpNMiAxOWgyMHYtMUgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbGVuZGFyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMC41IDRIMTdWM2gtMXYxSDhWM0g3djFIMy41QTEuNSAxLjUgMCAwMDIgNS41djEzQTEuNSAxLjUgMCAwMDMuNSAyMGgxN2ExLjUgMS41IDAgMDAxLjUtMS41di0xM0ExLjUgMS41IDAgMDAyMC41IDR6bS41IDE0LjVhLjUuNSAwIDAxLS41LjVoLTE3YS41LjUgMCAwMS0uNS0uNXYtMTNhLjUuNSAwIDAxLjUtLjVIN3YxaDFWNWg4djFoMVY1aDMuNWEuNS41IDAgMDEuNS41ek00IDhoMTZ2MUg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbWVyYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAyMGgtMTdBMS41IDEuNSAwIDAxMiAxOC41di0xMEExLjUgMS41IDAgMDEzLjUgN2g0LjNsMS41LTIuM2ExLjUgMS41IDAgMDExLjItLjdoM2ExLjUgMS41IDAgMDExLjIuN0wxNi4yIDdoNC4zQTEuNSAxLjUgMCAwMTIyIDguNXYxMGExLjUgMS41IDAgMDEtMS41IDEuNXpNMy41IDhhLjUuNSAwIDAwLS41LjV2MTBhLjUuNSAwIDAwLjUuNWgxN2EuNS41IDAgMDAuNS0uNXYtMTBhLjUuNSAwIDAwLS41LS41aC00LjhsLTEuOC0yLjgtLjQtLjJoLTNsLS40LjJMOC4zIDh6TTEyIDE4YTUgNSAwIDExNS01IDUgNSAwIDAxLTUgNXptMC05YTQgNCAwIDEwNCA0IDQgNCAwIDAwLTQtNHpNNyA1SDR2MWgzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhcmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXpNMyA5aDE4djNIM3ptMTggOC41YS41LjUgMCAwMS0uNS41aC0xN2EuNS41IDAgMDEtLjUtLjVWMTNoMTh6TTMgOFY2LjVhLjUuNSAwIDAxLjUtLjVoMTdhLjUuNSAwIDAxLjUuNVY4em01IDdINHYtMWg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZWNrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjYgMTYuOUw0IDExLjRsLjgtLjcgNC44IDQuOCA4LjUtOC40LjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGVjay1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjEgNy45bC43LjctNy44IDcuNi00LjctNC42LjctLjcgNCAzLjl6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hldnJvbi1sZWZ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC42IDE3LjJMOSAxMS42IDE0LjYgNmwuOC43LTQuOSA0LjkgNC45IDQuOXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZXZyb24tcmlnaHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuOCAxNy4ybC0uOC0uNyA0LjktNC45TDkgNi43bC44LS43IDUuNiA1LjZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbGlwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMSAyMmEyLjkgMi45IDAgMDEtMy0zVjZhNCA0IDAgMDE4IDB2MTBoLTFWNmEzIDMgMCAwMC02IDB2MTNhMiAyIDAgMDA0IDBWOGExIDEgMCAwMC0yIDB2OGgtMVY4YTIgMiAwIDAxNCAwdjExYTIuOSAyLjkgMCAwMS0zIDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgNWgxdjcuNUg3di0xaDQuNXpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbG9zZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNyAxMmwzLjcgMy42LS44LjgtMy42LTMuNy0zLjYgMy43LS44LS44IDMuNy0zLjYtMy43LTMuNi44LS44IDMuNiAzLjcgMy42LTMuNy44Ljh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UtYmlnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi43IDEybDYuNyA2LjYtLjguOC02LjYtNi43LTYuNiA2LjctLjgtLjggNi43LTYuNi02LjctNi42LjgtLjggNi42IDYuNyA2LjYtNi43LjguOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbG9zZS1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjMgOC4zTDEyLjYgMTJsMy43IDMuNi0uNy43LTMuNy0zLjYtMy42IDMuNi0uNy0uNyAzLjYtMy42LTMuNi0zLjcuNy0uNyAzLjYgMy43IDMuNy0zLjd6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29kZS1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5IDEybC0yLjkgMi45LS43LS44IDIuMS0yLjEtMi4xLTIuMS43LS44ek03LjkgOS4xTDUgMTJsMi45IDIuOS43LS44TDYuNSAxMmwyLjEtMi4xek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05ek05LjYgMTYuNWwxIC4zIDMuNy05LjMtLjktLjN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29sbGFwc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTUuNGwtNC45LTQuOS00LjkgNC45LS43LS44TDExLjYgOWw1LjYgNS42eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29tbWVudCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgM0g1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgydjUuNGwxLjctMS43IDMuNy0zLjdIMTlhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6bTEgMTJhLjkuOSAwIDAxLTEgMWgtN2wtNCA0di00SDVhLjkuOSAwIDAxLTEtMVY1YS45LjkgMCAwMTEtMWgxNGEuOS45IDAgMDExIDF6TTkgMTBhLjkuOSAwIDAxLTEgMSAuOS45IDAgMDEtMS0xIC45LjkgMCAwMTEtMSAuOS45IDAgMDExIDF6bTQgMGExIDEgMCAwMS0yIDAgMSAxIDAgMDEyIDB6bTQgMGExIDEgMCAwMS0yIDAgMSAxIDAgMDEyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNSA0SDE4di0uNkExLjUgMS41IDAgMDAxNi41IDJoLTExQTEuNSAxLjUgMCAwMDQgMy40djE1LjJBMS41IDEuNSAwIDAwNS41IDIwSDd2LjZBMS41IDEuNSAwIDAwOC41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjRWNS40QTEuNSAxLjUgMCAwMDE5LjUgNHpNNSAxOC42VjMuNGEuNS41IDAgMDEuNS0uNGgxMWEuNS41IDAgMDEuNS40djE1LjJhLjUuNSAwIDAxLS41LjRoLTExYS41LjUgMCAwMS0uNS0uNHptMTUgMmEuNS41IDAgMDEtLjUuNGgtMTFhLjUuNSAwIDAxLS41LS40VjIwaDguNWExLjUgMS41IDAgMDAxLjUtMS40VjVoMS41YS41LjUgMCAwMS41LjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZGVzaWduZXJzLWl0YWxpYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NjMgMjAuNjc1VjcuNjQxSDEyLjN2MTMuMDU3SDguNjYzdi0uMDIzek0yMi45NTIgMTAuNjFoLTMuMzI1djUuMzU3YzAgLjUzNC4wMjQuODgyLjA0OCAxLjExMy4wMjQuMjEuMTIuMzk1LjI4OS41NTcuMTY5LjE2Mi40MzQuMjMyLjc5NS4yMzJsMi4wNzItLjA0Ni4xNjkgMi43ODNjLTEuMjA1LjI1NS0yLjE0NS4zOTQtMi43NzEuMzk0LTEuNjM5IDAtMi43NDctLjM0OC0zLjMyNS0xLjA2Ny0uNjAzLS42OTYtLjg5Mi0xLjk5NC0uODkyLTMuODk2VjRoMy42Mzl2My42MThoMy4zMjV2Mi45OTJoLS4wMjR6bS0xOS43Ni45OTdjLS42MjYgMC0xLjE1Ni0uMjA5LTEuNTY1LS42MjZBMi4xMTMgMi4xMTMgMCAwMTEgOS40NWMwLS42MDQuMjE3LTEuMTE0LjYwMi0xLjUzMS40MS0uNDE4Ljk0LS42MDMgMS41NjctLjYwMy42MjYgMCAxLjE1Ni4yMDggMS41NjYuNjI2LjQxLjQxNy42MDIuOTI3LjYwMiAxLjU1NCAwIC42MjYtLjE5MiAxLjExMy0uNjAyIDEuNTMtLjM4Ni4zNzEtLjg5Mi41OC0xLjU0Mi41OHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWRvd25sb2FkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxNC4yTDcuNyA5LjlsLjctLjcgMy4xIDMuMVYzaDF2OS4ybDMuMS0zIC43Ljd6bTctMi4ydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWVycm9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS41IDE0LjJWNS43aDEuMnY4LjV6bS0uMSA0LjFoMS4ydi0xLjhoLTEuMnpNMjIgNy45djguM0wxNi4xIDIySDcuOUwyIDE2LjJWNy45TDcuOSAyaDguMnptLTEgLjRMMTUuNyAzSDguM0wzIDguM3Y3LjVMOC4zIDIxaDcuNGw1LjMtNS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWV4Y2hhbmdlLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em01LjEtOC45bC44LjgtNC4zIDQuM2ExLjUgMS41IDAgMDEtMS4xLjQgMS41IDEuNSAwIDAxLTEuMS0uNEw5IDE0LjdWMTdIOHYtNGg0djFIOS43bDIuNCAyLjVoLjh6bS02LTQuNmwtNC4yIDQuNC0uOC0uOCA0LjMtNC4zYTEuNSAxLjUgMCAwMTEuMS0uNCAxLjUgMS41IDAgMDExLjEuNEwxNSA5LjNWN2gxdjRoLTR2LTFoMi4zbC0yLjQtMi41aC0uOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1leHBhbmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYgMTUuNEw2IDkuOGwuNy0uOCA0LjkgNC45TDE2LjUgOWwuNy44eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXh0ZXJuYWwtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgM3Y2aC0xVjQuN2wtNy42IDcuNy0uOC0uOEwxOS4zIDRIMTVWM3ptLTQgMTYuNWEuNS41IDAgMDEtLjUuNWgtMTJhLjUuNSAwIDAxLS41LS41di0xMmEuNS41IDAgMDEuNS0uNUgxMlY2SDQuNUExLjUgMS41IDAgMDAzIDcuNXYxMkExLjUgMS41IDAgMDA0LjUgMjFoMTJhMS41IDEuNSAwIDAwMS41LTEuNVYxMmgtMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEzLjU1IDIydi05LjExaDMuMDdsLjQ2LTMuNTZoLTMuNTNWNy4wNWMwLTEgLjI5LTEuNzMgMS43Ny0xLjczaDEuODdWMi4xNEEyNS4xNCAyNS4xNCAwIDAwMTQuNDUgMmMtMi43MiAwLTQuNTggMS42Ni00LjU4IDQuN3YyLjYySDYuODF2My41N2gzLjA2VjIyaDMuNjh6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vay1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCAzSDRhMSAxIDAgMDAtMSAxdjE2YTEgMSAwIDAwMSAxaDguNjN2LTYuOTVoLTIuMzd2LTIuNzRoMi4zNHYtMmEzLjI4IDMuMjggMCAwMTMuNS0zLjZjLjcwNSAwIDEuNDEuMDQgMi4xMS4xMnYyLjQ0aC0xLjQ0Yy0xLjEzIDAtMS4zNC41My0xLjM0IDEuMzJ2MS43NGgyLjdsLS4zNSAyLjcyaC0yLjM1djdIMjBhMSAxIDAgMDAxLTFWNGExIDEgMCAwMC0xLTF6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1maWxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC43IDJINi41QTEuNSAxLjUgMCAwMDUgMy41djE3QTEuNSAxLjUgMCAwMDYuNSAyMmgxMWExLjUgMS41IDAgMDAxLjUtMS41VjYuM3ptLjMgMS43TDE3LjMgNmgtMS44YS41LjUgMCAwMS0uNS0uNXpNMTcuNSAyMWgtMTFhLjUuNSAwIDAxLS41LS41di0xN2EuNS41IDAgMDEuNS0uNUgxNHYyLjVBMS41IDEuNSAwIDAwMTUuNSA3SDE4djEzLjVhLjUuNSAwIDAxLS41LjV6TTggOWg4djFIOHptMCAyaDh2MUg4em0wIDJoNHYxSDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmlsZXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjcgMkg3LjVBMS41IDEuNSAwIDAwNiAzLjVWNGgtLjVBMS41IDEuNSAwIDAwNCA1LjV2MTVBMS41IDEuNSAwIDAwNS41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjVWMjBoLjVhMS41IDEuNSAwIDAwMS41LTEuNVY2LjN6bS4zIDEuN0wxOC4zIDZoLTEuOGEuNS41IDAgMDEtLjUtLjV6bTEgMTYuOGEuNS41IDAgMDEtLjUuNWgtMTFhLjUuNSAwIDAxLS41LS41di0xNWEuNS41IDAgMDEuNS0uNUg2djEzLjVBMS41IDEuNSAwIDAwNy41IDIwSDE3em0xLjUtMS41aC0xMWEuNS41IDAgMDEtLjUtLjV2LTE1YS41LjUgMCAwMS41LS41SDE1djIuNUExLjUgMS41IDAgMDAxNi41IDdIMTl2MTEuNWEuNS41IDAgMDEtLjUuNXpNOSA5aDh2MUg5em0wIDJoOHYxSDl6bTAgMmg0djFIOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mbGlja3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxjaXJjbGUgY3g9IjYuNzMiIGN5PSIxMiIgcj0iNC43MyIvPjxjaXJjbGUgY3g9IjE3LjI3IiBjeT0iMTIiIHI9IjQuNzMiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZsaWNrci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCA0YTMuMjYgMy4yNiAwIDAwLTIuMzgtMUg2LjM4QTMuMjYgMy4yNiAwIDAwNCA0YTMuMjYgMy4yNiAwIDAwLTEgMi4zN3YxMS4yNUEzLjI2IDMuMjYgMCAwMDQgMjBhMy4yNiAzLjI2IDAgMDAyLjM5IDFoMTEuMjRBMy4zOCAzLjM4IDAgMDAyMSAxNy42MlY2LjM3QTMuMjYgMy4yNiAwIDAwMjAgNHptLTkuNTYgOS43N2EyLjUgMi41IDAgMDEtMy41MSAwIDIuNDkgMi40OSAwIDAxMC0zLjUyIDIuNSAyLjUgMCAwMTMuNTEgMCAyLjQ5IDIuNDkgMCAwMTAgMy41MnptNi42MSAwQTIuNDkgMi40OSAwIDAxMTIuODIgMTJhMi40OSAyLjQ5IDAgMDE0LjI0LTEuNzYgMi40OSAyLjQ5IDAgMDEwIDMuNTJsLS4wMS4wMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZvbGRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNmgtOGwtMi0ySDRhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDE2YTIgMiAwIDAwMi0yVjhhMiAyIDAgMDAtMi0yem0xIDEyYS45LjkgMCAwMS0xIDFINGEuOS45IDAgMDEtMS0xVjZhLjkuOSAwIDAxMS0xaDUuNmwxLjcgMS43LjMuM0gyMGEuOS45IDAgMDExIDF6TTQgOGgxNnYxSDR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDAwLTMuMTYgMTkuNDljLjUuMDkuNjgtLjIyLjY4LS40OHYtMS43QzYuNzMgMTkuOTEgNi4xNCAxOCA2LjE0IDE4QTIuNjkgMi42OSAwIDAwNSAxNi41Yy0uOTEtLjYyLjA3LS42MS4wNy0uNjFhMi4xMyAyLjEzIDAgMDExLjUzIDEgMi4xNCAyLjE0IDAgMDAyLjkxLjgzIDIuMTYgMi4xNiAwIDAxLjYzLTEuMzRjLTIuMTQtLjIxLTQuNTItMS4wNy00LjUyLTQuOWEzLjg5IDMuODkgMCAwMTEtMi42OSAzLjU3IDMuNTcgMCAwMS4xLTIuNjRzLjg0LS4yNyAyLjc1IDFhOS42MyA5LjYzIDAgMDE1IDBjMS45MS0xLjI5IDIuNzUtMSAyLjc1LTEgLjM3LjgzNS40MDUgMS43OC4xIDIuNjRhMy44OSAzLjg5IDAgMDExIDIuNjljMCAzLjg0LTIuMzQgNC42OC00LjU3IDQuOTMuNDgyLjQ5LjczIDEuMTY0LjY4IDEuODV2Mi43NWMwIC4zMy4xOC41OC42OS40OEExMCAxMCAwIDAwMTIgMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhlYXJpbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDlhNi44IDYuOCAwIDAxLTMuNSA2bC0yIDEuMWEzLjMgMy4zIDAgMDAtMS41IDIuN0EzLjIgMy4yIDAgMDE5LjggMjJoLS42YTMuNCAzLjQgMCAwMS0zLTIuMWwuOS0uNUEyLjMgMi4zIDAgMDA5LjIgMjFoLjZhMi4xIDIuMSAwIDAwMS42LS43IDIgMiAwIDAwLjYtMS41IDQgNCAwIDAxMi0zLjVsMi0xLjJBNS45IDUuOSAwIDAwMTkgOWE2IDYgMCAwMC02LTYgNiA2IDAgMDAtNC44IDIuNGwtLjgtLjZBNyA3IDAgMDExMyAyYTcgNyAwIDAxNyA3ek03LjUgMTJBNS41IDUuNSAwIDAwMiA2LjV2MWE0LjUgNC41IDAgMDEwIDl2MUE1LjUgNS41IDAgMDA3LjUgMTJ6TTUgMTJhMi45IDIuOSAwIDAwLTMtM3YxYTIgMiAwIDAxMCA0djFhMi45IDIuOSAwIDAwMy0zem01IDBhOCA4IDAgMDAtOC04djFhNyA3IDAgMDEwIDE0djFhOCA4IDAgMDA4LTh6bTUuOS4zYTQuNSA0LjUgMCAwMDEuMi0zLjIgNC41IDQuNSAwIDAwLTEuMi0zLjIgNC41IDQuNSAwIDAwLTMuMi0xLjRBNC44IDQuOCAwIDAwOS41IDZsLS4zLjMuMi4zYTguOCA4LjggMCAwMTEuMyAzdi40aC40YTEuNSAxLjUgMCAwMTAgM3YxYTIuNSAyLjUgMCAwMDIuNS0yLjUgMi42IDIuNiAwIDAwLTItMi41IDguNSA4LjUgMCAwMC0xLjEtMi42IDMuOSAzLjkgMCAwMTIuMi0uOSAzLjUgMy41IDAgMDEyLjQgMSAzLjUgMy41IDAgMDExIDIuNiAzLjUgMy41IDAgMDEtMSAyLjZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaGVscCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuOCAyMmgtMS40di0yLjFoMS40em0tLjEtNC45aC0xLjJhOS43IDkuNyAwIDAxLS4xLTEuNyAyLjcgMi43IDAgMDEuMy0xLjIgNS42IDUuNiAwIDAxLjctMS4zbDIuMy0yLjFhOS42IDkuNiAwIDAwMS44LTIuMSA0LjUgNC41IDAgMDAuNS0yLjMgMyAzIDAgMDAtMS4xLTIuNiA2LjIgNi4yIDAgMDAtMy40LS43IDIyLjkgMjIuOSAwIDAwLTMuNi41bC0xIC4zLS4yLTEuMmguMWExOC4xIDE4LjEgMCAwMTQuNy0uOCA3LjQgNy40IDAgMDE0LjMgMSA0LjIgNC4yIDAgMDExLjQgMy41IDUgNSAwIDAxLS41IDIuNyA4LjYgOC42IDAgMDEtMS45IDIuMiAxOS43IDE5LjcgMCAwMC0xLjggMS42IDYuMiA2LjIgMCAwMC0uOSAxLjIgMi4zIDIuMyAwIDAwLS40IDEuNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWxwLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em0tMS4yLTQuNUgxMnYxLjhoLTEuMnptNC41LThhNC4yIDQuMiAwIDAxLS4zIDEuOCA1LjQgNS40IDAgMDEtMS4zIDEuNEwxMi4zIDEzYTIuOCAyLjggMCAwMC0uNCAxLjJ2LjZIMTFhMyAzIDAgMDEtLjItMSAyLjEgMi4xIDAgMDEuNS0xLjIgOSA5IDAgMDExLjQtMS40IDYuNCA2LjQgMCAwMDEuMi0xLjMgMi42IDIuNiAwIDAwLjMtMS40IDEuNyAxLjcgMCAwMC0uNi0xLjQgMy41IDMuNSAwIDAwLTItLjRMOS4zIDdoLS41di0uOGExMC4yIDEwLjIgMCAwMTMtLjUgNC45IDQuOSAwIDAxMi43LjYgMi43IDIuNyAwIDAxLjggMi4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhvcm4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgOWEzIDMgMCAwMDAgNmguNUw3IDE5LjNBMi41IDIuNSAwIDAwOS4zIDIxaC4yYTEuNCAxLjQgMCAwMDEuMi0uNiAxLjQgMS40IDAgMDAuMi0xLjRsLTEuMy00aDEuOGw4LjYgMy44VjQuN0wxMS40IDl6bTUgMTAuM2EuNy43IDAgMDEtLjEuNWwtLjQuMmgtLjJhMS41IDEuNSAwIDAxLTEuNC0xbC0xLjMtNGgxLjl6TTUgMTRhMiAyIDAgMDEwLTRoNnY0em0xNCAzLjJsLTctM1Y5LjhsNy0zLjV6TTIyIDl2NmgtMVY5eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWluZm8tY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNy0xNWgxLjV2MmgtMS41em0wIDNoMS41djloLTEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1pbnN0YWdyYW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xMiA0LjYybC0uMDEuMDhIOC4zNWE1LjEyIDUuMTIgMCAwMC0xLjY3LjMxYy0uMzguMTUtLjcyLjM4Mi0xIC42OC0uMjk4LjI4LS41My42Mi0uNjggMWE1LjEyIDUuMTIgMCAwMC0uMyAxLjY4djcuMjhjLjAxLjU3LjExNCAxLjEzNC4zMSAxLjY3LjE1LjM4LjM4Mi43Mi42OCAxIC4yOC4yOTguNjIuNTMgMSAuNjguNTM2LjE5NiAxLjEuMyAxLjY3LjMxLjk1LjA1IDEuMjQuMDUgMy42NC4wNSAyLjQgMCAyLjY0LS4wNSAzLjY0LS4wNWE1LjEyIDUuMTIgMCAwMDEuNjctLjMxQTMuMDggMy4wOCAwIDAwMTkgMTcuMzFhNS4xMiA1LjEyIDAgMDAuMy0xLjY4Yy4wNS0uOTUuMDUtMS4yNC4wNS0zLjY0IDAtMi40LS4wNS0yLjY0LS4wNS0zLjY0YTUuMTIgNS4xMiAwIDAwLS4zMS0xLjY3IDIuNzcgMi43NyAwIDAwLS42OC0xIDIuNzcgMi43NyAwIDAwLTEtLjY4IDUuMTIgNS4xMiAwIDAwLTEuNjctLjM4SDEyek0xMiAzdi4wNWgzLjcxYTYuOSA2LjkgMCAwMTIuMTkuNDIgNC42NCA0LjY0IDAgMDEyLjY4IDIuNjNBNi45IDYuOSAwIDAxMjEgOC4yOWMwIC45Ni4wNSAxLjI3LjA1IDMuNzFTMjEgMTQuNzEgMjEgMTUuNzFhNi45IDYuOSAwIDAxLS40NyAyLjI0IDQuNjQgNC42NCAwIDAxLTIuNjMgMi42MyA2LjkgNi45IDAgMDEtMi4xOS40MmMtLjk2LjA1LTEuMjcuMDUtMy43MS4wNVM5LjI5IDIxIDguMjkgMjFhNi45IDYuOSAwIDAxLTIuMTktLjQ3IDQuNjQgNC42NCAwIDAxLTIuNjMtMi42MyA2LjkgNi45IDAgMDEtLjQyLTIuMTlWMTIgOC4yOWE2LjkgNi45IDAgMDEuNDItMi4xOUE0LjY0IDQuNjQgMCAwMTYuMSAzLjQyIDYuOSA2LjkgMCAwMTguMjkgM0gxMnptMCA0LjM4YTQuNjIgNC42MiAwIDExMCA5LjI0IDQuNjIgNC42MiAwIDAxMC05LjI0ek0xMiAxNWEzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnptNC44LTYuNzJhMS4wOCAxLjA4IDAgMTEwLTIuMTYgMS4wOCAxLjA4IDAgMDEwIDIuMTZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1rZXkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDEwYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnptMCAzYTEgMSAwIDExMS0xIC45LjkgMCAwMS0xIDF6bS0xLTZhNS4xIDUuMSAwIDAwLTQuNiAzSDMuM2wtMiAyIDMgM0g3di0xaC4zbDEgMUgxMXYtMWgxLjRhNS4xIDUuMSAwIDAwNC42IDMgNSA1IDAgMDAwLTEwem0wIDlhNC4xIDQuMSAwIDAxLTMuOC0yLjdWMTNIMTB2MUg4LjdsLTEtMUg2djFINC43bC0yLTIgMS0xaDkuNHYtLjNBNC4xIDQuMSAwIDAxMTcgOGE0IDQgMCAwMTAgOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sZXNzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgM2E5IDkgMCAwMTYuMzYgMTUuMzZBOSA5IDAgMDE1LjY0IDUuNjIgOC45MyA4LjkzIDAgMDExMiAzbTAtMWExMCAxMCAwIDEwNy4wNyAyLjkzQTkuOTMgOS45MyAwIDAwMTIgMnoiLz48cmVjdCB4PSI3IiB5PSIxMS4yNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEuNSIgcng9Ii43NSIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNCAxMy40bC0uNy0uN2EyLjkgMi45IDAgMDAuOS0yLjEgMi43IDIuNyAwIDAwLS45LTIuMUw5LjIgNC45YTMuMiAzLjIgMCAwMC00LjMgMCAzLjIgMy4yIDAgMDAwIDQuM0w3LjggMTJsLS43LjctMi45LTIuOGE0LjIgNC4yIDAgMDEwLTUuNyA0LjIgNC4yIDAgMDE1LjcgMGwzLjUgMy42YTMuNiAzLjYgMCAwMTEuMiAyLjggMy42IDMuNiAwIDAxLTEuMiAyLjh6bTYuNCA2LjRhNC4yIDQuMiAwIDAwMC01LjdsLTIuOS0yLjgtLjcuNyAyLjkgMi44YTMuMiAzLjIgMCAwMTAgNC4zIDMuMiAzLjIgMCAwMS00LjMgMGwtMy41LTMuNmEyLjcgMi43IDAgMDEtLjktMi4xIDIuOSAyLjkgMCAwMS45LTIuMWwtLjctLjdhMy42IDMuNiAwIDAwLTEuMiAyLjggMy42IDMuNiAwIDAwMS4yIDIuOGwzLjUgMy42YTMuOCAzLjggMCAwMDIuOCAxLjEgMy45IDMuOSAwIDAwMi45LTEuMXptLTYuNy02LjciLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1saW5rZWRpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE2LjUzIDguNjhBMy45NCAzLjk0IDAgMDAxMyAxMC42MlY5SDkuMzd2MTJoMy43M3YtNS45NWMwLTEuNTcuMjktMy4wOSAyLjI0LTMuMDkgMS45NSAwIDEuOTMgMS44IDEuOTMgMy4xOVYyMUgyMXYtNi42YzAtMy4yMy0uNjktNS43Mi00LjQ3LTUuNzJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3pNMy4yOSA5djEySDdWOUgzLjI5em0xMy4yNC0uM0EzLjk0IDMuOTQgMCAwMDEzIDEwLjYyVjlIOS4zN3YxMmgzLjczdi01Ljk1YzAtMS41Ny4yOS0zLjA5IDIuMjQtMy4wOSAxLjk1IDAgMS45MyAxLjggMS45MyAzLjE5VjIxSDIxdi02LjZjMC0zLjIzLS42OS01LjcyLTQuNDctNS43MnYuMDJ6TTMuMjkgMjFIN1Y5SDMuMjl2MTJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmtlZGluLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE5LjY3IDNINC4zM0ExLjMyIDEuMzIgMCAwMDMgNC4zdjE1LjRBMS4zMiAxLjMyIDAgMDA0LjMzIDIxaDE1LjM0QTEuMzIgMS4zMiAwIDAwMjEgMTkuN1Y0LjNBMS4zMiAxLjMyIDAgMDAxOS42NyAzek04LjM0IDE4LjM0SDUuNjdWOS43NWgyLjY3djguNTl6TTcgOC41N0ExLjU1IDEuNTUgMCAxMTguNTUgNyAxLjU0IDEuNTQgMCAwMTcgOC41N3ptMTEuMzQgOS43N2gtMi42N3YtNC4xOGMwLTEgMC0yLjI4LTEuMzktMi4yOHMtMS42IDEuMDktMS42IDIuMjF2NC4yNUgxMFY5Ljc1aDIuNTZ2MS4xN2EyLjgzIDIuODMgMCAwMTIuNTMtMS4zOWMyLjcgMCAzLjIgMS43OCAzLjIgNC4xbC4wNSA0LjcxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGlzdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxMmEuOS45IDAgMDEtMSAxIDEgMSAwIDAxMC0yIC45LjkgMCAwMTEgMXpNMyA0LjVhLjkuOSAwIDAwLTEgMSAuOS45IDAgMDAxIDEgLjkuOSAwIDAwMS0xIC45LjkgMCAwMC0xLTF6bTAgMTNhMSAxIDAgMDAwIDIgMSAxIDAgMDAwLTJ6TTYgNXYxaDE2VjV6bTAgNy41aDE2di0xSDZ6TTYgMTloMTZ2LTFINnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sb2NrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC41IDguNUgxN1Y4QTUgNSAwIDAwNyA4di41SDUuNUExLjUgMS41IDAgMDA0IDEwdjguNUExLjUgMS41IDAgMDA1LjUgMjBoMTNhMS41IDEuNSAwIDAwMS41LTEuNVYxMGExLjUgMS41IDAgMDAtMS41LTEuNXpNOCA4YTQgNCAwIDAxOCAwdi41SDh6bTExIDEwLjVhLjUuNSAwIDAxLS41LjVoLTEzYS41LjUgMCAwMS0uNS0uNVYxMGEuNS41IDAgMDEuNS0uNWgxM2EuNS41IDAgMDEuNS41eiIvPjxwYXRoIGQ9Ik0xMiAxMy4yNWExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTFtMC0xYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxvY2tlZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuNSAxMkgxNlY3YTQgNCAwIDAwLTggMHY1aC0uNWExLjEgMS4xIDAgMDAtMS4xIDEuMXY2LjhBMS4xIDEuMSAwIDAwNy41IDIxaDlhMS4xIDEuMSAwIDAwMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwMC0xLjEtMS4xek05IDdhMyAzIDAgMDE2IDB2NUg5em03LjYgMTIuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1haWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXptLS4zIDFsLTcuMSA3LjJhMS42IDEuNiAwIDAxLTIuMiAwTDMuOCA2ek0zIDE3LjNWNi42TDguMyAxMnptLjcuN0w5IDEyLjdsMS4yIDEuMmEyLjcgMi43IDAgMDAzLjYgMGwxLjItMS4yIDUuMyA1LjN6bTEyLTZMMjEgNi42djEwLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWVkaXVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNNSA3LjYzQS43Mi43MiAwIDAwNC44MiA3TDMuMTMgNXYtLjNoNS4yMmw0IDguODQgMy41NC04Ljg0aDVWNWwtMS40MiAxLjRhLjQzLjQzIDAgMDAtLjE2LjR2MTAuMTJhLjQ1LjQ1IDAgMDAuMTYuNDFsMS40IDEuMzd2LjNoLTd2LS4zbDEuNDUtMS40MWMuMTQtLjE0LjE0LS4xOC4xNC0uNFY4LjcxTDExLjM3IDE5aC0uNTVMNi4xMiA4LjcxdjYuODhhLjkzLjkzIDAgMDAuMjYuNzlsMS44OSAyLjI5VjE5SDIuOTF2LS4zbDEuODktMi4zMmEuOTIuOTIgMCAwMC4yLS43OVY3LjYzeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWVkaXVtLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgM2gxOHYxOEgzVjN6bTQuMyAxMS4zNmEuNjQuNjQgMCAwMS0uMTcuNTRsLTEuMjcgMS41NHYuMmgzLjZ2LS4yTDguMTkgMTQuOWEuNjcuNjcgMCAwMS0uMTktLjU0VjkuNzRsMy4xNiA2LjloLjM3bDIuNzEtNi45djUuNWMwIC4xNSAwIC4xNy0uMDkuMjdsLTEgMXYuMmg0Ljc0di0uMmwtLjg5LS45OGEuMjcuMjcgMCAwMS0uMTEtLjI3di02LjhhLjI4LjI4IDAgMDEuMTEtLjI3bDEtLjkzdi0uMmgtMy4zOUwxMi4yMyAxMyA5LjUyIDcuMDZINnYuMmwxLjE0IDEuMzZBLjUuNSAwIDAxNy4zIDl2NS4zNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1pbnVzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAxMi41SDR2LTFoMTZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWludXMtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgMTEuNWgxMHYxaC0xMHpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tb3JlLWFjdGlvbnMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTBhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yem0wIDNhMSAxIDAgMDEwLTIgMSAxIDAgMDEwIDJ6bTYtM2EyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAgM2ExIDEgMCAxMTEtMSAuOS45IDAgMDEtMSAxem02LTNhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yem0wIDNhMSAxIDAgMTExLTEgLjkuOSAwIDAxLTEgMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tb3JlLWl0ZW1zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxOGExIDEgMCAxMS0xIDEgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAtNmExIDEgMCAxMS0xIDEgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAtNmEuOS45IDAgMDExIDEgMSAxIDAgMDEtMiAwIC45LjkgMCAwMTEtMW0wLTFhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW5vdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjUgNGgtMTNBMS41IDEuNSAwIDAwNCA1LjV2MTNBMS41IDEuNSAwIDAwNS41IDIwaDEwLjJsNC4zLTQuM1Y1LjVBMS41IDEuNSAwIDAwMTguNSA0ek01IDE4LjV2LTEzYS41LjUgMCAwMS41LS41aDEzYS41LjUgMCAwMS41LjVWMTVoLTIuNWExLjUgMS41IDAgMDAtMS41IDEuNVYxOUg1LjVhLjUuNSAwIDAxLS41LS41ek0xOC4zIDE2TDE2IDE4LjN2LTEuOGEuNS41IDAgMDEuNS0uNXpNMTYgOUg4VjhoOHptMCAySDh2LTFoOHptLTIgMXYxSDh2LTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMjFoMTh2MUgzem0wLTFoMTh2LTFIM3pNMjIgOUgybDEwLTd6TTUuMiA4aDEzLjZMMTIgMy4yek02IDE4di04SDV2OHptNCAwdi04SDl2OHptNSAwdi04aC0xdjh6bTQgMHYtOGgtMXY4eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLWludmlzaWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTJhMy4yIDMuMiAwIDAwLS43LTEuOWwuNC0xLjFhNC4yIDQuMiAwIDAxMS4zIDMgNCA0IDAgMDEtMy45IDRsLjQtMS4xQTIuOSAyLjkgMCAwMDE1IDEyek0zLjEgMTJBOS44IDkuOCAwIDAxMTIgNi41aC40bC40LS45SDEyYTEwLjkgMTAuOSAwIDAwLTkuOCA2TDIgMTJsLjIuNWExMSAxMSAwIDAwNi4xIDUuM2wuMy0uOUE5LjggOS44IDAgMDEzLjEgMTJ6bTE4LjctLjVhMTEgMTEgMCAwMC02LjEtNS4zbC0uMy45YTkuOCA5LjggMCAwMTUuNSA0LjkgOS44IDkuOCAwIDAxLTguOSA1LjVoLS40bC0uNC45aC44YTEwLjkgMTAuOSAwIDAwOS44LTZsLjItLjR6TTExLjUgOS4xbC40LTEuMUE0IDQgMCAwMDggMTJhNC4yIDQuMiAwIDAwMS4zIDNsLjQtMS4xQTMuMiAzLjIgMCAwMTkgMTJhMi45IDIuOSAwIDAxMi41LTIuOXptMy4xLTUuN0w4LjUgMjAuM2wuOS4zIDYuMS0xNi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLXZpc2libGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjggMTEuNWExMSAxMSAwIDAwLTE5LjYgMEwyIDEybC4yLjVhMTEgMTEgMCAwMDE5LjYgMGwuMi0uNXptLTkuOCA2QTkuOCA5LjggMCAwMTMuMSAxMiA5LjggOS44IDAgMDExMiA2LjVhOS44IDkuOCAwIDAxOC45IDUuNSA5LjggOS44IDAgMDEtOC45IDUuNXpNMTIgOGE0IDQgMCAxMDQgNCA0IDQgMCAwMC00LTR6bTAgN2EzIDMgMCAxMTMtMyAyLjkgMi45IDAgMDEtMyAzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBlbmNpbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAzLjVhMi45IDIuOSAwIDAwLTIuMS0uOSAzLjEgMy4xIDAgMDAtMi4yLjlMNC42IDE1LjJsLTEgNS4yIDUuMi0xTDIwLjUgNy44YTMgMyAwIDAwMC00LjN6bS01LjcgMi44bC43LS43IDIuOSAyLjktLjcuN3ptLS43LjhsMS4xIDEtOC40IDguNC0xLjEtMS4xek01LjcgMTguM2EuNy43IDAgMDAtLjYtLjNsLjMtMS41IDIuMSAyLjEtMS41LjNhLjcuNyAwIDAwLS4zLS42em0yLjkgMGwtMS4xLTEuMSA4LjQtOC40IDEgMS4xek0xOS44IDcuMWwtLjcuNy0yLjktMi45LjctLjdhMi4yIDIuMiAwIDAxMS41LS42IDIgMiAwIDAxMS40LjYgMi4xIDIuMSAwIDAxMCAyLjl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGluIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC4xIDE0TDE1IDEwLjNWNC42TDE2LjMgMkg3LjdMOSA0LjZ2NS43TDUuOSAxNGg1LjZ2OGgxdi04ek0xMCA1aDR2NWgtNHptNC43LTJsLS41IDFIOS44bC0uNS0xem0tNSA4aDQuNmwxLjYgMkg4LjF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGx1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTIuNWgtNy41VjIwaC0xdi03LjVINHYtMWg3LjVWNGgxdjcuNUgyMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wbHVzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNCAxMS41aDQuNXYxaC00LjVWMTdoLTF2LTQuNUg2Ljl2LTFoNC41VjdoMXptOS42LjVBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wcmVzZW50YXRpb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgNXYxMC42QTIuNCAyLjQgMCAwMDYuNCAxOGgzLjFsLTEuMSA0aDFsMS4xLTRoMi43bDEuMiA0aDFsLTEuMi00aDMuNWEyLjMgMi4zIDAgMDAyLjMtMi4zVjV6bTE1IDEwLjdhMS4zIDEuMyAwIDAxLTEuMyAxLjNINi40QTEuNCAxLjQgMCAwMTUgMTUuNlY2aDE0ek0yMSAzdjFIM1Yzem0tOSAxM2E0LjUgNC41IDAgMTAtNC41LTQuNUE0LjUgNC41IDAgMDAxMiAxNnptLS41LTcuOVYxMUg4LjZhMy40IDMuNCAwIDAxMi45LTIuOXptMSAzLjlWOGEzLjUgMy41IDAgMDEtLjUgNyAzLjQgMy40IDAgMDEtMy40LTN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcHJpbnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDkuNUExLjUgMS41IDAgMDAxOS41IDhIMTdWM0g3djVINC41QTEuNSAxLjUgMCAwMDMgOS41VjE2aDJ2M2gydjJoMTB2LTJoMnYtM2gyek04IDRoOHY0SDh6TTYgMTh2LTRoMXY0em0xMCAySDh2LTZoOHY2em0yLTJoLTF2LTRoMXY0em0yLTNoLTF2LTJINXYySDRWOS41YS41LjUgMCAwMS41LS41aDE1YS41LjUgMCAwMS41LjV6TTYgMTFoNHYxSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS45IDIxLjFMMTYgMTUuM2E4LjMgOC4zIDAgMDAyLTUuMyA4IDggMCAxMC04IDggOC4zIDguMyAwIDAwNS4zLTJsNS44IDUuOXpNMTAgMTdhNyA3IDAgMTE3LTcgNyA3IDAgMDEtNyA3eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNldHRpbmdzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiA3LjVhNC41IDQuNSAwIDEwNC41IDQuNUE0LjUgNC41IDAgMDAxMiA3LjV6bTAgOGEzLjUgMy41IDAgMTEzLjUtMy41IDMuNSAzLjUgMCAwMS0zLjUgMy41em05LjgtMS42QTEyLjMgMTIuMyAwIDAwMjIgMTJhMTIuMyAxMi4zIDAgMDAtLjItMS45bC0yLjEtLjNhOC43IDguNyAwIDAwLS43LTEuN2wxLjMtMS43YTguNyA4LjcgMCAwMC0yLjctMi43TDE1LjkgNWwtMS43LS43LS4zLTIuMUwxMiAybC0xLjkuMi0uMyAyLjEtMS43LjctMS43LTEuM2E4LjcgOC43IDAgMDAtMi43IDIuN0w1IDguMWE4LjcgOC43IDAgMDAtLjcgMS43bC0yLjEuM0ExMi4zIDEyLjMgMCAwMDIgMTJhMTIuMyAxMi4zIDAgMDAuMiAxLjlsMi4xLjNhOC43IDguNyAwIDAwLjcgMS43bC0xLjMgMS43YTguNyA4LjcgMCAwMDIuNyAyLjdMOC4xIDE5bDEuNy43LjMgMi4xIDEuOS4yIDEuOS0uMi4zLTIuMSAxLjctLjcgMS43IDEuM2E4LjcgOC43IDAgMDAyLjctMi43TDE5IDE1LjlhOC43IDguNyAwIDAwLjctMS43em0tMi45LS43bC0uMi43YTMuOSAzLjkgMCAwMS0uNiAxLjVsLS4zLjYuNC41LjggMS4xYTkuMyA5LjMgMCAwMS0xLjQgMS40bC0xLjEtLjgtLjUtLjQtLjYuM2EzLjkgMy45IDAgMDEtMS41LjZsLS43LjJ2LjdsLS4yIDEuM2gtMmwtLjItMS4zdi0uN2wtLjctLjJhMy45IDMuOSAwIDAxLTEuNS0uNmwtLjYtLjMtLjUuNC0xLjEuOEE5LjMgOS4zIDAgMDE1IDE3LjZsLjgtMS4xLjQtLjUtLjMtLjZhMy45IDMuOSAwIDAxLS42LTEuNWwtLjItLjdoLS43TDMuMSAxM2EzLjQgMy40IDAgMDEtLjEtMSAzLjQgMy40IDAgMDEuMS0xbDEuMy0uMmguN2wuMi0uN2EzLjkgMy45IDAgMDEuNi0xLjVsLjMtLjYtLjQtLjVMNSA2LjQgNi40IDVsMS4xLjguNS40LjYtLjNhMy45IDMuOSAwIDAxMS41LS42bC43LS4ydi0uN2wuMi0xLjNoMmwuMiAxLjN2LjdsLjcuMmEzLjkgMy45IDAgMDExLjUuNmwuNi4zLjUtLjQgMS4xLS44QTkuMyA5LjMgMCAwMTE5IDYuNGwtLjggMS4xLS40LjUuMy42YTMuOSAzLjkgMCAwMS42IDEuNWwuMi43aC43bDEuMy4yYTMuNCAzLjQgMCAwMS4xIDEgMy40IDMuNCAwIDAxLS4xIDFsLTEuMy4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNoYXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAwMC0yIDFsLTcuNi0zLjRBMS4zIDEuMyAwIDAwOCAxMmExLjMgMS4zIDAgMDAtLjEtLjZMMTUuNSA4YTIuNSAyLjUgMCAxMC0uNS0xLjUgMS4zIDEuMyAwIDAwLjEuNmwtNy42IDMuNGEyLjUgMi41IDAgMTAwIDNsNy42IDMuNGExLjMgMS4zIDAgMDAtLjEuNiAyLjUgMi41IDAgMTAyLjUtMi41em0wLTEwQTEuNSAxLjUgMCAwMTE5IDYuNWExLjUgMS41IDAgMDEtMyAwQTEuNSAxLjUgMCAwMTE3LjUgNXptLTEyIDguNWExLjUgMS41IDAgMDEwLTMgMS41IDEuNSAwIDAxMCAzem0xMiA1LjVhMS41IDEuNSAwIDExMS41LTEuNSAxLjUgMS41IDAgMDEtMS41IDEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLWZ1bGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEuN0w5LjUgOS4ySDEuNkw4IDEzLjlsLTIuNCA3LjYgNi40LTQuNyA2LjQgNC43LTIuNC03LjYgNi40LTQuN2gtNy45TDEyIDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDQuOWwxLjUgNC42LjIuN2g1LjdsLTQgMi45LS42LjQuMi43IDEuNSA0LjctMy45LTIuOS0uNi0uNC0uNi40LTMuOSAyLjlMOSAxNC4ybC4yLS43LS42LS40LTQtMi45aDUuN2wuMi0uN0wxMiA0LjltMC0zLjJMOS41IDkuMkgxLjZMOCAxMy45bC0yLjQgNy42IDYuNC00LjcgNi40IDQuNy0yLjQtNy42IDYuNC00LjdoLTcuOUwxMiAxLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVhbS1kaWdpdGFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNjQ4IDI0SC4zNTJBLjM1My4zNTMgMCAwMTAgMjMuNjQ4Vi4zNTJDMCAuMTU4LjE1OCAwIC4zNTIgMGgyMy4yOTZjLjE5NCAwIC4zNTIuMTU4LjM1Mi4zNTJ2MjMuMjk2YS4zNTMuMzUzIDAgMDEtLjM1Mi4zNTJ6TTUuODE0IDExLjc5MmExLjU5NiAxLjU5NiAwIDEwMC0zLjE5MiAxLjU5NiAxLjU5NiAwIDAwMCAzLjE5MnpNMTAgMTguOTk0VjE5aDQuNDE4QzE5LjEzIDE5IDIwIDE2LjY4NSAyMCAxMi4yNTMgMjAgNy45MyAxOC45OTUgNiAxNC40MTggNkgxMHYxMi45OTR6bTQuNDE4LTEwLjcwMmMyLjU4NiAwIDIuODM4IDEuMTEgMi44MzggMy45NTUgMCAyLjg5LS4yNTIgNC40NTUtMi44MzggNC40NTVoLTEuNzU2di04LjQxaDEuNzU2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVsZXBob25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01IDNoLjE4TTIwIDExLjU2QTcuNTkgNy41OSAwIDAwMTIuNDggNGgtLjA2YS40OS40OSAwIDAwLS40OS40OC41LjUgMCAwMC40OS41MUE2LjYxIDYuNjEgMCAwMTE5IDExLjYyYS41MS41MSAwIDAwLjU0LjQ2LjQ5LjQ5IDAgMDAuNDUtLjQ2cy4wMS0uMDQuMDEtLjA2eiIvPjxwYXRoIGQ9Ik0xNi45MyAxMS42OGE0LjUgNC41IDAgMDAtNC40OC00LjQ4LjUxLjUxIDAgMDAwIDEgMy41IDMuNSAwIDAxMy40OSAzLjQ5LjUuNSAwIDAwLjUuNS41MS41MSAwIDAwLjUtLjUxek0xNS42OCAyMS4xOWExMy4zMiAxMy4zMiAwIDAxLTEyLjgtMTMuMS45Mi45MiAwIDAxLjYyLS44OGMxLjc0LS41NiA0LTEgNC43LjA2YTcuMzkgNy4zOSAwIDAxLjg1IDIuOTF2LjIxYTEuNDggMS40OCAwIDAxLS43IDEuNjguODEuODEgMCAwMC0uNDkuNzEgMTIuNTUgMTIuNTUgMCAwMDMuMzggMy41MS44OC44OCAwIDAwLjQ4LS41NmMuMDktLjUzLjU4LTEgMS43LS44NWguMjFhNyA3IDAgMDEyLjg1Ljg3YzEgLjcyLjYyIDMgLjA5IDQuNzJhMSAxIDAgMDEtLjg5Ljcyek02LjU1IDcuNTJhOS41IDkuNSAwIDAwLTIuNzguNTUgMTIuNDEgMTIuNDEgMCAwMDExLjkxIDEyLjIyYy43My0yLjI2LjY2LTMuNTQuMzEtMy43OGE2LjY2IDYuNjYgMCAwMC0yLjQ2LS43MmgtLjIyYy0uMzIgMC0uNjUgMC0uNjguMTJhMS45IDEuOSAwIDAxLTEuMjcgMS4zNGwtLjIxLjA3LS4xNS0uMTVhMTMuNDQgMTMuNDQgMCAwMS0zLjktNEw3IDEzYTEuNjggMS42OCAwIDAxMS0xLjdjLjEyLS4wNy4zMy0uMTguMjUtLjc1di0uMjJhNi44NCA2Ljg0IDAgMDAtLjctMi41NGMtLjItLjE4LS41NS0uMjctMS0uMjd6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10b29sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03LjcgNWEzLjEgMy4xIDAgMDExLjcuNSAzLjEgMy4xIDAgMDExLjYgMyAzIDMgMCAwMC44IDIuNGw2LjMgNi4zYTEgMSAwIDAxLjIgMS4zIDEgMSAwIDAxLS44LjUuOS45IDAgMDEtLjctLjNsLTYuNC02LjRhMyAzIDAgMDAtMi4xLS44aC0uNmEyLjggMi44IDAgMDEtMi4yLTFoMi43VjYuNEg1LjFhMi43IDIuNyAwIDAxMS4xLTFBMi44IDIuOCAwIDAxNy43IDVtMC0xYTQuNiA0LjYgMCAwMC0yIC41IDQuMSA0LjEgMCAwMC0yLjEgMi45aDMuNnYyLjFIMy43YTUuNCA1LjQgMCAwMDEgMS44IDQuNCA0LjQgMCAwMDMgMS4yaC42YTIuNCAyLjQgMCAwMTEuNC41bDYuNCA2LjRhMiAyIDAgMDAxLjQuNiAxLjkgMS45IDAgMDAxLjYtLjkgMiAyIDAgMDAtLjMtMi42bC02LjMtNi4zYTEuOCAxLjggMCAwMS0uNS0xLjYgNC40IDQuNCAwIDAwLTItNEE0LjYgNC42IDAgMDA3LjcgNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10d2l0dGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNOC4wOCAyMGExMC45MyAxMC45MyAwIDAwMTEtMTF2LS41YTggOCAwIDAwMS45Mi0yIDcuODUgNy44NSAwIDAxLTIuMjIuNjFBMy44OSAzLjg5IDAgMDAyMC40OCA1YTggOCAwIDAxLTIuNDguOTEgMy44NyAzLjg3IDAgMDAtNi41OSAzLjUyIDExIDExIDAgMDEtOC00IDMuODUgMy44NSAwIDAwMS4xOSA1LjE2IDMuNzYgMy43NiAwIDAxLTEuNzUtLjQ4QTMuODcgMy44NyAwIDAwNiAxMy45MWEzLjczIDMuNzMgMCAwMS0xIC4xNCA0LjMgNC4zIDAgMDEtLjczLS4wNSAzLjg3IDMuODcgMCAwMDMuNjEgMi42OCA3LjczIDcuNzMgMCAwMS00LjggMS42NiA3IDcgMCAwMS0uOTItLjA2QTEwLjkgMTAuOSAwIDAwOC4wOCAyMCIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdHdpdHRlci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xOS41IDIyaC0xNUEyLjUgMi41IDAgMDEyIDE5LjV2LTE1QTIuNSAyLjUgMCAwMTQuNSAyaDE1QTIuNSAyLjUgMCAwMTIyIDQuNXYxNWEyLjUgMi41IDAgMDEtMi41IDIuNXptLTkuODItNC45MkE3LjI0IDcuMjQgMCAwMDE3IDkuNzl2LS4zM2E1LjIyIDUuMjIgMCAwMDEuMjgtMS4zMyA1LjIyIDUuMjIgMCAwMS0xLjQ4LjQgMi41NiAyLjU2IDAgMDAxLjE0LTEuNDIgNC45MyA0LjkzIDAgMDEtMS42NC42MiAyLjUzIDIuNTMgMCAwMC0xLjg2LS44MSAyLjU3IDIuNTcgMCAwMC0yLjU3IDIuNTdjLjAwMy4xOTUuMDI2LjM5LjA3LjU4YTcuMjYgNy4yNiAwIDAxLTUuMzItMi42OCAyLjU5IDIuNTkgMCAwMC44IDMuNDMgMi43OCAyLjc4IDAgMDEtMS4xNi0uMzIgMi41NyAyLjU3IDAgMDAyLjA1IDIuNTIgMi40NiAyLjQ2IDAgMDEtMS4xNS4wNCAyLjU1IDIuNTUgMCAwMDIuMzkgMS43OEE1LjEzIDUuMTMgMCAwMTYuMzcgMTZhNi4wOCA2LjA4IDAgMDEtLjYxIDAgNy4yMyA3LjIzIDAgMDAzLjkyIDEuMTR2LS4wNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVubG9ja2VkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi41IDEySDE2VjZhNCA0IDAgMDAtOCAwdjNoMVY2YTMgMyAwIDAxNiAwdjZINy41YTEuMSAxLjEgMCAwMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMDA3LjUgMjFoOWExLjEgMS4xIDAgMDAxLjEtMS4xdi02LjhhMS4xIDEuMSAwIDAwLTEuMS0xLjF6bS4xIDcuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVwbG9hZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC40IDcuM2wtLjctLjdMMTIgMi4zbDQuMyA0LjMtLjcuNy0zLjEtMy4xdjkuM2gtMVY0LjJ6TTE5IDEydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVzZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEzYTQgNCAwIDAwNC00VjZhNCA0IDAgMDAtOCAwdjNhNCA0IDAgMDA0IDR6TTkgNmEzIDMgMCAwMTYgMHYzYTMgMyAwIDAxLTYgMHptMTEgMTZoLTFhNyA3IDAgMDAtMTQgMEg0YTggOCAwIDAxMTYgMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC12aWRlbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNSA3LjNWNkExLjUgMS41IDAgMDAxNiA0LjVINS41QTEuNSAxLjUgMCAwMDQgNnY4YTEuNSAxLjUgMCAwMDEuNSAxLjVoMy40TDcuNCAyMWgxbDEuNi01LjVoMS44bDEuNiA1LjVoMWwtMS42LTUuNUgxNmExLjUgMS41IDAgMDAxLjUtMS41di0xLjNsNCAxLjVWNS44em0zIDUuNWwtNC0xLjVWMTRhLjUuNSAwIDAxLS41LjVINS41QS41LjUgMCAwMTUgMTRWNmEuNS41IDAgMDEuNS0uNUgxNmEuNS41IDAgMDEuNS41djIuN2w0LTEuNXpNMiA4aDF2NEgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjUgMTdoLTFWMmgxem0wIDNoLTF2MmgxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmctY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNS02LjhWNS43aDEuMnY4LjV6bS0uMSAyLjNoMS4ydjEuOGgtMS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdoYXRzYXBwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuMDkgNC42M2ExMCAxMCAwIDAwLTE1LjY4IDEyTDIgMjEuOGw1LjI4LTEuMzhBMTAgMTAgMCAwMDEyIDIxLjYzYTEwIDEwIDAgMDA3LjA1LTE3aC4wNHpNMTIgMjBhOC4xOCA4LjE4IDAgMDEtNC4yMS0xLjE2bC0uMzEtLjE4LTMuMTMuODMuODQtMy4wNi0uMTktLjM2QTguMjggOC4yOCAwIDExMTIgMjB6bTQuNTQtNi4yYy0uMjUtLjEzLTEuNDctLjczLTEuNy0uODEtLjIzLS4wOC0uMzktLjEzLS41Ni4xMi0uMjQ2LjM0Ny0uNTEuNjgtLjc5IDEtLjE0LjE2LS4yOS4xOC0uNTQuMDZhNi45MiA2LjkyIDAgMDEtMi0xLjIzIDcuMjcgNy4yNyAwIDAxLTEuMzgtMS43M2MtLjE1LS4yNSAwLS4zOC4xMS0uNTFzLjI1LS4yOS4zNy0uNDNhMS41MSAxLjUxIDAgMDAuMjUtLjQyLjQ2LjQ2IDAgMDAwLS40M2MtLjA0LS4yLS41NC0xLjQyLS43NS0xLjkyLS4yMS0uNS0uNC0uNDItLjU2LS40M2gtLjQ3YTEgMSAwIDAwLS42Ny4zMUEyLjgxIDIuODEgMCAwMDcgOS40NSA0LjczIDQuNzMgMCAwMDggMTJhMTEgMTEgMCAwMDQuMjUgMy43NmMuNDY0LjIuOTM4LjM3OCAxLjQyLjUzYTMuMjggMy4yOCAwIDAwMS41Ni4wOSAyLjU0IDIuNTQgMCAwMDEuNjgtMS4xOCAyLjA5IDIuMDkgMCAwMC4xNS0xLjJjLS4wNi0uMDctLjIzLS4xMy0uNDgtLjI1bC0uMDQuMDV6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13aGF0c2FwcC1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xNiA4LjA3YTUuMzQgNS4zNCAwIDAwLTkuMTEgMy43NyA1LjI4IDUuMjggMCAwMC44MiAyLjg0bC4xMi4yLS41MyAyIDItLjUzLjIuMTFjLjgyLjQ5IDEuNzU2Ljc1IDIuNzEuNzVBNS4zNCA1LjM0IDAgMDAxNiA4LjA3em0tLjgzIDUuODNhMS42NiAxLjY2IDAgMDEtMS4wOC43NiAyLjIzIDIuMjMgMCAwMS0xLS4wNmMtLjIzLS4wOC0uNTMtLjE4LS45MS0uMzRhNy4xNiA3LjE2IDAgMDEtMi43OC0yLjQyIDMuMTMgMy4xMyAwIDAxLS42Ni0xLjY2IDEuODMgMS44MyAwIDAxLjU2LTEuMzQuNTkuNTkgMCAwMS40My0uMkgxMGMuMSAwIC4yMyAwIC4zNi4yNy4xMy4yNy40NSAxLjExLjQ5IDEuMTlhLjMuMyAwIDAxMCAuMjggMS4yIDEuMiAwIDAxLS4xNi4yN2MtLjA4LjEtLjE3LjIxLS4yNC4yOC0uMDcuMDctLjE3LjE3LS4wNy4zMy4yMzkuNDEzLjU0Ljc4Ny44OSAxLjExLjM4LjM0LjgxNi42MTIgMS4yOS44LjE2LjA4LjI1LjA2LjM0IDAgLjA5LS4wNi40LS40Ny41MS0uNjMuMTEtLjE2LjIxLS4xNC4zNi0uMDguMTUuMDYuOTQuNDQgMS4xLjUyLjE2LjA4LjI2LjEyLjMuMTlhMS4zNiAxLjM2IDAgMDEtLjAzLjczaC4wM3oiLz48cGF0aCBkPSJNMjEgNy4wOWE4LjI2IDguMjYgMCAwMC0uMDktMS4xNSAzLjQ5IDMuNDkgMCAwMC0xLjg1LTIuNTEgMy44OSAzLjg5IDAgMDAtMS0uMzJBOC4zNiA4LjM2IDAgMDAxNi45MSAzSDcuMDlhOC4yNiA4LjI2IDAgMDAtMS4xNS4wOUEzLjQ5IDMuNDkgMCAwMDMuNDMgNWEzLjg5IDMuODkgMCAwMC0uMzIgMUE4LjM2IDguMzYgMCAwMDMgNy4wOXY5LjgyYy4wMDMuMzg1LjAzMy43Ny4wOSAxLjE1QTMuNDkgMy40OSAwIDAwNSAyMC41N2EzLjg5IDMuODkgMCAwMDEgLjMyYy4zODQuMDYuNzcxLjA5NCAxLjE2LjFoOS44MmE4LjI2IDguMjYgMCAwMDEuMTUtLjA5IDMuNDkgMy40OSAwIDAwMi41MS0xLjg1IDMuODkgMy44OSAwIDAwLjMyLTEgOC4zNiA4LjM2IDAgMDAuMS0xLjE2VjcuNTdjLS4wNi0uMS0uMDYtLjMxLS4wNi0uNDh6bS04LjggMTEuMTdhNi4zOSA2LjM5IDAgMDEtMy4wNi0uNzhsLTMuNDEuODkuOTItMy4zMmE2LjMzIDYuMzMgMCAwMS0uODYtMy4yMSA2LjQxIDYuNDEgMCAwMTExLTQuNTMgNi4zMyA2LjMzIDAgMDExLjg4IDQuNTQgNi40MiA2LjQyIDAgMDEtNi40NyA2LjQxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQteW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIxLjU2IDcuMmEyLjUgMi41IDAgMDAtMS43Ni0xLjc3QzE4LjI0IDUgMTIgNSAxMiA1cy02LjI0IDAtNy44LjQyQTIuNSAyLjUgMCAwMDIuNDQgNy4yIDI1LjcyIDI1LjcyIDAgMDAyIDEyYy0uMDEgMS42MS4xMyAzLjIxNy40MiA0LjhhMi41IDIuNSAwIDAwMS43OCAxLjc3QzUuNzYgMTkgMTIgMTkgMTIgMTlzNi4yNCAwIDcuOC0uNDJhMi41IDIuNSAwIDAwMS43Ni0xLjc3QTI1LjcyIDI1LjcyIDAgMDAyMiAxMmEyNS43MiAyNS43MiAwIDAwLS40NC00Ljh6TTEwIDE1VjlsNS4xOSAzTDEwIDE1eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtem9vbS1pbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNCA5LjVoMy4zdjFoLTMuM3YzLjJoLTF2LTMuMkg2LjJ2LTFoMy4yVjYuMmgxem0xMC43IDEyLjRMMTUuMyAxNmE4LjMgOC4zIDAgMDEtNS4zIDIgOCA4IDAgMTE4LTggOC4zIDguMyAwIDAxLTIgNS4zbDUuOSA1Ljh6TTE3IDEwYTcgNyAwIDEwLTcgNyA3IDcgMCAwMDctN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC16b29tLW91dCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yIDkuNWg3LjV2MUg2LjJ6bTE0LjkgMTIuNEwxNS4zIDE2YTguMyA4LjMgMCAwMS01LjMgMiA4IDggMCAxMTgtOCA4LjMgOC4zIDAgMDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMTAtNyA3IDcgNyAwIDAwNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48L2RlZnM+PC9zdmc+';

var propTypes$7 = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.bool
};
var defaultProps$6 = {
  color: '',
  size: '',
  icon: '',
  padding: false
};

var Icon = function Icon(_ref) {
  var _classNames;

  var color = _ref.color,
      size = _ref.size,
      icon = _ref.icon,
      className = _ref.className,
      padding = _ref.padding,
      attributes = _objectWithoutPropertiesLoose(_ref, ["color", "size", "icon", "className", "padding"]);

  var classes = classnames('icon', className, (_classNames = {}, _classNames["icon-" + color] = color, _classNames["icon-" + size] = size, _classNames['icon-padded'] = padding, _classNames), size);
  return React.createElement("svg", _extends({
    className: classes
  }, attributes), React.createElement("use", {
    xlinkHref: iconSprite + "#" + icon
  }));
};

Icon.propTypes = propTypes$7;
Icon.defaultProps = defaultProps$6;

var propTypes$8 = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente HeaderBrand */
  className: PropTypes.string,

  /** Da usare per la sovrascrittura di classi predefinite */
  cssModule: PropTypes.object,

  /** Da usare con il componente Header Nav in versione "responsive" */
  responsive: PropTypes.bool,

  /** Da utilizzare per specificare URL risorsa esterna. */
  href: PropTypes.string,

  /** Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center.  */
  iconName: PropTypes.string,

  /** Elementi React da renderizzare al proprio interno. */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
var defaultProps$7 = {
  tag: 'a',
  responsive: false
};

var HeaderBrand =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderBrand, _PureComponent);

  function HeaderBrand() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderBrand.prototype;

  _proto.addChildClasses = function addChildClasses(child, i) {
    // convention here: first item is the main title, while others subtext
    var className = classnames(child.props.className, 'no_toc', {
      'd-none d-md-block': i
    } // subtext is anything but first element
    );
    var props = {
      className: className
    };
    return React.cloneElement(child, props);
  };

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        href = _this$props.href,
        iconName = _this$props.iconName,
        children = _this$props.children,
        responsive = _this$props.responsive,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "href", "iconName", "children", "responsive"]);

    var type = this.context.type;

    if (type !== CENTER) {
      var classes = classnames('d-lg-block', className, {
        'd-none': !responsive
      });
      return React.createElement(NavbarBrand, _extends({
        className: classes,
        href: href
      }, attributes), children);
    }

    return React.createElement("div", {
      className: "it-brand-wrapper"
    }, React.createElement("a", {
      href: href
    }, iconName && React.createElement(Icon, {
      icon: iconName
    }), React.createElement("div", {
      className: "it-brand-text"
    }, React.Children.map(children, function (child, i) {
      return _this.addChildClasses(child, i);
    }))));
  };

  return HeaderBrand;
}(PureComponent);

_defineProperty$1(HeaderBrand, "propTypes", propTypes$8);

_defineProperty$1(HeaderBrand, "defaultProps", defaultProps$7);

_defineProperty$1(HeaderBrand, "contextType", HeaderContext);

var propTypes$9 = {
  /** Classi addizionali per il componente HeaderContent */
  className: PropTypes.string,

  /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
  megamenu: PropTypes.bool,

  /** Parametro per il controllo responsive del componente: valori Bootstrap standard sono "sm", "md", "lg", "xl" */
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
var defaultProps$8 = {};

var HeaderContent =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderContent, _PureComponent);

  function HeaderContent() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        megamenu = _this$props.megamenu,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "megamenu"]);

    var type = this.context.type;
    var classes = classnames(className, {
      'it-header-slim-wrapper-content': type === SLIM,
      'it-header-center-content-wrapper': type === CENTER,
      navbar: type === NAVBAR,
      'has-megamenu': megamenu
    });
    var Content = type === NAVBAR ? React.createElement(Navbar, _extends({
      className: classes
    }, attributes)) : React.createElement("div", _extends({
      className: classes
    }, attributes));
    return React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "row"
    }, React.createElement("div", {
      className: "col-12"
    }, Content)));
  };

  return HeaderContent;
}(PureComponent);

_defineProperty$1(HeaderContent, "propTypes", propTypes$9);

_defineProperty$1(HeaderContent, "defaultProps", defaultProps$8);

_defineProperty$1(HeaderContent, "contextType", HeaderContext);

var propTypes$a = {
  /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
  className: PropTypes.string
};
var defaultProps$9 = {};

var HeaderLinkZone = function HeaderLinkZone(_ref) {
  var className = _ref.className,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className"]);

  var classes = classnames(className);
  return React.createElement("div", {
    className: "nav-mobile"
  }, React.createElement("nav", _extends({
    className: classes
  }, attributes)));
};

HeaderLinkZone.propTypes = propTypes$a;
HeaderLinkZone.defaultProps = defaultProps$9;

var propTypes$b = {
  /** Classi addizionali per il componente HeaderRightZone */
  className: PropTypes.string
};
var defaultProps$a = {};

var HeaderRightZone =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderRightZone, _PureComponent);

  function HeaderRightZone() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderRightZone.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var type = this.context.type;
    var classes = classnames(className, {
      // BI >= 1.3.6
      'it-header-slim-right-zone': type === SLIM,
      // BI < 1.3.6
      'header-slim-right-zone': type === SLIM,
      'it-right-zone': type !== SLIM
    });
    return React.createElement("div", _extends({
      className: classes
    }, attributes));
  };

  return HeaderRightZone;
}(PureComponent);

_defineProperty$1(HeaderRightZone, "propTypes", propTypes$b);

_defineProperty$1(HeaderRightZone, "defaultProps", defaultProps$a);

_defineProperty$1(HeaderRightZone, "contextType", HeaderContext);

var propTypes$c = {
  /** Classi addizionali per il componente HeaderSearch */
  className: PropTypes.string,

  /** Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo */
  label: PropTypes.string,

  /** Nome dell'icona da utilizzare */
  iconName: PropTypes.string,

  /** Indirizzo di indirizzamento al click dell'icona */
  href: PropTypes.string
};
var defaultProps$b = {
  iconName: 'it-search'
};

var HeaderSearch = function HeaderSearch(_ref) {
  var className = _ref.className,
      label = _ref.label,
      href = _ref.href,
      iconName = _ref.iconName,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "label", "href", "iconName"]);

  var classes = classnames('it-search-wrapper', className);
  return React.createElement("div", _extends({
    className: classes
  }, attributes), label && React.createElement("span", {
    className: "d-none d-md-block"
  }, label), React.createElement("a", {
    className: "search-link rounded-icon",
    "aria-label": label,
    href: href
  }, React.createElement(Icon, {
    icon: iconName
  })));
};

HeaderSearch.propTypes = propTypes$c;
HeaderSearch.defaultProps = defaultProps$b;

var propTypes$d = {
  /** Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno. */
  className: PropTypes.string,

  /** Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta */
  label: PropTypes.string,

  /** Utilizzato per elencare i social da mostrare */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
var defaultProps$c = {};

var HeaderSocialsZone = function HeaderSocialsZone(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      attributes = _objectWithoutPropertiesLoose(_ref, ["className", "children", "label"]);

  var classes = classnames('it-socials d-none d-md-flex', className);
  return React.createElement("div", _extends({
    className: classes
  }, attributes), label && React.createElement("span", null, label), children);
};

HeaderSocialsZone.propTypes = propTypes$d;
HeaderSocialsZone.defaultProps = defaultProps$c;

var propTypes$e = {
  /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  tag: PropTypes.string,

  /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
   * Se fornito questo sovrascriverà il valore di default.
   */
  type: PropTypes.string,

  /** Classi addizionali per il componente HeaderToggler */
  className: PropTypes.string
};
var defaultProps$d = {};

var HeaderToggler =
/*#__PURE__*/
function (_PureComponent) {
  _inheritsLoose(HeaderToggler, _PureComponent);

  function HeaderToggler() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HeaderToggler.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        tag = _this$props.tag,
        type = _this$props.type,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "type"]);

    var HeaderType = this.context.type;
    var BUTTON = 'button';
    var defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
    var defaultType = HeaderType === SLIM ? '' : BUTTON;
    var classes = classnames({
      'it-opener d-lg-none': HeaderType === SLIM,
      'custom-navbar-toggler': HeaderType === NAVBAR
    }, className);
    return React.createElement(NavbarToggler, _extends({
      className: classes
    }, attributes, {
      tag: tag || defaultTag,
      type: type || defaultType,
      href: "#"
    }));
  };

  return HeaderToggler;
}(PureComponent);

_defineProperty$1(HeaderToggler, "propTypes", propTypes$e);

_defineProperty$1(HeaderToggler, "defaultProps", defaultProps$d);

_defineProperty$1(HeaderToggler, "contextType", HeaderContext);

function Hero(props) {
  return React.createElement(Jumbotron, props);
}
Hero.defaultProps = Jumbotron.defaultProps;
Hero.propTypes = Jumbotron.propTypes;

var mapToCssModules = Util.mapToCssModules,
    deprecated = Util.deprecated,
    warnOnce = Util.warnOnce;
var propTypes$f = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  infoText: PropTypes.string,
  normalized: PropTypes.bool,
  bsSize: PropTypes.string,
  state: deprecated(PropTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  "static": deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$e = {
  type: 'text'
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input() {
    var _this;

    _this = _React$Component.call(this) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "toggleFocusLabel", function () {
      _this.setState({
        isFocused: true
      });
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "toggleBlurLabel", function (e) {
      if (e.target.value === '') {
        _this.setState({
          isFocused: !_this.state.isFocused
        });
      }
    });

    _this.state = {
      isFocused: false,
      hidden: true,
      icon: true
    };
    _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized$1(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.toggleShow = function toggleShow() {
    this.setState({
      hidden: !this.state.hidden,
      icon: !this.state.icon
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        state = _this$props.state,
        tag = _this$props.tag,
        addon = _this$props.addon,
        staticInput = _this$props["static"],
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        label = _this$props.label,
        infoText = _this$props.infoText,
        placeholder = _this$props.placeholder,
        normalized = _this$props.normalized,
        value = _this$props.value,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "state", "tag", "addon", "static", "plaintext", "innerRef", "label", "infoText", "placeholder", "normalized", "value"]);

    var _this$props2 = this.props,
        bsSize = _this$props2.bsSize,
        valid = _this$props2.valid,
        invalid = _this$props2.invalid;
    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';
    var infoTextControlClass = 'form-text text-muted';

    if (plaintext || staticInput) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'p';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      }
      /* Causes a regression with `bootstrap-italia`
            else {
                formControlClass = 'form-check-input';
            }
            */

    }

    if (valid || invalid) {
      infoTextControlClass = null;
    }

    if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
      if (state === 'danger') {
        invalid = true;
      } else if (state === 'success') {
        valid = true;
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);
    var wrapperClass = mapToCssModules(classnames(className, 'form-group'), cssModule);
    var infoTextClass = mapToCssModules(classnames(className, valid ? 'valid-feedback' : false, invalid ? 'invalid-feedback' : false, infoTextControlClass));

    if (Tag === 'input' || typeof tag !== 'string') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    if (placeholder || value) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        id: this.props.id,
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        placeholder: this.props.placeholder,
        value: this.props.value
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: "active"
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (attributes.type === 'password') {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        type: this.state.hidden ? 'password' : 'text',
        className: this.state.isFocused ? 'form-control input-password focus--mouse' : 'form-control input-password',
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        id: this.props.id,
        placeholder: this.props.placeholder,
        value: this.props.value
      })), React.createElement("span", {
        className: "password-icon",
        "aria-hidden": "true"
      }, React.createElement("svg", {
        className: "password-icon-visible icon icon-sm",
        onClick: this.toggleShow
      }, React.createElement("use", {
        xlinkHref: "/svg/sprite.svg#it-password-" + (this.state.icon ? 'visible' : 'invisible')
      }))), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? 'active' : ''
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (normalized) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        className: this.state.isFocused ? 'form-control-plaintext focus--mouse' : 'form-control-plaintext',
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        id: this.props.id,
        value: this.props.value,
        readOnly: true
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? 'active' : ''
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    if (label || infoText) {
      return React.createElement("div", {
        className: wrapperClass
      }, React.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes,
        id: this.props.id,
        onFocus: this.toggleFocusLabel,
        onBlur: function onBlur(e) {
          return _this2.toggleBlurLabel(e);
        },
        value: this.props.value
      })), React.createElement("label", {
        htmlFor: this.props.id,
        className: this.state.isFocused ? 'active' : ''
      }, this.props.label), React.createElement("small", {
        className: infoTextClass
      }, this.props.infoText));
    }

    return React.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Input;
}(React.Component);

Input.propTypes = propTypes$f;
Input.defaultProps = defaultProps$e;

var propTypes$g = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  multiline: PropTypes.bool,
  sublist: PropTypes.bool
};
var defaultProps$f = {
  tag: 'div'
};

var LinkList = function LinkList(props) {
  var className = props.className,
      Tag = props.tag,
      multiline = props.multiline,
      sublist = props.sublist,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "multiline", "sublist"]);

  var wrapperClasses = classnames(multiline ? 'multiline' : false, 'link-list-wrapper');
  var classes = classnames(className, sublist ? 'link-sublist' : 'link-list');

  if (sublist) {
    return React.createElement("ul", _extends({}, attributes, {
      className: classes
    }));
  }

  return React.createElement(Tag, {
    className: wrapperClasses
  }, React.createElement("ul", _extends({}, attributes, {
    className: classes
  })));
};

LinkList.propTypes = propTypes$g;
LinkList.defaultProps = defaultProps$f;

var propTypes$h = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  header: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any,
  href: PropTypes.string,
  size: PropTypes.string
};
var defaultProps$g = {
  tag: 'a'
};

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};

var LinkListItem = function LinkListItem(props) {
  var className = props.className,
      active = props.active,
      disabled = props.disabled,
      header = props.header,
      divider = props.divider,
      href = props.href,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "active", "disabled", "header", "divider", "href", "size"]);

  var Tag = props.tag;
  var classes = classnames(className, {
    active: active,
    disabled: disabled,
    header: header,
    divider: divider,
    size: size
  }, 'list-item'); // Prevent click event when disabled.

  if (disabled) {
    attributes.onClick = handleDisabledOnClick;
  }

  if (header) {
    Tag = 'h3';
  } else if (divider) {
    Tag = 'span';
  }

  return React.createElement("li", null, header && href ? React.createElement(Tag, null, React.createElement("a", _extends({
    // eslint-disable-line jsx-a11y/anchor-has-content
    href: href || '#'
  }, attributes, {
    className: classes
  }))) : React.createElement(Tag, _extends({
    href: href || '#'
  }, attributes, {
    className: classes
  })));
};

LinkListItem.propTypes = propTypes$h;
LinkListItem.defaultProps = defaultProps$g;

var propTypes$i = {
  /** Renderizza i componenti NavItem al suo interno come tab. */
  tabs: PropTypes.bool,

  /** Renderizza i componenti NavItem al suo interno come pills. */
  pills: PropTypes.bool,

  /** Renderizza i componenti NavItem al suo interno come tab. */
  card: PropTypes.bool,

  /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
  justified: PropTypes.bool,

  /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
  fill: PropTypes.bool,

  /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
  horizontal: PropTypes.string,

  /** Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader. */
  navbar: PropTypes.bool,

  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$h = {
  tag: 'ul',
  vertical: false
};

var Nav = function Nav(_ref) {
  var attributes = _extends({}, _ref);

  return React.createElement(Nav$1, attributes);
};

Nav.propTypes = propTypes$i;
Nav.defaultProps = defaultProps$h;

var propTypes$j = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  'aria-label': PropTypes.string
};
var defaultProps$i = {
  tag: 'nav',
  'aria-label': 'pagination'
};

var Pager = function Pager(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      label = props['aria-label'];
  var classes = classnames(className, 'pagination-wrapper');
  return React.createElement(Tag, {
    className: classes,
    "aria-label": label
  }, children);
};

Pager.propTypes = propTypes$j;
Pager.defaultProps = defaultProps$i;

var propTypes$k = {
  className: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var defaultProps$j = {
  tag: 'ul'
};

var PagerList = function PagerList(props) {
  var _classNames;

  var className = props.className,
      size = props.size,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "size", "tag"]);

  var listClasses = classnames(className, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames));
  return React.createElement(Tag, _extends({}, attributes, {
    className: listClasses
  }));
};

PagerList.propTypes = propTypes$k;
PagerList.defaultProps = defaultProps$j;

var PasswordInput =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PasswordInput, _Component);

  function PasswordInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty$1(_assertThisInitialized$1(_this), "state", {
      showPassword: false
    });

    _defineProperty$1(_assertThisInitialized$1(_this), "onPasswordToggle", function () {
      _this.setState(function (prevState) {
        return {
          showPassword: !prevState.showPassword
        };
      });
    });

    return _this;
  }

  var _proto = PasswordInput.prototype;

  _proto.render = function render() {
    var showPassword = this.state.showPassword;

    var _this$props = this.props,
        type = _this$props.type,
        rest = _objectWithoutPropertiesLoose(_this$props, ["type"]);

    var classNames = ['btn-eye', showPassword ? 'eye-off' : 'eye-on'].join(' ');
    return React.createElement(Fragment, null, React.createElement("span", {
      className: classNames,
      onClick: this.onPasswordToggle
    }), React.createElement(Input, _extends({}, rest, {
      type: showPassword ? 'text' : type
    })));
  };

  return PasswordInput;
}(Component);

_defineProperty$1(PasswordInput, "defaultProps", {
  type: 'password'
});

PasswordInput.propTypes = _extends({}, Input.propTypes);

var defaultSteps = [{
  score: 0,
  label: 'inserisci almeno 8 caratteri e una lettera maiuscola',
  className: 'danger'
}, {
  score: 1,
  label: 'password troppo debole',
  className: 'danger'
}, {
  score: 25,
  label: 'password debole',
  className: 'danger'
}, {
  score: 50,
  label: 'password sicura',
  className: 'warning'
}, {
  score: 75,
  label: 'password molto sicura',
  className: 'success'
}];

var PasswordMeter =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(PasswordMeter, _Component);

  function PasswordMeter() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = PasswordMeter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        steps = _this$props.steps,
        score = _this$props.score;
    var currentStep = steps.filter(function (step) {
      return step.score <= score;
    }).reduce(function (acc, current) {
      return acc.score > current.score ? acc : current;
    });
    var label = currentStep.label,
        className = currentStep.className;
    return React.createElement("div", {
      className: "psw-wrapper"
    }, React.createElement("span", {
      className: "psw-text text-" + className + " " + className
    }, label), React.createElement("div", {
      className: "progress rounded-0 position-relative psw-meter"
    }, React.createElement("div", {
      className: "row position-absolute w-100 m-0"
    }, React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    }), React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    }), React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    }), React.createElement("div", {
      className: "col-3 border-left border-right border-white"
    })), React.createElement("div", {
      className: "progress-bar bg-" + className + " " + className,
      style: {
        width: score + "%"
      }
    })));
  };

  return PasswordMeter;
}(Component);

_defineProperty$1(PasswordMeter, "defaultProps", {
  score: 0,
  steps: defaultSteps
});

PasswordMeter.propTypes = {
  score: PropTypes.number,
  steps: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number,
    label: PropTypes.string,
    className: PropTypes.string
  }))
};

var propTypes$l = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$k = {
  tag: 'div'
};

var Skiplink = function Skiplink(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'skiplinks');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

Skiplink.propTypes = propTypes$l;
Skiplink.defaultProps = defaultProps$k;

var propTypes$m = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$l = {
  tag: 'a'
};

var SkiplinkItem = function SkiplinkItem(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'sr-only', 'sr-only-focusable');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

SkiplinkItem.propTypes = propTypes$m;
SkiplinkItem.defaultProps = defaultProps$l;

var Toggle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Toggle, _Component);

  function Toggle() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Toggle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        label = _this$props.label,
        rest = _objectWithoutPropertiesLoose(_this$props, ["label"]);

    return React.createElement("div", {
      className: "toggles"
    }, React.createElement(Label, {
      check: true
    }, label, React.createElement(Input$1, _extends({
      type: "checkbox"
    }, rest)), React.createElement("span", {
      className: "lever"
    })));
  };

  return Toggle;
}(Component);

Toggle.propTypes = _extends({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
}, Input$1.propTypes);

var propTypes$n = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  secondary: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  dark: PropTypes.bool
};
var defaultProps$m = {
  tag: 'div'
};

var Sidebar = function Sidebar(props) {
  var className = props.className,
      Tag = props.tag,
      secondary = props.secondary,
      left = props.left,
      right = props.right,
      dark = props.dark,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "secondary", "left", "right", "dark"]);

  var wrapperClasses = classnames(className, left ? 'it-line-left-side' : false, right ? 'it-line-right-side' : false, dark ? 'theme-dark' : false, 'sidebar-wrapper');
  var wrapperClassesLinkList = classnames(secondary ? 'linklist-secondary' : false, 'sidebar-linklist-wrapper');

  if (secondary) {
    return React.createElement(Tag, _extends({}, attributes, {
      className: wrapperClassesLinkList
    }));
  }

  return React.createElement(Tag, {
    className: wrapperClasses
  }, React.createElement(Tag, _extends({}, attributes, {
    className: wrapperClassesLinkList
  })));
};

Sidebar.propTypes = propTypes$n;
Sidebar.defaultProps = defaultProps$m;

var propTypes$o = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  value: PropTypes.number,
  label: PropTypes.string,
  indeterminate: PropTypes.bool,
  color: PropTypes.string
};
var defaultProps$n = {
  tag: 'div',
  role: 'progressbar',
  indeterminate: false
};

var Progress =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Progress, _React$Component);

  function Progress() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Progress.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        value = _this$props.value,
        label = _this$props.label,
        indeterminate = _this$props.indeterminate,
        color = _this$props.color,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "value", "label", "indeterminate", "color"]);

    var wrapperClasses = classnames('progress-bar-wrapper');
    var secondaryWrapperClasses = classnames(className, indeterminate ? 'progress-indeterminate' : false, color ? 'progress-color' : false, 'progress');
    var classes = classnames(className, 'progress-bar', color ? "bg-" + this.props.color : false);

    if (label && value) {
      return React.createElement(Tag, {
        className: wrapperClasses
      }, React.createElement("div", {
        className: "progress-bar-label"
      }, React.createElement("span", {
        className: "sr-only"
      }, this.props.label), this.props.value + '%'), React.createElement(Tag, {
        className: secondaryWrapperClasses
      }, React.createElement("div", _extends({}, attributes, {
        className: classes,
        role: "progressbar",
        style: {
          width: this.props.value + '%'
        },
        "aria-valuenow": this.props.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }))));
    }

    return React.createElement(Tag, {
      className: secondaryWrapperClasses
    }, React.createElement("div", {
      className: "progress-bar-label"
    }, React.createElement("span", {
      className: "sr-only"
    }, this.props.label)), React.createElement("div", _extends({}, attributes, {
      className: classes,
      role: "progressbar",
      style: {
        width: this.props.value + '%'
      },
      "aria-valuenow": this.props.value,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    })));
  };

  return Progress;
}(React.Component);

Progress.propTypes = propTypes$o;
Progress.defaultProps = defaultProps$n;

var propTypes$p = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  small: PropTypes.bool,
  "double": PropTypes.bool
};
var defaultProps$o = {
  tag: 'span',
  indeterminate: false,
  active: false,
  small: false,
  "double": false
};

var Spinner =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Spinner, _React$Component);

  function Spinner() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Spinner.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        Tag = _this$props.tag,
        active = _this$props.active,
        small = _this$props.small,
        _double = _this$props["double"],
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "tag", "active", "small", "double"]);

    var wrapperClasses = classnames(active ? 'progress-spinner-active' : false, small ? 'size-sm' : false, _double ? 'progress-spinner-double' : false, 'progress-spinner');
    var innerClasses = classnames('progress-spinner-inner');
    var classes = classnames(className, 'sr-only');

    if (_double) {
      return React.createElement(Tag, {
        className: wrapperClasses
      }, React.createElement("div", {
        className: innerClasses
      }), React.createElement("div", {
        className: innerClasses
      }), React.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), "Caricamento..."));
    }

    return React.createElement(Tag, {
      className: wrapperClasses
    }, React.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), "Caricamento..."));
  };

  return Spinner;
}(React.Component);

Spinner.propTypes = propTypes$p;
Spinner.defaultProps = defaultProps$o;

var propTypes$q = _extends({}, Card$1.propTypes, {
  teaser: PropTypes.bool,
  spacing: PropTypes.bool,
  noWrapper: PropTypes.bool,
  wrapperClassName: PropTypes.string
});

var defaultProps$p = _extends({}, Card$1.defaultProps, {
  noWrapper: false
});

var Card = function Card(_ref) {
  var teaser = _ref.teaser,
      spacing = _ref.spacing,
      noWrapper = _ref.noWrapper,
      wrapperClassName = _ref.wrapperClassName,
      attributes = _objectWithoutPropertiesLoose(_ref, ["teaser", "spacing", "noWrapper", "wrapperClassName"]);

  var wrapperClasses = classnames('card-wrapper', wrapperClassName, {
    'card-space': spacing,
    'card-teaser-wrapper': teaser
  });
  var cardClasses = classnames(attributes.className, {
    'card-teaser': teaser
  });

  if (noWrapper) {
    return React.createElement(Card$1, _extends({}, attributes, {
      className: cardClasses
    }));
  }

  return React.createElement("div", {
    className: wrapperClasses
  }, React.createElement(Card$1, _extends({}, attributes, {
    className: cardClasses
  })));
};

Card.propTypes = propTypes$q;
Card.defaultProps = defaultProps$p;

var propTypes$r = {
  iconName: PropTypes.string,
  date: PropTypes.string,
  href: PropTypes.string
};

var CardCategory = function CardCategory(props) {
  var iconName = props.iconName,
      date = props.date,
      href = props.href,
      attributes = _objectWithoutPropertiesLoose(props, ["iconName", "date", "href"]);

  var children = attributes.children,
      rest = _objectWithoutPropertiesLoose(attributes, ["children"]);

  var classes = classnames({
    'category-top': !iconName,
    'categoryicon-top': iconName
  }); // Simple category link

  var categoryLink = !iconName && React.createElement("a", {
    href: href,
    className: "category"
  }, children);
  var categoryDate = !iconName && React.createElement("span", {
    className: "data"
  }, date); // Category with icon

  var categoryText = iconName && React.createElement("span", {
    className: "text"
  }, children);
  var categoryIcon = iconName && React.createElement(Icon, {
    icon: iconName
  });
  return React.createElement("div", _extends({
    className: classes
  }, rest), categoryLink, categoryDate, categoryIcon, categoryText);
};

CardCategory.propTypes = propTypes$r;

var propTypes$s = {
  tag: PropTypes.string,
  className: PropTypes.string
};
var defaultProps$q = {
  tag: 'a'
};

var CardTag = function CardTag(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'card-tag');
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

CardTag.propTypes = propTypes$s;
CardTag.defaultProps = defaultProps$q;

var propTypes$t = {
  children: PropTypes.node,
  date: PropTypes.string
};

var CardTagsHeader = function CardTagsHeader(props) {
  var date = props.date,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, ["date", "children"]);

  return React.createElement("div", _extends({
    className: "head-tags"
  }, attributes), children, date && React.createElement("span", {
    className: "data"
  }, date));
};

CardTagsHeader.propTypes = propTypes$t;

var propTypes$u = {
  className: PropTypes.string
};

var CardSignature = function CardSignature(props) {
  var className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, ["className"]);

  var classes = classnames(className, 'card-signature');
  return React.createElement("span", _extends({
    className: classes
  }, attributes));
};

CardSignature.propTypes = propTypes$u;

var propTypes$v = {
  className: PropTypes.string
};

var CardFooterCTA = function CardFooterCTA(props) {
  var className = props.className,
      attributes = _objectWithoutPropertiesLoose(props, ["className"]);

  var classes = classnames(className, 'it-card-footer');
  return React.createElement("div", _extends({
    className: classes
  }, attributes));
};

CardFooterCTA.propTypes = propTypes$v;

var propTypes$w = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string
};
var defaultTypes = {
  iconName: 'it-arrow-right'
};

var CardReadMore = function CardReadMore(props) {
  var className = props.className,
      text = props.text,
      iconName = props.iconName,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "text", "iconName"]);

  var classes = classnames(className, 'read-more');
  return React.createElement("a", _extends({
    className: classes
  }, attributes), React.createElement("span", {
    className: "text"
  }, text), iconName && React.createElement(Icon, {
    icon: iconName
  }));
};

CardReadMore.propTypes = propTypes$w;
CardReadMore.defaultTypes = defaultTypes;

var propTypes$x = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string
};
var defaultProps$r = {
  tag: 'nav'
};

var BottomNav = function BottomNav(props) {
  var Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["tag"]);

  var wrapperClasses = classnames('bottom-nav');
  return React.createElement(Tag, {
    className: wrapperClasses
  }, React.createElement("ul", attributes));
};

BottomNav.propTypes = propTypes$x;
BottomNav.defaultProps = defaultProps$r;

var propTypes$y = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.string,
  label: PropTypes.string,
  iconName: PropTypes.string,
  srText: PropTypes.string,
  alert: PropTypes.bool,
  badge: PropTypes.bool
};
var defaultProps$s = {
  tag: 'a',
  link: '#',
  iconName: 'it-comment',
  srText: false
};

var BottomNavItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BottomNavItem, _React$Component);

  function BottomNavItem() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = BottomNavItem.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        Tag = _this$props.tag,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["tag"]);

    var activeClass = classnames(this.props.active ? 'active' : false);
    var badgeWrapper = this.props.badge ? React.createElement("div", {
      className: "badge-wrapper"
    }, React.createElement("span", {
      className: "bottom-nav-badge"
    }, this.props.badge)) : false;
    var alertWrapper = this.props.alert ? React.createElement("div", {
      className: "badge-wrapper"
    }, React.createElement("span", {
      className: "bottom-nav-alert"
    })) : false;
    return React.createElement("li", attributes, React.createElement(Tag, {
      href: this.props.link,
      className: activeClass
    }, badgeWrapper, alertWrapper, React.createElement(Icon, {
      icon: this.props.iconName
    }), React.createElement("span", {
      className: "bottom-nav-label"
    }, this.props.label, React.createElement("span", {
      className: "sr-only"
    }, this.props.srText))));
  };

  return BottomNavItem;
}(React.Component);

BottomNavItem.propTypes = propTypes$y;
BottomNavItem.defaultProps = defaultProps$s;

var propTypes$z = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente Chip */
  className: PropTypes.string,

  /** Impostarlo su `true` per centrare la label all'interno */
  simple: PropTypes.bool,

  /** Impostarlo su `true` per una versione più grande del componente Chip. */
  large: PropTypes.bool,

  /** Impostarlo su `true` per renderizzare il componente Chip come disabilitato */
  disabled: PropTypes.bool
};
var defaultProps$t = {
  tag: 'div',
  simple: false,
  large: false,
  disabled: false
};

var Chip = function Chip(props) {
  var className = props.className,
      Tag = props.tag,
      simple = props.simple,
      large = props.large,
      disabled = props.disabled,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag", "simple", "large", "disabled"]);

  var classes = classnames('chip', className, {
    'chip-simple': simple,
    'chip-lg': large,
    'chip-disabled': disabled
  });
  return React.createElement(Tag, _extends({
    className: classes
  }, attributes));
};

Chip.propTypes = propTypes$z;
Chip.defaultProps = defaultProps$t;

var propTypes$A = {
  /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  /** Classi aggiuntive da usare per il componente ChipLabel */
  className: PropTypes.string
};
var defaultProps$u = {
  tag: 'span'
};

var ChipLabel = function ChipLabel(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "tag"]);

  var classes = classnames(className, 'chip-label');
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ChipLabel.propTypes = propTypes$A;
ChipLabel.defaultProps = defaultProps$u;

WebFont.load({
  custom: {
    families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
  }
});

export { Accordion, AccordionBody, AccordionHeader, Badge, BottomNav, BottomNavItem, Card, CardCategory, CardFooterCTA, CardReadMore, CardSignature, CardTag, CardTagsHeader, Chip, ChipLabel, Collapse, FormGroup, Header, HeaderBrand, HeaderContent, HeaderLinkZone, HeaderRightZone, HeaderSearch, HeaderSocialsZone, HeaderToggler, Headers, Hero, Icon, Input, LinkList, LinkListItem, Nav, Pager, PagerList, PasswordInput, PasswordMeter, Progress, Scrollspy, Sidebar, Skiplink, SkiplinkItem, Spinner, Toggle };
//# sourceMappingURL=design-react-kit.es.js.map
