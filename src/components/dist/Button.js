"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
// components/Button.tsx
var styled_components_1 = require("styled-components");
// Styled button component with media queries
var StyledButton = styled_components_1["default"].button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", "; // Default color\n\n  border: none;\n  color: white;\n  padding: 15px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: ", "; // Darker shades for hover\n  }\n\n  /* Media Queries for Responsiveness */\n  @media (max-width: 1424px) {\n    width: 18vw;\n  }\n\n  @media (max-width: 1220px) {\n    width: 16vw;\n    height: 5vh;\n    font-size: 0.8rem;\n    padding: 0.8rem 1.8rem;\n  }\n\n  @media (max-width: 1024px) {\n    width: 14vw;\n    height: 5vh;\n    font-size: 0.7rem;\n    padding: 0.8rem 1.5rem;\n  }\n\n  @media (max-width: 900px) {\n    width: 12vw;\n    height: 5vh;\n    font-size: 0.6rem;\n    padding: 0.7rem 1.2rem;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 8vh;\n    font-size: 1rem;\n  }\n"], ["\n  background-color: ",
    "; // Default color\n\n  border: none;\n  color: white;\n  padding: 15px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: ",
    "; // Darker shades for hover\n  }\n\n  /* Media Queries for Responsiveness */\n  @media (max-width: 1424px) {\n    width: 18vw;\n  }\n\n  @media (max-width: 1220px) {\n    width: 16vw;\n    height: 5vh;\n    font-size: 0.8rem;\n    padding: 0.8rem 1.8rem;\n  }\n\n  @media (max-width: 1024px) {\n    width: 14vw;\n    height: 5vh;\n    font-size: 0.7rem;\n    padding: 0.8rem 1.5rem;\n  }\n\n  @media (max-width: 900px) {\n    width: 12vw;\n    height: 5vh;\n    font-size: 0.6rem;\n    padding: 0.7rem 1.2rem;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 8vh;\n    font-size: 1rem;\n  }\n"])), function (_a) {
    var variant = _a.variant;
    return variant === "main"
        ? "var(--secondary-button-bgcolor)"
        : variant === "accent"
            ? "var(--primary-button-bgcolor)"
            : "#e0e0e0";
}, function (_a) {
    var variant = _a.variant;
    return variant === "main"
        ? "var(--secondary-button-bgcolor)"
        : variant === "accent"
            ? "var(--primary-button-bgcolor)"
            : "#bdbdbd";
});
var Button = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "main" : _b, children = _a.children, onClick = _a.onClick;
    return (React.createElement(StyledButton, { variant: variant, onClick: onClick }, children));
};
exports["default"] = Button;
var templateObject_1;
