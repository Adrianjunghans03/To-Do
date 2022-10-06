import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

// @Output: Data Flow from Child(Input) to Parent(App)
// EventEmitter: is used to emit events when the input changes.
@Output() onDailyTaskChanged = new EventEmitter();
DailyTask = '';



btncl()
{

  //sets the variable to the value of the current Event dynamically
  this.onDailyTaskChanged.next(this.DailyTask);
  this.DailyTask = '';
}


  constructor() { }

  ngOnInit(): void {


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
