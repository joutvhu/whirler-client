import Props from '../type/Props';
import {WhirlerBundle, WhirlerCore} from '../type/Whirler';
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
                get(this: WhirlerBundle): WhirlerCore {
                    if (!this.props['__packages']) this.props['__packages'] = {};
                    if (!this.props['__packages'][i]) {
                        const props: Props = this.props.propsFor(i);
                        let whirler: any = new this.__whirles[i](props);
                        whirler.__props = {
                            ...whirler.__props,
                            parent: this
                        };
                        this.props['__packages'][i] = whirler;
                    }
                    return this.props['__packages'][i];
                }
            });
        }
    }

    return bundle;
}
