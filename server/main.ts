import 'collections/pidgeons';
import {LoadPidgeons as lp} from './setup/load-pidgeons';
import './pidgeons.publish'
 
Meteor.startup(lp.insertFakePidgeons);