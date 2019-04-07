import Props from '../type/Props';
import {WhirlerCore} from '../type/Whirler';

export default function build(whirler: typeof WhirlerCore, props?: Props) {
    return new whirler(props);
}