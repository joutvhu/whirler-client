"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
exports.inheritsLoose = inheritsLoose;
function createFunction(name, prototype) {
    var temp = prototype;
    eval('temp = function ' + name + '() { return prototype.apply(this, arguments); }');
    return temp;
}
exports.createFunction = createFunction;
function createES5Class(name, superClass, prototype) {
    var subClass = createFunction(name, prototype);
    inheritsLoose(subClass, superClass);
    return subClass;
}
exports.createES5Class = createES5Class;
//# sourceMappingURL=dynamicDefinition.js.map