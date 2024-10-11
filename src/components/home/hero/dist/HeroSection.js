"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HeroSection_styled_1 = require("@/components/home/hero/HeroSection.styled");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var play_icon_svg_1 = require("@/assets/svg/play-icon.svg");
var hero1_png_1 = require("@/assets/images/hero1.png");
var Button_1 = require("@/components/Button");
var HeroSection = function () {
    var handleClick = function () {
    };
    return (react_1["default"].createElement(HeroSection_styled_1.HeroMain, null,
        react_1["default"].createElement(HeroSection_styled_1.HeroBackground, null,
            react_1["default"].createElement(HeroSection_styled_1.HeroImage, { src: hero1_png_1["default"], alt: "Hero Background", fill: true, quality: 100 })),
        react_1["default"].createElement(HeroSection_styled_1.HeroGradientOverlay, null),
        react_1["default"].createElement(HeroSection_styled_1.HeroContent, null,
            react_1["default"].createElement(HeroSection_styled_1.HeroTitle, null, "Beyond AI"),
            react_1["default"].createElement(HeroSection_styled_1.HeroSubtitle, null,
                "Building timeless tech skills for an",
                react_1["default"].createElement("br", null),
                "ever-changing tech landscape"),
            react_1["default"].createElement(Button_1["default"], { variant: "accent", onClick: handleClick }, "Book your free trial today")),
        react_1["default"].createElement(HeroSection_styled_1.HeroVideoButton, null,
            react_1["default"].createElement(HeroSection_styled_1.PlayImage, { src: play_icon_svg_1["default"], alt: "Play Icon" }),
            react_1["default"].createElement("span", null, "Watch Video"),
            react_1["default"].createElement(HeroSection_styled_1.ArrowIcon, { icon: free_solid_svg_icons_1.faArrowRight }))));
};
exports["default"] = HeroSection;
