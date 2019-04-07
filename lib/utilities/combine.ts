import {WhirlerCore, WhirlerBundle} from '../type/Whirler';
import {verifyClassName} from '../validation/verifyName';
import {convertWhirles} from './convertWhirles';
import {createES5Class} from './dynamicDefinition';

export default function combine(name: string, ...whirles: any) {
    verifyClassName(name);
    whirles = convertWhirles(whirles);
    if (whirles.prototype instanceof WhirlerCore)
        return whirles;

    let bundle = createES5Class(name, WhirlerBundle, function (this: WhirlerBundle) {
        WhirlerBundle.constructor.call(this);
        return this;
    });

    Object.defineProperty(bundle.prototype, '__whirles', {
        value: whirles,
        configurable: false,
        writable: false
    });
    for(let i in whirles) {
        Object.defineProperty(bundle.prototype, i, {
            get: function () {
                if(!this.__packages[i])
                    this.__packages[i] = new this.__whirles[i]();
                return this.__packages[i];
            },
            configurable: false,
            writable: false
        });
    }

    return bundle;
}
