import ExceptionMessages from '../constants/ExceptionMessages';
import {FormattedError} from '../error/OtherErrors';
import {WhirlerCore} from '../type/Whirler';
import getOwnPropertyNames from '../utilities/getOwnPropertyNames';
import {verifyFunctionName} from './verifyName';

export default function verifyWhirlerFunctions(whirler: WhirlerCore) {
    let properties = getOwnPropertyNames(whirler);
    for (let i of properties) {
        if (i === 'middleware' && !(whirler[i] instanceof Function))
            throw new FormattedError(ExceptionMessages.MIDDLEWARE_FUNCTION);
        if (['constructor', 'call', 'middleware'].indexOf(i) === -1 && whirler[i] instanceof Function)
            verifyFunctionName(i);
    }
}
