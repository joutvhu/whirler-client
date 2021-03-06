export default function getAllPropertyNames(obj) {
    let result = [];
    let temp;
    try {
        while (obj && obj.constructor !== Object) {
            temp = Object.getOwnPropertyNames(obj);
            for (let i of temp) {
                if (result.indexOf(i) === -1)
                    result.push(i);
            }
            obj = Object.getPrototypeOf(obj);
        }
    }
    catch (e) {
        // continue regardless of error
    }
    return result;
}
