export default class WhirlerError extends Error {
    public code: number;
    public explain: any;

    constructor(error: string | any) {
        if (typeof error === 'string') {
            super(error);
            this.message = error;
        } else if (typeof error.message === 'string') {
            super(error.message);
            this.message = error.message;
            if (typeof error.code === 'number')
                this.code = error.code;
            if (error.explain != null)
                this.explain = error.explain;
        } else super();
    }
}
