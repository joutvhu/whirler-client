import fetchQuery from '../utilities/fetcher';
import {preventOverrideClass, preventOverrideFunction} from '../validation/preventOverride';
import verifyWhirlerFunctions from '../validation/verifyWhirlerFunctions';
import {verifyClassName} from '../validation/verifyName';
import Configer from './Configer';

const notOverride = ['call'];

export class WhirlerCore {
    protected __config: Configer;

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

    protected async call(func : String, args: any[]) {
        let header: any = {};
        if(this.__config.authorization)
            header['Authorization'] = this.__config.authorization;
        let result = await fetchQuery(this.__config.url, header, { func, args });
        return result;
    }
}

export class WhirlerBundle extends WhirlerCore {
    constructor(config?: Configer) {
        super(config);
    }
}
