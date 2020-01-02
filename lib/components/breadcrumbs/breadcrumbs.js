"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_classnames=_interopRequireDefault(require("classnames"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var Item=function(a){var b=a.children,c=a.className,d=a.style,e=_objectWithoutProperties(a,["children","className","style"]);return _react["default"].createElement("li",{className:(0,_classnames["default"])("nhsuk-breadcrumb__item",c),style:d},_react["default"].createElement("a",_extends({className:"nhsuk-breadcrumb__link"},e),b))},Breadcrumbs=function(a){var b=a.children,c=a.className,d=_objectWithoutProperties(a,["children","className"]);return _react["default"].createElement("nav",_extends({className:(0,_classnames["default"])("nhsuk-breadcrumb",c)},d),_react["default"].createElement("div",{className:"nhsuk-width-container"},_react["default"].createElement("ol",{className:"nhsuk-breadcrumb__list"},b)))};Breadcrumbs.defaultProps={className:""},Item.defaultProps={className:"",style:{}},Breadcrumbs.Item=Item;var _default=Breadcrumbs;exports["default"]=_default;
//# sourceMappingURL=breadcrumbs.js.map