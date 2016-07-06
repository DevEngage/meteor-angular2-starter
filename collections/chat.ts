import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export interface IChat {
  _id?: string;
  body: string;
  description?: string;
  owner?: string;
}

export let Chat = new Mongo.Collection<IChat>('chat');

// Chat.allow({
//   insert: function() {
//     let user = Meteor.user();
    
//     return !!user;
//   },
//   update: function() {
//     let user = Meteor.user();
    
//     return !!user;
//   },
//   remove: function() {
//     let user = Meteor.user();
    
//     return !!user;
//   }
// });
