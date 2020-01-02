"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _react=_interopRequireDefault(require("react")),_classnames=_interopRequireDefault(require("classnames")),_tableHeader=_interopRequireDefault(require("./components/table-header")),_tableBody=_interopRequireDefault(require("./components/table-body")),_tableRow=_interopRequireDefault(require("./components/table-row"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(0<=b.indexOf(c))&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}var TablePanel=function(a){var b=a.heading,c=a.children,d=a.className,e=_objectWithoutProperties(a,["heading","children","className"]);return _react["default"].createElement("div",_extends({className:(0,_classnames["default"])("nhsuk-table__panel-with-heading-tab",d)},e),b?_react["default"].createElement("h3",{className:"nhsuk-table__heading-tab"},b):null,c)};TablePanel.defaultProps={heading:"",className:""};var Table=function(a){var b=a.caption,c=a.children,d=a.className,e=_objectWithoutProperties(a,["caption","children","className"]);return _react["default"].createElement("div",{className:"nhsuk-table-responsive"},_react["default"].createElement("table",_extends({className:(0,_classnames["default"])("nhsuk-table",d)},e),b?_react["default"].createElement("caption",{className:"nhsuk-table__caption"},b):null,c))};Table.defaultProps={caption:"",className:""},Table.Header=_tableHeader["default"],Table.Body=_tableBody["default"],Table.Row=_tableRow["default"],Table.Panel=TablePanel;var _default=Table;exports["default"]=_default;
//# sourceMappingURL=table.js.map