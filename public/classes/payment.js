"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
class payment {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return this.client + ' pay ￥' + this.amount + ' for ' + this.detail;
    }
}
exports.payment = payment;
