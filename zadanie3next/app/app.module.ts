import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { MouseComponent }   from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MouseComponent],
    bootstrap: [MouseComponent]
})
export class AppModule { }