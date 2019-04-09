import ExceptionMessages from '../constants/ExceptionMessages';
import { FormattedError } from '../error/OtherErrors';
import getAllPropertyNames from '../utilities/getAllPropertyNames';
import { verifyFunctionName } from './verifyName';
export default function verifyWhirlerFunctions(whirler) {
    let properties = getAllPropertyNames(whirler);
    for (let i of properties) {
        if (i === 'middleware' && !(whirler[i] instanceof Function))
            throw new FormattedError(ExceptionMessages.MIDDLEWARE_FUNCTION);
        if (['constructor', 'call', 'middleware'].indexOf(i) === -1 && whirler[i] instanceof Function)
            verifyFunctionName(i);
    }
}
