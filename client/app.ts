import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html'
})
class App { }

bootstrap(App);
