import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {Task} from '../Task/task.model'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  //takes input from app and stores it in todoFromParent
  @Input() todoFromParent:any = 'null';

  
  singleid:number;
  idback = null;
  checked = false;
  sample:number;

  getidparent(id:number)
  {
    this.idback = id;

    const newCreatedTasks= this.myTasks.filter(eachTask => eachTask.id!==id)
    this.myTasks = newCreatedTasks
    console.log(this.myTasks)
  }

  getchecked(check:boolean)
  {
    this.checked = check;
    this.check(this.checked);
    console.log(this.checked);
  }

  myTasks: Task[] = [
  ];
  
  check(sample)
  {
    if(sample == true)
    {
      
    }
  }

  // delete()
  // {
  
  //   console.log(this.idback)
  //   this.myTasks.splice(this.idback-1, 0);
  //   if(this.myTasks.length[1])
  //   {
  //     this.myTasks = [];
  //   }

  
  // }
  constructor() { }
  
  button()
  {


  }

  ngOnInit(): void {
  
    //To delete first item in Array
    this.myTasks.splice(0,1,);
  }

  // map, reduce, filter, concat, includes (Array methods)
  // avoid mutation of arrays

  ngOnChanges():void{
    console.log(this.todoFromParent);  

  //Single Components from Model get Stored in array
    const todoListItem:Task = {dailyTask:this.todoFromParent,checked:false, id: this.myTasks.length +1};
    this.myTasks = this.myTasks.concat([todoListItem]);
    this.singleid = todoListItem.id -1;

    console.log(this.myTasks);

    console.log(todoListItem.checked);
}
}
