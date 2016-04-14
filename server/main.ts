import '../collections/pigeons';
import './publications/pigeons.publish';
import {LoadPigeons} from './setup/load-pigeons.startup';
 
Meteor.startup(() => {
    LoadPigeons.insertFakePigeons();
});