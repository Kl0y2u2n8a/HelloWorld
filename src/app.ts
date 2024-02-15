class invoice{
    client: string;
    detail: string;
    amount: number;

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    print(){
        return this.client +' owes ￥'+ this.amount +' for ' + this.detail;
    }
}

class payment{
    client: string;
    detail: string;
    amount: number;

    constructor(c:string, d:string, a:number) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }

    print(){
        return this.client +' pay ￥'+ this.amount +' for ' + this.detail;
    }
}

const form = document.querySelector("#form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) =>{
    e.preventDefault();
    
    if(type.value === "Invoice" && tofrom.value!="" && details.value!="" && amount.value!=""){
        const inv = new invoice(tofrom.value, details.value, amount.valueAsNumber);
        console.log(inv.print());
    }
    else if(type.value === "Payment" && tofrom.value!="" && details.value!="" && amount.value!=""){
        const pm = new payment(tofrom.value, details.value, amount.valueAsNumber);
        console.log(pm.print());
    }
});
