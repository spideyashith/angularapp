import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamicbinding',
  standalone: false,
  
  templateUrl: './dynamicbinding.component.html',
  styleUrl: './dynamicbinding.component.css'
})
export class DynamicbindingComponent {
  userInput: string = ''; 
}
