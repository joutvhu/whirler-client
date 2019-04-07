import fetchQuery from '../utilities/fetcher';
import { preventOverrideClass, preventOverrideFunction } from '../validation/preventOverride';
import { verifyClassName, verifyFunctionName } from '../validation/verifyName';
import { convertObjectToList } from '../utilities/convertWhirles';
import verifyWhirlerFunctions from '../validation/verifyWhirlerFunctions';
const notOverride = ['call', 'get', 'set'];
export class WhirlerCore {
    constructor(props) {
        this.__props = {};
        preventOverrideClass(WhirlerCore, this, [Whirler, WhirlerBundle]);
        verifyClassName(this.constructor['name']);
        if (props)
            this.__props = props;
    }
}
export class Whirler extends WhirlerCore {
    constructor(config) {
        super(config);
        preventOverrideFunction(Whirler, notOverride, this);
        verifyWhirlerFunctions(this);
    }
    async call(func, args) {
        verifyFunctionName(func);
        args = convertObjectToList(args);
        let header = {};
        let body = { func };
        if (this.__props.authorization)
            header['Authorization'] = this.__props.authorization;
        if (args && args.length > 0)
            body.args = args;
        if (this.__props.namespace)
            body.nsp = this.__props.namespace;
        return await fetchQuery(this.__props.url || '', header, body);
    }
}
export class WhirlerBundle extends WhirlerCore {
    constructor(props) {
        super(props);
        this.__packages = {};
        this.__whirles = {};
    }
}
//# sourceMappingURL=Whirler.js.map