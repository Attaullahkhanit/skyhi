"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ArrowLine = exports.rightArrows = exports.leftArrows = void 0;
var styled_components_1 = require("styled-components");
var image_1 = require("next/image");
var leftArrow1_svg_1 = require("@/assets/svg/leftArrow1.svg");
var leftArrow2_svg_1 = require("@/assets/svg/leftArrow2.svg");
var leftArrow3_svg_1 = require("@/assets/svg/leftArrow3.svg");
var leftArrow4_svg_1 = require("@/assets/svg/leftArrow4.svg");
var leftArrow5_svg_1 = require("@/assets/svg/leftArrow5.svg");
var rightArrow1_svg_1 = require("@/assets/svg/rightArrow1.svg");
var rightArrow2_svg_1 = require("@/assets/svg/rightArrow2.svg");
var rightArrow3_svg_1 = require("@/assets/svg/rightArrow3.svg");
var rightArrow4_svg_1 = require("@/assets/svg/rightArrow4.svg");
var rightArrow5_svg_1 = require("@/assets/svg/rightArrow5.svg");
exports.leftArrows = [
    leftArrow1_svg_1["default"],
    leftArrow2_svg_1["default"],
    leftArrow3_svg_1["default"],
    leftArrow4_svg_1["default"],
    leftArrow5_svg_1["default"],
];
exports.rightArrows = [
    rightArrow1_svg_1["default"],
    rightArrow2_svg_1["default"],
    rightArrow3_svg_1["default"],
    rightArrow4_svg_1["default"],
    rightArrow5_svg_1["default"],
];
exports.ArrowLine = styled_components_1["default"](image_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: absolute;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  transform: ", ";\n  z-index: 1;\n  filter: ", ";\n  transition: all 0.3s ease;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  bottom: ", ";\n  left: ", ";\n  right: ", ";\n  transform: ", ";\n  z-index: 1;\n  filter: ",
    ";\n  transition: all 0.3s ease;\n\n  @media (max-width: 768px) {\n    display: none;\n  }\n"])), function (_a) {
    var top = _a.top;
    return top || "auto";
}, function (_a) {
    var bottom = _a.bottom;
    return bottom || "auto";
}, function (_a) {
    var left = _a.left;
    return left || "auto";
}, function (_a) {
    var right = _a.right;
    return right || "auto";
}, function (_a) {
    var rotate = _a.rotate;
    return "rotate(" + (rotate || "0deg") + ")";
}, function (_a) {
    var color = _a.color;
    return color ? "drop-shadow(0px 0px 5px " + color + ")" : "none";
});
var templateObject_1;
