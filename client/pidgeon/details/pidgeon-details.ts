import {Component, View} from 'angular2/core';
import {Pidgeons} from '../../../collections/pidgeons';
import {RouteParams} from 'angular2/router';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'pidgeon-details'
})
@View({
  templateUrl: '/client/pidgeon/details/pidgeon-details.html',
  directives: [RouterLink]
})
export class PidgeonDetails {
    pidgeon: Object;
    
    constructor (params: RouteParams) {
        var pidgeonId = params.get('pidgeonId');
        this.pidgeon = Pidgeons.findOne(pidgeonId);
    }
}