"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
var payment = /** @class */ (function () {
    function payment(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    payment.prototype.format = function () {
        return this.client + ' pay ￥' + this.amount + ' for ' + this.detail;
    };
    return payment;
}());
exports.payment = payment;
