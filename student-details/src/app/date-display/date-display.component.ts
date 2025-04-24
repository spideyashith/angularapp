import { Component } from '@angular/core';

@Component({
  selector: 'app-date-display',
  standalone: false,
  
  templateUrl: './date-display.component.html',
  styleUrl: './date-display.component.css'
})
export class DateDisplayComponent {
  currentDate: Date = new Date();

}



