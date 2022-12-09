import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { listItemComponent } from './list/list.item/list.item.component';
import { todoReducer } from './todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
//import { todoReducer } from './todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    listItemComponent,
    InputComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ rootValue: todoReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
