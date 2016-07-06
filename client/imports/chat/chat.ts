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
import { IChat, Chat } from '../../../collections/chat';
import { Mongo } from 'meteor/mongo';

@Component({
  selector: 'chat',
  template: `
  <div class="container col-md-offset-4">
    <div class="chat-container col-md-6">
      <div class="chat-content">
        <div *ngFor="let chatLine of chat">
          <p>{{chatLine.body}}</p>
        </div>
      </div>
      <div class="chat-input-container">
        <input class="chat-input col-md-10" type="text" placeholder="Start Chatting" [(ngModel)]="message">
        <button class="btn btn-success btn-sm col-md-2" (click)="addMessage(message)">Send</button>
      </div>
    </div>
  </div>
  `,
  directives: [],
  styles: [`
    .chat-container {
        height: 500px;
        border: 2px solid black;
        background-color: #fff;
    }

    .chat-content {
        height: calc(100% - 35px);
    }

    .chat-input {
        
        display: inline-block;
        border: none;
        padding: 5px;
    }

    .chat-input:focus {
        outline: none;
    }

    .chat-input-container {
        border-top: 1px solid darkslategray;
        width: 100%;
    }

    .chat-input-container .btn {
        margin-top: 2px;
        // margin-left: -1px;
    }
  `]
})
export class ChatComponent extends MeteorComponent  { 
  chat: Mongo.Cursor<IChat>;
  message: string;
  constructor() {
    super();

    this.chat = Chat.find();

  }

  addMessage (body) {
    Chat.insert({
      body: body
    })
    this.message = '';
  }
  

}
