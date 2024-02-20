"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = void 0;
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return this.client + ' owes ￥' + this.amount + ' for ' + this.detail;
    }
}
exports.invoice = invoice;
