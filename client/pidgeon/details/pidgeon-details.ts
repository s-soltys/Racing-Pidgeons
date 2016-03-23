import {Component, View} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Pidgeons} from '../../../collections/pidgeons';

@Component({
  selector: 'pidgeon-details'
})
@View({
  templateUrl: '/client/pidgeon/details/pidgeon-details.html'
})
export class PidgeonDetails {
    pidgeon: Object;
    
    constructor (params: RouteParams) {
        var pidgeonId = params.get('pidgeonId');
        this.pidgeon = Pidgeons.findOne(pidgeonId);
    }
}