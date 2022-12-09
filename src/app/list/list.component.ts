import { Component, OnInit} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { initialState, RootState } from '../todo.reducer';
import { props, Store } from '@ngrx/store';
import { map } from 'rxjs';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],



})
export class ListComponent implements OnInit {

  tasks = [{id:0, value:""}];

  tasks$=this.store.select('rootValue').pipe(map((gs) => gs.toDos));
  taskID$ = this.tasks$.pipe(map(tasks => tasks.map(t => t.id)))

    todoReducer: object;
  constructor(private store: Store<{rootValue:RootState}>) {   }

  ngOnInit(): void {
    // this.tasks$ = this.store.select('rootValue').pipe(map((gs) => gs.toDos));
    // this.tasksID$ = this.tasks$.pipe(map(tasks => tasks.map(t => t.id)))
    // this.tasks$.subscribe(t => this.taskID = t);
  }






}
