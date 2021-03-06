"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_classnames=_interopRequireDefault(require("classnames")),_HeaderContext=_interopRequireDefault(require("./HeaderContext")),_link=_interopRequireDefault(require("./components/link")),_title=_interopRequireDefault(require("./components/title")),_logo=_interopRequireDefault(require("./components/logo")),_menutoggle=_interopRequireDefault(require("./components/menutoggle")),_content=_interopRequireDefault(require("./components/content")),_search=_interopRequireDefault(require("./components/search")),_container=_interopRequireDefault(require("./components/container")),_navigation=_interopRequireDefault(require("./components/navigation"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return _getRequireWildcardCache=function(){return a},a}function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b=_getRequireWildcardCache();if(b&&b.has(a))return b.get(a);var c={};if(null!=a){var d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}}return c["default"]=a,b&&b.set(a,c),c}function _typeof(a){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},_typeof(a)}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}function _possibleConstructorReturn(a,b){return b&&("object"===_typeof(b)||"function"==typeof b)?b:_assertThisInitialized(a)}function _getPrototypeOf(a){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},_getPrototypeOf(a)}function _assertThisInitialized(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var Header=/*#__PURE__*/function(a){function b(a,c){var d;return _classCallCheck(this,b),d=_possibleConstructorReturn(this,_getPrototypeOf(b).call(this,a,c)),_defineProperty(_assertThisInitialized(d),"toggleMenu",function(){var a=d.state.menuVisible;d.setState({menuVisible:!a})}),d.state={menuVisible:!1},d}return _inherits(b,a),_createClass(b,[{key:"render",value:function render(){var a=this.props,b=a.className,c=a.children,d=a.transactional,e=_objectWithoutProperties(a,["className","children","transactional"]),f=this.state.menuVisible,g={transactional:d,menuVisible:f,toggleMenu:this.toggleMenu};return _react["default"].createElement("header",_extends({className:(0,_classnames["default"])("nhsuk-header",{"nhsuk-header--transactional":d},b)},e),_react["default"].createElement(_HeaderContext["default"].Provider,{value:g},c))}}]),b}(_react.Component);_defineProperty(Header,"Logo",_logo["default"]),_defineProperty(Header,"MenuToggle",_menutoggle["default"]),_defineProperty(Header,"Content",_content["default"]),_defineProperty(Header,"Search",_search["default"]),_defineProperty(Header,"Container",_container["default"]),_defineProperty(Header,"Navigation",_navigation["default"]),_defineProperty(Header,"Link",_link["default"]),_defineProperty(Header,"Title",_title["default"]),_defineProperty(Header,"defaultProps",{className:"",transactional:""});var _default=Header;exports["default"]=_default;
//# sourceMappingURL=header.js.map