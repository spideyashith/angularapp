import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: false,
  
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  students: string[] = ['Rahul','Carol','Brian'];
  newStudent: string = '';

  addStudent(){
    if(this.newStudent.trim()){
      this.students.push(this.newStudent.trim());
      this.newStudent = '';
    }
  }

}


