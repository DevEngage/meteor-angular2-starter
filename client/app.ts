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
import {CORE_DIRECTIVES} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';
import {StarsBackground} from './imports/stars/stars';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES, StarsBackground]
})
class App { 
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}

bootstrap(App);
