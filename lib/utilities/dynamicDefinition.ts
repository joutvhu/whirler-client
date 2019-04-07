export function inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}

export function createFunction(name, prototype) {
    let temp = prototype;
    eval('temp = function ' + name + '() { return prototype.apply(this, arguments); }');
    return temp;
}

export function createES5Class(name, superClass, prototype) {
    let subClass = createFunction(name, prototype);
    inheritsLoose(subClass, superClass);
    return subClass;
}
