import Configuration from "./Configuration";
import { WhirlerCore } from "./Whirler";
export default class Props {
    private __config;
    private __headers;
    private __namespace;
    private __packages?;
    private __parent;
    private __this;
    constructor(config: Configuration, parent?: WhirlerCore, namespace?: string | string[]);
    readonly config: Configuration;
    readonly headers: any;
    readonly namespace: string | string[];
    readonly parent: WhirlerCore;
    authorization: string;
    propsFor(name: string): Props;
}
