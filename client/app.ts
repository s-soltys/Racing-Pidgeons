import {Component, View, NgZone} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {Pidgeons} from '../collections/pidgeons';
import {PidgeonForm} from './pidgeon/form/pidgeon-form';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/pidgeon/list/pidgeon-list.html',
    directives: [PidgeonForm]
})
class RacingPidgeons
{
    pidgeons: Mongo.Cursor<Object>;
    
    constructor (zone: NgZone) {
        this.pidgeons = Pidgeons.find();
    }
}
 
bootstrap(RacingPidgeons);