"use strict";
class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    print() {
        return this.client + ' owes ￥' + this.amount + ' for ' + this.detail;
    }
}
class payment {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    print() {
        return this.client + ' pay ￥' + this.amount + ' for ' + this.detail;
    }
}
const form = document.querySelector("#form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value === "Invoice" && tofrom.value != "" && details.value != "" && amount.value != "") {
        const inv = new invoice(tofrom.value, details.value, amount.valueAsNumber);
        console.log(inv.print());
    }
    else if (type.value === "Payment" && tofrom.value != "" && details.value != "" && amount.value != "") {
        const pm = new payment(tofrom.value, details.value, amount.valueAsNumber);
        console.log(pm.print());
    }
});
//# sourceMappingURL=app.js.map