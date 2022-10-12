import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Task} from '../Task/task.model'
import { CountService } from '../services/count.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

  
})
export class ListComponent implements OnInit, OnChanges {

  //takes input from app and stores it in todoFromParent
  @Input() todoFromParent:any = 'null';

  
  singleid:number;
  idback = null;
  //countednumber:number = null;

  constructor(private countService: CountService) { }



  getidparent(id:number)
  {
    this.idback = id;
    const newCreatedTasks= this.myTasks.filter(eachTask => eachTask.id!==id)
    this.myTasks = newCreatedTasks
    console.log(this.myTasks)
    
  }

  updateCounter():void  {
    
    const countednumber = this.myTasks.length;
    this.countService.Counter.next(countednumber);
    console.log(this.myTasks);
    console.log(countednumber);
  }

  myTasks: Task[] = [
  ];
  
  ngOnInit(): void {
  
    //To delete first item in Array
    this.myTasks = [];
  }


  ngOnChanges():void{  

  //Single Components from Model get Stored in array
  
    if(!this.todoFromParent){
      return
    }

    const todoListItem:Task = {dailyTask:this.todoFromParent,checked:false, id: this.myTasks.length +1};
    this.myTasks = this.myTasks.concat([todoListItem]);
    this.singleid = todoListItem.id -1;
    this.updateCounter();





}
}
