import { hasFormat } from "../interface/hasFormat.js";

export class invoice implements hasFormat{
    client: string;
    detail: string;
    amount: number;

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    format(){
        return this.client +' owes ￥'+ this.amount +' for ' + this.detail;
    }
}