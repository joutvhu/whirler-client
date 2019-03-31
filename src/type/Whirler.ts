import fetchQuery from '../fetch/fetcher';
import preventOverride from '../validation/preventOverride';

export default class Whirler {
    private __config: any;

    constructor(config: any) {
        this.__config = config;
        preventOverride(this);
    }

    protected async call(func : String, args: any[]) {
        let header: any = {};
        if(this.__config.token) header['Authorization'] = 'Bearer ' + this.__config.token;
        let result = await fetchQuery(this.__config.url, header, { func, args });
        return result;
    }
}
