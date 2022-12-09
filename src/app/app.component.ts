import { Component, OnInit} from '@angular/core';
import { CountService } from './services/count.service';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';
import { RootState } from './todo.reducer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountService]
})
export class AppComponent implements OnInit{

  count$ = this.store.select('rootValue').pipe(map((s => {
    return s.toDos.length
  })))
  title = 'To-Do';

  // counter(count: number)
  // {
  //   this.count$ = count+1;
  // }



  constructor(private store:Store<{rootValue:RootState}>){

  }



    ngOnInit(): void {



    }




}



