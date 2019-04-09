import Configuration from '../type/Configuration';
import Props from '../type/Props';
import {WhirlerCore} from '../type/Whirler';

export default function build(whirler: typeof WhirlerCore, config: Configuration): WhirlerCore {
    const props = new Props(config);
    return new whirler(props);
}
