import ErrorMessages from '../constants/ErrorMessages';
import {OverridingError} from '../error/OtherErrors';
import {WhirlerCore} from '../type/Whirler';

export function preventOverrideClass(sighClass: any, sighObj: WhirlerCore, except?: any[]) {
    if (sighObj != null && sighObj['__proto__'] instanceof sighClass) {
        let error = true;
        if (except) {
            for (let i of except) {
                if (sighObj instanceof i) {
                    error = false;
                    break;
                }
            }
        }
        if (error)
            throw new OverridingError(ErrorMessages.OVERRIDE_CLASS.replace('[ClassName]', sighClass['name']));
    }
}

export function preventOverrideFunction(sighClass: any, functions: string[], sighObj: WhirlerCore) {
    let obj = sighObj;

    while (obj instanceof sighClass) {
        for (let i of functions) {
            if (typeof i === 'string' && obj.hasOwnProperty(i))
                throw new OverridingError(ErrorMessages.OVERRIDE_FUNCTION.replace('[FunctionName]', i)
                    .replace('[ClassName]', sighClass['name']));
        }

        if (sighObj['__proto__'] != null)
            obj = obj['__proto__'];
        else break;
    }
}
