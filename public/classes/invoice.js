"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = void 0;
var invoice = /** @class */ (function () {
    function invoice(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    invoice.prototype.format = function () {
        return this.client + ' owes ￥' + this.amount + ' for ' + this.detail;
    };
    return invoice;
}());
exports.invoice = invoice;
