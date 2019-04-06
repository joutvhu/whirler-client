import ErrorMessages from '../constants/ErrorMessages';
import RegularExpression from '../constants/RegularExpression';
import {FormattedError} from '../error/OtherErrors';

export function verifyClassName(name) {
    if(typeof name == 'string' && name.length > 0) {
        if(RegularExpression.CLASS_NAME.test(name))
            return true;
        else if(RegularExpression.FIRST_ALPHABETIC.test(name))
            throw new FormattedError(ErrorMessages.CLASS_NAME_CONTAIN);
        else throw new FormattedError(ErrorMessages.START_CLASS_NAME);
    } else throw new FormattedError(ErrorMessages.SPECIFY_CLASS_NAME);
}

export function verifyFunctionName(name) {
    if(typeof name == 'string' && name.length > 0) {
        if(RegularExpression.FUNCTION_NAME.test(name))
            return true;
        else if(RegularExpression.FIRST_LOWERCASE.test(name))
            throw new FormattedError(ErrorMessages.FUNCTION_NAME_CONTAIN);
        else throw new FormattedError(ErrorMessages.START_FUNCTION_NAME);
    } else throw new FormattedError(ErrorMessages.SPECIFY_FUNCTION_NAME);
}