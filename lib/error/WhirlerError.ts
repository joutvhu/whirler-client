export default class WhirlerError extends Error {
    public code: number;
    public explain: any;

    constructor(error: string | any) {
        if (typeof error === 'string')
            super(error);
        else if (typeof error.message === 'string') {
            super(error.message);
            if (typeof error.code === 'number')
                this.code = error.code;
            if (error.explain != null)
                this.explain = error.explain;
        } else super();
        this.name = 'Whirler Error';
    }
}
