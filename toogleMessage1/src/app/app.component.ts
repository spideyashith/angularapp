import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'toogleMessage1';
  isMessageVisible: boolean = false;

  toogleMessage1(){
    this.isMessageVisible = !this.isMessageVisible;
  }
}
