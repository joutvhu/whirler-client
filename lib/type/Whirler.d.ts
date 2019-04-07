import Configer from './Configer';
export declare class WhirlerCore {
    protected __config: Configer;
    constructor(config?: Configer);
}
export declare class Whirler extends WhirlerCore {
    constructor(config?: Configer);
    protected call(func: String, args: any[]): Promise<any>;
}
export declare class WhirlerBundle extends WhirlerCore {
    constructor(config?: Configer);
}
