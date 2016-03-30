import '../collections/pidgeons';
import './publications/pidgeons.publish';
import {LoadPidgeons} from './setup/load-pidgeons.startup';
 
Meteor.startup(() => {
    LoadPidgeons.insertFakePidgeons();
});