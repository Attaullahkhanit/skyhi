"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var logo1_png_1 = require("@/assets/images/logo1.png");
var Header_styled_1 = require("@/components/header/Header.styled");
var RouteContext_1 = require("@/utils/providers/RouteContext");
var Button_1 = require("../Button");
var Header = function () {
    var _a = react_1.useState(false), isMenuOpen = _a[0], setMenuOpen = _a[1];
    var route = RouteContext_1.useRoute().route;
    var toggleMenu = function () {
        setMenuOpen(!isMenuOpen);
    };
    var handleClick = function () {
        alert("Button clicked!");
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Header_styled_1.HeaderContainer, null,
            react_1["default"].createElement(Header_styled_1.LogoContainer, null,
                react_1["default"].createElement(image_1["default"], { src: logo1_png_1["default"].src, alt: "Logo", width: 172, height: 80 })),
            react_1["default"].createElement(Header_styled_1.Navigation, null,
                react_1["default"].createElement(Header_styled_1.NavLink, { href: "/", className: route === "/" ? "active" : "" }, "Home"),
                react_1["default"].createElement(Header_styled_1.NavLink, { href: "/about", className: route === "/about" ? "active" : "" }, "About"),
                react_1["default"].createElement(Header_styled_1.NavLink, { href: "/courses", className: route === "/courses" ? "active" : "" }, "Courses"),
                react_1["default"].createElement(Header_styled_1.NavLink, { href: "/approach", className: route === "/approach" ? "active" : "" }, "Approach"),
                react_1["default"].createElement(Header_styled_1.NavLink, { href: "/resources", className: route === "/resources" ? "active" : "" }, "Resources")),
            react_1["default"].createElement(Header_styled_1.ButtonContainer, null,
                react_1["default"].createElement(Button_1["default"], { variant: "main", onClick: handleClick }, "Book your free trial today")),
            react_1["default"].createElement(Header_styled_1.HamburgerIcon, { onClick: toggleMenu },
                react_1["default"].createElement("span", null),
                react_1["default"].createElement("span", null),
                react_1["default"].createElement("span", null))),
        react_1["default"].createElement(Header_styled_1.MobileMenuOverlay, { "$isOpen": isMenuOpen },
            react_1["default"].createElement(Header_styled_1.CloseButton, { onClick: toggleMenu }, "\u00D7"),
            react_1["default"].createElement(Header_styled_1.MobileNavLink, { href: "/", className: route === "/" ? "active" : "" }, "Home"),
            react_1["default"].createElement(Header_styled_1.MobileNavLink, { href: "/about", className: route === "/about" ? "active" : "" }, "About"),
            react_1["default"].createElement(Header_styled_1.MobileNavLink, { href: "/courses", className: route === "/courses" ? "active" : "" }, "Courses"),
            react_1["default"].createElement(Header_styled_1.MobileNavLink, { href: "/approach", className: route === "/approach" ? "active" : "" }, "Approach"),
            react_1["default"].createElement(Header_styled_1.MobileNavLink, { href: "/resources", className: route === "/resources" ? "active" : "" }, "Resources"),
            react_1["default"].createElement(Header_styled_1.HeaderButton, null, "Book your free trial today"))));
};
exports["default"] = Header;
