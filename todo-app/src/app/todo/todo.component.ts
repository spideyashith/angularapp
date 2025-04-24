import { Component } from '@angular/core';
import { Task } from './task.model';
import { title } from 'process';

@Component({
  selector: 'app-todo',
  standalone: false,
  
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  tasks: Task[]=[
    {id: 1, title: 'Learn Angular', completed:false},
    {id: 2, title: 'Build a To-Do App', completed: false},
  ];
  newTaskTitle: string ='';
  editTaskId: number | null = null;


  addTask(){
    if(this.newTaskTitle.trim()){
      const newTask: Task ={
        id: this.tasks.length+1,
        title:this.newTaskTitle,
        completed:false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle  = '';
    }
  }
  editTask(task: Task){
    this.editTaskId = task.id;
    this.newTaskTitle=task.title;
  }
  updateTask(){
    if(this.editTaskId!=null){
      const task = this.tasks.find(t=>t.id == this.editTaskId);
      if(task){
        task.title = this.newTaskTitle;
        this.newTaskTitle='';
        this.editTaskId=null;
      }
    }
  }

  deleteTask(taskId: number){
    this.tasks = this.tasks.filter(task => task.id!=taskId);
  }


toogleCompletion(task: Task){
  task.completed = !task.completed;
}

  }



