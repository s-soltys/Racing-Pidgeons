import 'collections/pidgeons';
import {loadPidgeons} from './setup/load-pidgeons';
import './pidgeons.publish'
 
Meteor.startup(loadPidgeons);