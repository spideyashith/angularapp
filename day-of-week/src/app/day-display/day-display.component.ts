import { Component } from '@angular/core';

@Component({
  selector: 'app-day-display',
  standalone: false,
  
  templateUrl: './day-display.component.html',
  styleUrl: './day-display.component.css'
})
export class DayDisplayComponent {
  dayNumber: number = 1;     //default value

}
