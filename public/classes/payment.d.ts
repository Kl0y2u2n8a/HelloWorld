import { hasFormat } from "../interface/hasFormat";
export declare class payment implements hasFormat {
    client: string;
    detail: string;
    amount: number;
    constructor(c: string, d: string, a: number);
    format(): string;
}
