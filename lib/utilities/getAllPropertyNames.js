"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAllPropertyNames(obj) {
    var result = [];
    var temp;
    try {
        while (obj && obj.constructor !== Object) {
            temp = Object.getOwnPropertyNames(obj);
            for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
                var i = temp_1[_i];
                if (result.indexOf(i) === -1)
                    result.push(i);
            }
            obj = Object.getPrototypeOf(obj);
        }
    }
    catch (e) {
        // continue regardless of error
    }
    return result;
}
exports.default = getAllPropertyNames;
//# sourceMappingURL=getAllPropertyNames.js.map