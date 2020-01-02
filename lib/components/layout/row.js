"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_classnames=_interopRequireDefault(require("classnames"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var Row=function(a){var b=a.children,c=a.className,d=_objectWithoutProperties(a,["children","className"]);return _react["default"].createElement("div",_extends({className:(0,_classnames["default"])("nhsuk-grid-row",c)},d),b)},Column=function(a){var b=a.children,c=a.width,d=a.tabletWidth,e=a.forceLayout,f=a.className,g=_objectWithoutProperties(a,["children","width","tabletWidth","forceLayout","className"]);return _react["default"].createElement("div",_extends({className:(0,_classnames["default"])("nhsuk-grid-column-".concat(c),_defineProperty({},"nhsuk-u-".concat(c),e),_defineProperty({},"nhsuk-u-".concat(d,"-tablet"),d),f)},g),b)};Row.defaultProps={children:null,className:""},Column.defaultProps={children:null,forceLayout:!1,tabletWidth:"",className:""},Row.Column=Column;var _default=Row;exports["default"]=_default;
//# sourceMappingURL=row.js.map