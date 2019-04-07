import {WhirlerCore} from '../type/Whirler';

export default function build(whirler: typeof WhirlerCore, config?: any) {
    return new whirler(config);
}