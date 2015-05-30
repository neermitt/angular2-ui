import {Component, View} from 'angular2/angular2';


@Component({
  selector: 'alert'
})
@View({
  template: '<h1>Hello {{name}}</h1>'
})
export class AlertComponent {
  name:string;

  constructor() {
    this.name = 'Alice';
  }
}
