import Props from './Props';
export declare class WhirlerCore {
    protected __props: Props;
    constructor(props?: Props);
}
export declare class Whirler extends WhirlerCore {
    constructor(config?: Props);
    protected call(func: String, args?: any[]): Promise<any>;
}
export declare class WhirlerBundle extends WhirlerCore {
    protected __packages: any;
    constructor(props?: Props);
}
