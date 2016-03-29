import '../collections/pidgeons';
import './pidgeons.publish';
import {LoadPidgeons as lp} from './setup/load-pidgeons';
 
Meteor.startup(() => {
    lp.insertFakePidgeons();
});