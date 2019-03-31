export default class WhirlerError extends Error {
    code: number;
    explain: any;
    constructor(error: string | any);
}
