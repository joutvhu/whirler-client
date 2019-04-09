export default class Props {
    constructor(config, parent, namespace) {
        this.__config = config;
        if (parent && namespace) {
            this.__parent = parent;
            this.__namespace = namespace;
        }
    }
    get config() {
        return this.__config;
    }
    get headers() {
        return this.__headers;
    }
    get namespace() {
        return this.__namespace;
    }
    get parent() {
        return this.__parent;
    }
    get current() {
        return this.__this;
    }
    get endpoint() {
        if (this.__config)
            return this.__config.url;
        else
            return null;
    }
    get authorization() {
        if (!this.__headers)
            this.__headers = {};
        return this.__headers.Authorization;
    }
    set authorization(value) {
        if (this.__headers)
            this.__headers.Authorization = value;
        else
            this.__headers = {
                Authorization: value
            };
        if (this.__packages) {
            for (let i of this.__packages)
                i.props.authorization = value;
        }
    }
    propsFor(name) {
        let namespace = name;
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
