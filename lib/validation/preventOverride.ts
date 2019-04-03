import Whirler from '../type/Whirler';

export default function preventOverride(sighObj: Whirler): void {
    if (sighObj['__proto__'] != null) {
        let obj: any = sighObj['__proto__'];

        while (obj instanceof Whirler) {
            if (obj.hasOwnProperty('call'))
                throw new Error('You can\'t override the call function in any subclasses of the Whirler class.');
            obj = obj['__proto__'];
        }
    }
}
