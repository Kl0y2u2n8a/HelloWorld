"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTemplate = void 0;
var listTemplate = /** @class */ (function () {
    function listTemplate(container) {
        this.container = container;
    }
    listTemplate.prototype.render = function (item, heading, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
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
    };
    return listTemplate;
}());
exports.listTemplate = listTemplate;
