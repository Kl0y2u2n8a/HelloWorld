import { hasFormat } from "../interface/hasFormat.js";

export class payment implements hasFormat{
    client: string;
    detail: string;
    amount: number;

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    format(){
        return this.client +' pay ￥'+ this.amount +' for ' + this.detail;
    }
}