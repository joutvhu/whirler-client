import Props from './Props';
export declare class WhirlerCore {
    protected __props: Props;
    readonly props: Props;
    constructor(props: Props);
}
export declare class Whirler extends WhirlerCore {
    constructor(props: Props);
    protected call(func: string, args?: any[]): Promise<any>;
}
export declare class WhirlerBundle extends WhirlerCore {
    protected __whirles: any;
    constructor(props: Props);
}
