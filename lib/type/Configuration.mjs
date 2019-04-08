export default class Configuration {
    constructor(config) {
        if (config && config.url)
            this.url = config.url;
    }
}
