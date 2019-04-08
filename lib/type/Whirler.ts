import {convertObjectToList} from '../utilities/convertWhirles';
import {configurable} from '../utilities/decorators';
import fetchQuery from '../utilities/fetcher';
import {preventOverrideClass, preventOverrideFunction} from '../validation/preventOverride';
import {verifyClassName, verifyFunctionName} from '../validation/verifyName';
import verifyWhirlerFunctions from '../validation/verifyWhirlerFunctions';
import Props from './Props';

const notOverride = ['call', 'get', 'set'];

export class WhirlerCore {
    protected __props: Props;

    @configurable(false)
    public get props(): Props  {
        return this.__props;
    }

    constructor(props: Props) {
        preventOverrideClass(WhirlerCore, this, [Whirler, WhirlerBundle]);
        verifyClassName(this.constructor['name']);

        this.__props = props;
        this.__props['__this'] = this;
    }
}

export class Whirler extends WhirlerCore {
    constructor(props: Props) {
        super(props);

        preventOverrideFunction(Whirler, notOverride, this);
        verifyWhirlerFunctions(this);
    }

    protected async call(func: string, args?: any[]) {
        verifyFunctionName(func);
        args = convertObjectToList(args);

        let header: any = {};
        let body: any = {func};

        if (this.__props.authorization)
            header['Authorization'] = this.__props.authorization;
        if (args && args.length > 0) body.args = args;
        if (this.__props.namespace) body.nsp = this.__props.namespace;

        return await fetchQuery(this.__props.config.url || '', header, body);
    }
}

export class WhirlerBundle extends WhirlerCore {
    protected __whirles: any = {};

    constructor(props: Props) {
        super(props);
    }
}
