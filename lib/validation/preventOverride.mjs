import ExceptionMessages from '../constants/ExceptionMessages';
import { OverridingError } from '../error/OtherErrors';
export function preventOverrideClass(sighClass, sighObj, except) {
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
            throw new OverridingError(ExceptionMessages.OVERRIDE_CLASS.replace('[ClassName]', sighClass['name']));
    }
}
export function preventOverrideFunction(sighClass, functions, sighObj) {
    let obj = sighObj;
    while (obj instanceof sighClass) {
        for (let i of functions) {
            if (typeof i === 'string' && obj.hasOwnProperty(i))
                throw new OverridingError(ExceptionMessages.OVERRIDE_FUNCTION.replace('[FunctionName]', i)
                    .replace('[ClassName]', sighClass['name']));
        }
        if (sighObj['__proto__'] != null)
            obj = obj['__proto__'];
        else
            break;
    }
}
