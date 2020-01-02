"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_classnames=_interopRequireDefault(require("classnames"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var Item=function(a){var b=a.children,c=a.className,d=_objectWithoutProperties(a,["children","className"]);return _react["default"].createElement("li",{className:(0,_classnames["default"])("nhsuk-list-panel__item",c)},_react["default"].createElement("a",_extends({className:"nhsuk-list-panel__link"},d),b))};Item.defaultProps={className:""};var Panel=function(a){var b=a.label,c=a.id,d=a.backToTop,e=a.backToTopHref,f=a.backToTopText,g=a.disabled,h=a.className,i=a.children,j=_objectWithoutProperties(a,["label","id","backToTop","backToTopHref","backToTopText","disabled","className","children"]);return _react["default"].createElement("div",_extends({className:(0,_classnames["default"])("nhsuk-list-panel",h)},j),_react["default"].createElement("h2",{className:"nhsuk-list-panel__label",id:c},b),g?_react["default"].createElement("div",{className:"nhsuk-list-panel__box nhsuk-list-panel__box--with-label"},_react["default"].createElement("p",{className:"nhsuk-list-panel--results-items__no-results"},i)):_react["default"].createElement("ul",{className:"nhsuk-list-panel__list nhsuk-list-panel__list--with-label"},i),d?_react["default"].createElement("div",{className:"nhsuk-back-to-top"},_react["default"].createElement("a",{className:"nhsuk-back-to-top__link",href:e},_react["default"].createElement("svg",{className:"nhsuk-icon nhsuk-icon__arrow-right",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true"},_react["default"].createElement("path",{d:"M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"})),f)):null)};Panel.defaultProps={id:"",backToTop:!1,backToTopHref:"#",backToTopText:"Back to top",disabled:!1,className:""};var ListPanel=function(a){var b=a.children;return _react["default"].createElement("ol",{className:"nhsuk-list"},b)};ListPanel.Panel=Panel,ListPanel.Item=Item;var _default=ListPanel;exports["default"]=_default;
//# sourceMappingURL=list-panel.js.map