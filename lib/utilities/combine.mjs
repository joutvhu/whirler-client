import { WhirlerBundle, WhirlerCore } from '../type/Whirler';
import { verifyClassName } from '../validation/verifyName';
import { convertWhirles } from './convertWhirles';
import { createES5Class } from './dynamicDefinition';
export default function combine(name, ...whirles) {
    verifyClassName(name);
    whirles = convertWhirles(whirles);
    if (whirles.prototype instanceof WhirlerCore)
        return whirles;
    let bundle = createES5Class(name, WhirlerBundle, function () {
        WhirlerBundle.constructor.call(this);
        return this;
    });
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
                    if (!this.__packages)
                        this.__packages = {};
                    if (!this.__packages[i]) {
                        let whirler = new this.__whirles[i]();
                        whirler.__props = {
                            ...whirler.__props,
                            parent: this
                        };
                        this.__packages[i] = whirler;
                    }
                    return this.__packages[i];
                }
            });
        }
    }
    return bundle;
}
