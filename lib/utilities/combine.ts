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
                if(!this.__packages) this.__packages = {};
                if(!this.__packages[i]) {
                    let whirler: any = new this.__whirles[i]();
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

    return bundle;
}
