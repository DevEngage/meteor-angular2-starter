import 'reflect-metadata';
import 'zone.js/dist/zone';
import { 
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate 
} from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';

@Component({
  selector: 'th3-stars-background',
  template: `
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  `,
  directives: []
})
export class StarsBackground extends MeteorComponent  { 
  
}
