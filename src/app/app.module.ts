import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { listItemComponent } from './list/list.item/list.item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    listItemComponent,
    InputComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
