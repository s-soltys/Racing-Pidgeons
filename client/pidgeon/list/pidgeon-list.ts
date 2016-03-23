import {Component, View} from 'angular2/core';
import {Pidgeons} from '../../../collections/pidgeons';
import {PidgeonForm} from '../form/pidgeon-form';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'pidgeons-list'
})
@View({
    templateUrl: 'client/pidgeon/list/pidgeon-list.html',
    directives: [PidgeonForm, RouterLink]
})
export class PidgeonList {
    pidgeons: Mongo.Cursor<Object>;
    
    constructor () {
        this.pidgeons = Pidgeons.find();
    }
}