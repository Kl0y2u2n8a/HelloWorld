"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var listTemplate_js_1 = require("./classes/listTemplate.js");
var payment_js_1 = require("./classes/payment.js");
var invoice_js_1 = require("./classes/invoice.js");
var form = document.querySelector("#form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
var ul = document.querySelector('ul');
var list = new listTemplate_js_1.listTemplate(ul);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var docu;
    if (type.value === "Invoice" && tofrom.value != "" && details.value != "" && amount.value != "") {
        docu = new invoice_js_1.invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        docu = new payment_js_1.payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(docu, type.value, 'end');
});
