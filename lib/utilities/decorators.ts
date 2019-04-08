export function enumerable(value: boolean) {
    return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

export function configurable(value: boolean) {
    return function (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}
