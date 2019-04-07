import fetchQuery from '../utilities/fetcher';
import {preventOverrideClass, preventOverrideFunction} from '../validation/preventOverride';
import {verifyClassName, verifyFunctionName} from '../validation/verifyName';
import verifyWhirlerFunctions from '../validation/verifyWhirlerFunctions';
import Configer from './Configer';

const notOverride = ['call', 'get', 'set'];

export class WhirlerCore {
    protected __config: Configer = {};

    constructor(config?: Configer) {
        preventOverrideClass(WhirlerCore, this, [Whirler, WhirlerBundle]);
        verifyClassName(this.constructor['name']);
        if (config) this.__config = config;
    }
}

export class Whirler extends WhirlerCore {
    constructor(config?: Configer) {
        super(config);
        preventOverrideFunction(Whirler, notOverride, this);
        verifyWhirlerFunctions(this);
    }

    protected async call(func : String, args?: any[]) {
        verifyFunctionName(func);
        let header: any = {};
        let body: any = { func };
        if(this.__config.authorization)
            header['Authorization'] = this.__config.authorization;
        if (args) body.args = args;
        if (this.__config.namespace) body.nsp = this.__config.namespace;
        return  await fetchQuery(this.__config.url || '', header, body);
    }
}

export class WhirlerBundle extends WhirlerCore {
    protected __packages: any = {};

    constructor(config?: Configer) {
        super(config);
    }
}
