export function inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

export function createFunction(name, _superClass, _prototype) {
    let temp = undefined;
    let statements = 'temp = function ' + name + '() {\n' +
        '    var _this = _superClass.apply(this, arguments) || this;\n';
    if (_prototype instanceof Function)
        statements += '    return _prototype.apply(_this, arguments) || _this;\n';
    else statements += '    return _this;\n';
    statements += '}';
    eval(statements);
    return temp;
}

export function createES5Class(name, superClass, prototype) {
    let subClass = createFunction(name, superClass, prototype);
    inheritsLoose(subClass, superClass);
    return subClass;
}

export function createES6Class(name, _superClass, _prototype) {
    let temp = undefined;
    let statements = 'temp = class ' + name + ' extends _superClass {\n' +
        '    constructor() {\n' +
        '        super(...arguments);\n';
    if (_prototype instanceof Function)
        statements += '        _prototype.apply(this, arguments);\n' ;
    statements += '    }\n' +
        '}';
    eval(statements);
    return temp;
}

export function createClass(name, superClass, prototype?: Function) {
    let temp = undefined;
    try {
        temp = createES6Class(name, superClass, prototype);
    } catch (e) {
        temp = createES5Class(name, superClass, prototype);
    }
    return temp;
}
