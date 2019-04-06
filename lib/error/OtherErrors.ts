export class FormattedError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'Formatted Error';
    }
}

export class OverridingError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'Overriding Error';
    }
}

export class DuplicationError extends Error {
    constructor(message?: string) {
        super(message);
        this.name = 'Duplication Error';
    }
}
