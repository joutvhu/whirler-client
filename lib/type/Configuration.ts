export default class Configuration {
    public url: string;

    constructor(config: any) {
        if (config && config.url)
            this.url = config.url;
    }
}
