import {fetch} from 'whatwg-fetch';
import WhirlerError from '../error/WhirlerError';

export default async function fetchQuery(url: String, header: any, body: any) {
    let headers = {
        ...header,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };
    let response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    });
    if (response.ok) {
        let result = await response.json();
        if (result == null) throw new WhirlerError('Don\'t have the response.');
        if (result.error === undefined && typeof result.data !== undefined) {
            return result.data;
        } else {
            if (result.error != null) {
                let error: any = {};
                if (typeof result.error.code === 'number') {
                    error.code = result.error.code;
                }
                if (typeof result.error.msg === 'string')
                    error.message = result.error.msg;
                if (error.message == null) error = {
                    code: 1,
                    message: 'An unknown error has occurred.'
                };
                throw new WhirlerError(error);
            }
            throw new WhirlerError('Incorrect response format.');
        }
    } else {
        throw new WhirlerError({
            message: response.statusText,
            code: response.status,
            explain: response
        });
    }
}
