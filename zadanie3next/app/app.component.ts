import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="box" (mouseenter)="onEvent($event)"
                         (mouseleave)="onEvent($event)"
                         (mousemove)="coordinates($event)"
                         on-click="onEvent($event)"
                         on-dblclick="onEvent($event)"
                         on-contextmenu="onEvent($event)">
            <p class="type">Type: {{event?.type}}</p>    
            <p>x: {{clientX}}, y: {{clientY}}</p>
 
            <p>ctrl: {{event?.ctrlKey}}, shift: {{event?.shiftKey}}, meta: {{event?.metaKey}}</p>
        </div>`,
    styles: [
        '.box {width:100%; height:100px;}',
        '.type {font-size: 30px;}',

    ]
})
export class MouseComponent {

    private event: MouseEvent;
    private clientX = 0;
    private clientY = 0;
    private width = 0;
    private height = 0;

    private onEvent(event: MouseEvent): void {
        this.event = event;
    }

    



    private coordinates(event: MouseEvent): void {
        this.clientX = event.clientX;
        this.clientY = event.clientY;
    }
}