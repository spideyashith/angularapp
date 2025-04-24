import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  imports: [],
  template: '<h1>{{message}}</h1>',
  styleUrl: './hello-angular.component.css'
})
export class HelloAngularComponent {
  message: string = 'Hello Angular!';
}


