import { hasFormat } from './interface/hasFormat.js';
import { listTemplate } from './classes/listTemplate.js';
import { payment } from './classes/payment.js';
import { invoice } from './classes/invoice.js';

const form = document.querySelector("#form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new listTemplate(ul);

form.addEventListener("submit", (e: Event) =>{
    e.preventDefault();
    
    let docu : hasFormat;
    if(type.value === "Invoice" && tofrom.value!="" && details.value!="" && amount.value!=""){
        docu = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else{
        docu = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(docu,type.value, 'end');
});
