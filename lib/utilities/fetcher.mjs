import Fetch from 'whatwg-fetch';
import WhirlerMessages from '../constants/WhirlerMessages';
import WhirlerError from '../error/WhirlerError';
export default async function fetchQuery(url, header, body) {
    let headers = {
        ...header,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let response = await Fetch.fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    });
    if (response.ok) {
        let result = await response.json();
        if (result == null)
            throw new WhirlerError(WhirlerMessages.NO_RESPONSE);
        if (result.error === undefined && typeof result.data !== undefined) {
            return result.data;
        }
        else {
            if (result.error != null) {
                let error = {};
                if (typeof result.error.code === 'number') {
                    error.code = result.error.code;
                }
                if (typeof result.error.msg === 'string')
                    error.message = result.error.msg;
                if (error.message == null)
                    error = {
                        code: 1,
                        message: WhirlerMessages.UNKNOWN
                    };
                throw new WhirlerError(error);
            }
            throw new WhirlerError(WhirlerMessages.INCORRECT_RESPONSE);
        }
    }
    else {
        throw new WhirlerError({
            message: response.statusText,
            code: response.status,
            explain: response
        });
    }
}
//# sourceMappingURL=fetcher.js.map