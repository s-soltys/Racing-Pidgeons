import {Component, View, NgZone} from 'angular2/core';
 
import {bootstrap} from 'angular2-meteor';

import {Pidgeons} from '../collections/pidgeons';
 
@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/pidgeon/pidgeon-list.html'
})
class RacingPidgeons
{
    pidgeons: Mongo.Cursor<Object>;
    
    constructor (zone: NgZone) {
        this.pidgeons = Pidgeons.find();
    }
}
 
bootstrap(RacingPidgeons);