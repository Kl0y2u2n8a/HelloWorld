"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTemplate = void 0;
class listTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
            console.log('start: ' + item.format());
        }
        else {
            this.container.append(li);
            console.log('end: ' + item.format());
        }
    }
}
exports.listTemplate = listTemplate;
