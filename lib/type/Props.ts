import Configuration from "./Configuration";
import {WhirlerCore} from "./Whirler";

export default class Props {
    private __config: Configuration;
    private __headers: any;
    private __namespace: string | string[];
    private __packages?: any;
    private __parent: WhirlerCore;
    private __this: WhirlerCore;

    constructor(config: Configuration, parent?: WhirlerCore, namespace?: string | string[]) {
        this.__config = config;
        if (parent && namespace) {
            this.__parent = parent;
            this.__namespace = namespace;
        }
    }

    public get config(): Configuration {
        return this.__config;
    }

    public get headers(): any {
        return this.__headers;
    }

    public get namespace(): string | string[] {
        return this.__namespace;
    }

    public get parent(): WhirlerCore {
        return this.__parent;
    }

    public get current(): WhirlerCore {
        return this.__this;
    }

    public get endpoint() {
        if(this.__config)
            return this.__config.url;
        else return null;
    }

    public get authorization(): string {
        if (!this.__headers)
            this.__headers = {};
        return this.__headers.Authorization;
    }

    public set authorization(value: string) {
        if (this.__headers)
            this.__headers.Authorization = value;
        else this.__headers = {
            Authorization: value
        };

        if (this.__packages) {
            for (let i of this.__packages)
                i.props.authorization = value;
        }
    }

    public propsFor(name: string): Props {
        let namespace: string | string[] = name;
        if (this.__namespace) {
            if (typeof this.__namespace)
                namespace = this.__namespace + '.' + name;
            else if (this.__namespace instanceof Array)
                namespace = [
                    ...this.__namespace,
                    name
                ];
        }
        return new Props(this.__config, this.__this, namespace);
    }
}
