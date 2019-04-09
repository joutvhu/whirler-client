import ExceptionMessages from '../constants/ExceptionMessages';
import { DuplicationError, FormattedError } from '../error/OtherErrors';
import { WhirlerCore } from '../type/Whirler';
import { verifyClassName } from '../validation/verifyName';
export function convertWhirlerMap(whirles) {
    if (whirles && whirles.constructor === {}.constructor) {
        for (let i in whirles) {
            if (i !== '__proto__') {
                verifyClassName(i);
                if (!(whirles[i].prototype instanceof WhirlerCore))
                    throw new FormattedError(ExceptionMessages.SURE_WHIRLER);
            }
        }
        let keys = Object.keys(whirles);
        if (keys.length === 0)
            throw new FormattedError(ExceptionMessages.PROVIDE_WHIRLERS);
        else if (keys.length === 1)
            return whirles[keys[0]];
        else
            return whirles;
    }
    else
        throw new FormattedError(ExceptionMessages.INVALID_PARAMETER);
}
export function convertWhirlerArray(whirles) {
    let result = {};
    if (whirles.length === 0)
        throw new FormattedError(ExceptionMessages.PROVIDE_WHIRLERS);
    else if (whirles.length === 1) {
        if (whirles[0].prototype instanceof WhirlerCore)
            return whirles[0];
        else
            throw new FormattedError(ExceptionMessages.SURE_WHIRLER);
    }
    else {
        for (let i of whirles) {
            if (i.prototype instanceof WhirlerCore && i.name) {
                if (result[i.name] == null)
                    result[i.name] = i;
                else
                    throw new DuplicationError(ExceptionMessages.DUPLICATE_WHIRLER.replace('[WhirlerName]', i.name));
            }
            else
                throw new FormattedError(ExceptionMessages.SURE_WHIRLER);
        }
    }
    return result;
}
export function convertWhirles(whirles) {
    if (whirles.length === 1) {
        if (whirles[0] instanceof Array)
            whirles = convertWhirlerArray(whirles[0]);
        else
            whirles = convertWhirlerMap(whirles[0]);
    }
    else
        whirles = convertWhirlerArray(whirles);
    return whirles;
}
export function convertObjectToList(args) {
    if (args instanceof Array)
        return args;
    else if (typeof args === 'object') {
        let temp = [];
        for (let i of args)
            temp.push(i);
        return temp;
    }
    else
        return [];
}
