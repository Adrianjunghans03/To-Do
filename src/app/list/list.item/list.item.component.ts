import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { buffer, map, Observable, ReplaySubject } from 'rxjs';

import { props, Store } from '@ngrx/store';
import { RootState } from 'src/app/todo.reducer';
import { deleting } from 'src/app/todo.actions';



@Component({
    selector: 'app-list-item',
    templateUrl: './list.item.component.html',
    styleUrls: ['./list.item.component.css']
  })

  export class listItemComponent implements OnInit, OnChanges{

@Input() set task(val:{id:number;value:string}){
this.task$.next(val);
}

    task$ = new ReplaySubject<{id:number;value:string}>(1);

    todoReducer: object;

    tasks = [{id:0, value:""}];
    check: boolean = false;
    color:string;
    fontcolor:string;
    obj = { id: 0, value: ""};

    checkbox:boolean = false;

    cbClick()
    {

      this.checkbox =! this.check;
      //if Checkbox is checked then grey it out
      if(this.checkbox == true)
      {
      this.color="rgba(230, 230, 230, 0.3)";
      this.fontcolor="rgba(200, 200, 200, 0.3)";

      console.log(this.fontcolor);

      }
      else
      this.color=" #ffcec3 ";
      this.fontcolor ="black";
    }

    Delete()
    {
      this.task$.subscribe(resp => this.obj = resp);
      this.store.dispatch(deleting({id: this.obj.id}));
    }

    constructor(private store: Store<{rootValue:RootState}>) {
    }

      ngOnInit(): void {
      }

      ngOnChanges()
      {


      }

    }
