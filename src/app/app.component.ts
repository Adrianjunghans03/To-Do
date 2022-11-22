import { Component, OnInit} from '@angular/core';
import { CountService } from './services/count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CountService]
})
export class AppComponent implements OnInit{  

  title = 'To-Do';
  number:number = 0;
  todoFromInputChild = null;
  // currentCount$:Observable<number>;

  //API


  posts:any;
  


  constructor(private countservice: CountService){

  }

  recieveCount(): void {
    this.countservice.Counter.subscribe((counter) => this.number = counter);
    console.log(this.number)
    }
  
    ngOnInit(): void {
      // this.currentCount$ = this.countservice.Counter;
      this.recieveCount();

    }



  
//Function stores Data recieved from Input in todoFromChild
//then assigns it to todoFromInputChild
  onDailyTaskChangedParent(todoFromChild:string){  
    this.todoFromInputChild =  todoFromChild;

  }

  
}



