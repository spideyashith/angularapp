import { Component } from '@angular/core';

@Component({
  selector: 'app-student-details',
  standalone: false,
  
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  students = [
    { name: 'Rahul', age:'25', course:'Msc'},
    { name: 'Carol', age:'23', course:'MCA'},
    { name: 'Brian', age:'20', course:'MBA'}

  ];

}


