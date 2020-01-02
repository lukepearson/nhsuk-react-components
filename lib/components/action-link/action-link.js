"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_classnames=_interopRequireDefault(require("classnames")),_icons=require("../icons");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var ActionLink=function(a){var b=a.children,c=a.className,d=a.style,e=_objectWithoutProperties(a,["children","className","style"]);return _react["default"].createElement("div",{className:(0,_classnames["default"])("nhsuk-action-link",c),style:d},_react["default"].createElement("a",_extends({className:"nhsuk-action-link__link"},e),_react["default"].createElement(_icons.ArrowRightCircle,null),_react["default"].createElement("span",{className:"nhsuk-action-link__text"},b)))};ActionLink.defaultProps={className:"",style:{}};var _default=ActionLink;exports["default"]=_default;
//# sourceMappingURL=action-link.js.map