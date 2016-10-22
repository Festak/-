"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var MouseComponent = (function () {
    function MouseComponent() {
        this.clientX = 0;
        this.clientY = 0;
        this.width = 0;
        this.height = 0;
    }
    MouseComponent.prototype.onEvent = function (event) {
        this.event = event;
    };
    MouseComponent.prototype.coordinates = function (event) {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    };
    MouseComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <div class=\"box\" (mouseenter)=\"onEvent($event)\"\n                         (mouseleave)=\"onEvent($event)\"\n                         (mousemove)=\"coordinates($event)\"\n                         on-click=\"onEvent($event)\"\n                         on-dblclick=\"onEvent($event)\"\n                         on-contextmenu=\"onEvent($event)\">\n            <p class=\"type\">Type: {{event?.type}}</p>    \n            <p>x: {{clientX}}, y: {{clientY}}</p>\n \n            <p>ctrl: {{event?.ctrlKey}}, shift: {{event?.shiftKey}}, meta: {{event?.metaKey}}</p>\n        </div>",
            styles: [
                '.box {width:100%; height:100px;}',
                '.type {font-size: 30px;}',
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MouseComponent);
    return MouseComponent;
}());
exports.MouseComponent = MouseComponent;
//# sourceMappingURL=app.component.js.map