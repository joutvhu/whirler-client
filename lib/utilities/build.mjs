import Props from '../type/Props';
export default function build(whirler, config) {
    const props = new Props(config);
    return new whirler(props);
}
