"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Props_1 = __importDefault(require("../type/Props"));
function build(whirler, config) {
    var props = new Props_1.default(config);
    return new whirler(props);
}
exports.default = build;
