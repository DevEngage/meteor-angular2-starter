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
  selector: 'profile',
  template: `
  <div class="jumbotron">
  <h1 class="display-3">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="m-y-2">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>
  `,
  directives: []
})
export class ProfileComponent extends MeteorComponent  { 
  
}
