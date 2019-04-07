import {WhirlerCore} from '../type/Whirler';

export default function getAllPropertyNames(obj: WhirlerCore) {
    let result: any[] = [], temp;
    try {
        while (obj && obj.constructor !== Object) {
            temp = Object.getOwnPropertyNames(obj);
            for (let i of temp) {
                if (result.indexOf(i) === -1)
                    result.push(i);
            }

            obj = Object.getPrototypeOf(obj);
        }
    } catch (e) {
        // continue regardless of error
    }
    return result;
}