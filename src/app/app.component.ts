import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do';
  todoFromInputChild = null;

  
//Function stores Data recieved from Input in todoFromChild
//then assigns it to todoFromInputChild
  onDailyTaskChangedParent(todoFromChild:string){  
    this.todoFromInputChild =  todoFromChild;

  }


}
