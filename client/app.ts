import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  provide } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {CORE_DIRECTIVES, APP_BASE_HREF} from '@angular/common';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap';
import {StarsBackground} from './imports/stars/stars';
import { APP_ROUTER_PROVIDERS } from './imports/app.routes';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: '/client/app.html',
  directives: [ROUTER_DIRECTIVES, DROPDOWN_DIRECTIVES, CORE_DIRECTIVES, StarsBackground]
})
class App { 
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public items:Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];
  public title: string = 'Meteor-Angular 2'

  public toggled(open:boolean):void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}

bootstrap(App, [
  APP_ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' })
]);
