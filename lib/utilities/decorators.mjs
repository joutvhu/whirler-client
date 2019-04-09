export function enumerable(value) {
    return function (_target, _propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
export function configurable(value) {
    return function (_target, _propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
