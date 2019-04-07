export default interface Configer {
    url?: string;
    parent?: any;
    namespace?: string | string[] | Array<string>;
    authorization?: string;
}
