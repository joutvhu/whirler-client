import ErrorMessages from '../constants/ErrorMessages';
import {FormattedError} from '../error/OtherErrors';
import {WhirlerCore} from '../type/Whirler';
import getOwnPropertyNames from '../utilities/getOwnPropertyNames';
import {verifyFunctionName} from './verifyName';

export default function verifyWhirlerFunctions(whirler: WhirlerCore) {
    const notCheck: any = ['constructor', 'call', 'middleware'];
    let properties = getOwnPropertyNames(whirler);
    for (let i of properties) {
        if (i === 'middleware' && !(whirler[i] instanceof Function))
            throw new FormattedError(ErrorMessages.MIDDLEWARE_FUNCTION);
        if (!notCheck.includes(i) && whirler[i] instanceof Function)
            verifyFunctionName(i);
    }
}
