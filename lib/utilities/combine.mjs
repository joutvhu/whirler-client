import { WhirlerBundle, WhirlerCore } from '../type/Whirler';
import { verifyClassName } from '../validation/verifyName';
import { convertWhirles } from './convertWhirles';
import { createClass } from './dynamicDefinition';
export default function combine(name, ...whirles) {
    verifyClassName(name);
    whirles = convertWhirles(whirles);
    if (whirles.prototype instanceof WhirlerCore)
        return whirles;
    let bundle = createClass(name, WhirlerBundle);
    Object.defineProperty(bundle.prototype, '__whirles', {
        configurable: false,
        enumerable: false,
        value: whirles,
        writable: false
    });
    for (let i in whirles) {
        if (whirles[i].prototype instanceof WhirlerCore) {
            Object.defineProperty(bundle.prototype, i, {
                configurable: false,
                enumerable: true,
                get() {
                    if (!this.props['__packages'])
                        this.props['__packages'] = {};
                    if (!this.props['__packages'][i]) {
                        const props = this.props.propsFor(i);
                        this.props['__packages'][i] = new this.__whirles[i](props);
                    }
                    return this.props['__packages'][i];
                }
            });
        }
    }
    return bundle;
}
