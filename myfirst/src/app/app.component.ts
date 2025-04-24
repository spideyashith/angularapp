import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloAngularComponent } from "./hello-angular/hello-angular.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloAngularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myfirst';
}
