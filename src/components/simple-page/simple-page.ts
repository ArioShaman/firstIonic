import { Component } from '@angular/core';

/**
 * Generated class for the SimplePageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'simple-page',
  templateUrl: 'simple-page.html'
})
export class SimplePageComponent {

  text: string;

  constructor() {
    console.log('Hello SimplePageComponent Component');
    this.text = 'Hello World';
  }

}
