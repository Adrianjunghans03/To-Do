import { Component,OnInit, Output, EventEmitter} from '@angular/core';
import { props, Store } from '@ngrx/store';
import { adding, deleting } from '../todo.actions';
import { RootState, todoReducer } from '../todo.reducer';
import { map, Observable, of, ReplaySubject } from 'rxjs';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

// @Output: Data Flow from Child(Input) to Parent(App)
// EventEmitter: is used to emit events when the input changes.


initialId = 0;
DailyTask = '';

counter$: Observable<number>;

@Output() Counter = new EventEmitter();



btncl()
{

  console.warn('dispatch called')
  this.store.dispatch(adding({id: this.initialId,value: this.DailyTask }))
  this.DailyTask = '';
  this.Counter.next(this.initialId);
  this.initialId++;

}



  constructor(private store: Store<RootState>) { }

  ngOnInit(): void {




//Enterbtn
    document.addEventListener('keydown', (e: KeyboardEvent) =>
    {
      if (e.keyCode === 13 ) {
        this.btncl();
    }
  })


  }
  ngOnChanges(){

  }

}
