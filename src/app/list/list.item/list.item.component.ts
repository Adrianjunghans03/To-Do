import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';





@Component({
    selector: 'app-list-item',
    templateUrl: './list.item.component.html',
    styleUrls: ['./list.item.component.css']
  })

  export class listItemComponent implements OnInit, OnChanges{
    @Output() getid = new EventEmitter();
    @Input() todoFromList:string = '';
    @Output() getcheck = new EventEmitter();

    //Import the variable that is assigned in HTML 
    @Input() sid:number;
    tasks: string;
    check: boolean = false;
    color:string;
    fontcolor:string;

    disabled = "";

    checkbox:boolean = false;
    checkboxclick()
    {
      this.checkbox =! this.check;
      this.getcheck.next(this.checkbox);
      
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
      console.log(this.tasks);
      console.log(this.sid);
      this.getid.next(this.sid);

    }
    
      constructor() { }
    
      ngOnInit(): void {
        
      }
      
      ngOnChanges()
      {
        this.tasks = this.todoFromList;

      }
    
    }