declare class invoice {
    client: string;
    detail: string;
    amount: number;
    constructor(c: string, d: string, a: number);
    print(): string;
}
declare class payment {
    client: string;
    detail: string;
    amount: number;
    constructor(c: string, d: string, a: number);
    print(): string;
}
declare const form: HTMLFormElement;
declare const type: HTMLSelectElement;
declare const tofrom: HTMLInputElement;
declare const details: HTMLInputElement;
declare const amount: HTMLInputElement;
