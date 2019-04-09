var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { convertObjectToList } from '../utilities/convertWhirles';
import { configurable } from '../utilities/decorators';
import fetchQuery from '../utilities/fetcher';
import { preventOverrideClass, preventOverrideFunction } from '../validation/preventOverride';
import { verifyClassName, verifyFunctionName } from '../validation/verifyName';
import verifyWhirlerFunctions from '../validation/verifyWhirlerFunctions';
const notOverride = ['call', 'get', 'set'];
export class WhirlerCore {
    constructor(props) {
        preventOverrideClass(WhirlerCore, this, [Whirler, WhirlerBundle]);
        verifyClassName(this.constructor['name']);
        this.__props = props;
        this.__props['__this'] = this;
    }
    get props() {
        return this.__props;
    }
}
__decorate([
    configurable(false)
], WhirlerCore.prototype, "props", null);
export class Whirler extends WhirlerCore {
    constructor(props) {
        super(props);
        preventOverrideFunction(Whirler, notOverride, this);
        verifyWhirlerFunctions(this);
    }
    async call(func, args) {
        verifyFunctionName(func);
        args = convertObjectToList(args);
        let header = {};
        let body = { func };
        if (this.props.authorization)
            header['Authorization'] = this.props.authorization;
        if (args && args.length > 0)
            body.args = args;
        if (this.props.namespace)
            body.nsp = this.props.namespace;
        return await fetchQuery(this.props.endpoint || '', header, body);
    }
}
export class WhirlerBundle extends WhirlerCore {
    constructor(props) {
        super(props);
        this.props['__packages'] = {};
    }
}
