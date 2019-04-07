import fetchQuery from '../utilities/fetcher';
import {preventOverrideClass, preventOverrideFunction} from '../validation/preventOverride';
import {verifyClassName, verifyFunctionName} from '../validation/verifyName';
import verifyWhirlerFunctions from '../validation/verifyWhirlerFunctions';
import Props from './Props';

const notOverride = ['call', 'get', 'set'];

export class WhirlerCore {
    protected __props: Props = {};

    constructor(props?: Props) {
        preventOverrideClass(WhirlerCore, this, [Whirler, WhirlerBundle]);
        verifyClassName(this.constructor['name']);

        if (props) this.__props = props;
    }
}

export class Whirler extends WhirlerCore {
    constructor(config?: Props) {
        super(config);

        preventOverrideFunction(Whirler, notOverride, this);
        verifyWhirlerFunctions(this);
    }

    protected async call(func: string, ...args) {
        verifyFunctionName(func);

        let header: any = {};
        let body: any = {func};

        if (this.__props.authorization)
            header['Authorization'] = this.__props.authorization;
        if (args && args.length > 0) body.args = args;
        if (this.__props.namespace) body.nsp = this.__props.namespace;

        return await fetchQuery(this.__props.url || '', header, body);
    }
}

export class WhirlerBundle extends WhirlerCore {
    protected __packages: any = {};
    public __whirles: any = {};

    constructor(props?: Props) {
        super(props);
    }
}
