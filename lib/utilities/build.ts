import Props from '../type/Props';
import {WhirlerCore} from '../type/Whirler';

export default function build(whirler: typeof WhirlerCore, props?: Props): WhirlerCore {
    return new whirler(props);
}
