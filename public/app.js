"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listTemplate_js_1 = require("./classes/listTemplate.js");
const payment_js_1 = require("./classes/payment.js");
const invoice_js_1 = require("./classes/invoice.js");
const form = document.querySelector("#form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new listTemplate_js_1.listTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let docu;
    if (type.value === "Invoice" && tofrom.value != "" && details.value != "" && amount.value != "") {
        docu = new invoice_js_1.invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docu = new payment_js_1.payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(docu, type.value, 'end');
});
