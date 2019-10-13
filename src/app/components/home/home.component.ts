import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Key } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {
 
  data={
    todo:['Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'],
    done:[ 'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'],
    Test:['h',
    'b',
    'c',
    'dl',
    'qwe']
  }
  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        Object.keys(this.data).forEach(i=>{
                      localStorage.setItem(i,JSON.stringify(this.data[i]));
                    
                    
                    
                    
                    
                        });
    }
  }







  addTodo(todo){
    //console.log(todo.value);
      this.data.todo.push(todo.value);
      todo.value="";
      localStorage.setItem('todo',JSON.stringify(this.data.todo));
  }
  setItems(){

    Object.keys(this.data).forEach(i=>{
      if(!localStorage.getItem(i)){
        localStorage.setItem(i,JSON.stringify(this.data[i]))
      }
    });


    localStorage.setItem('todo',JSON.stringify(this.data.todo));
    localStorage.setItem('done',JSON.stringify(this.data.done));
    localStorage.setItem('Test',JSON.stringify(this.data.Test));

  }
}
