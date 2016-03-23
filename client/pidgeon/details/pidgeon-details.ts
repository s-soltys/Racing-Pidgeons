import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
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
    pidgeon: Pidgeon;
    
    constructor (params: RouteParams) {
        var pidgeonId = params.get('pidgeonId');
        this.pidgeon = PidgeonCollection.findOne(pidgeonId);
    }
    
    save (pidgeon: any){
        PidgeonCollection.update(pidgeon._id, { $set: pidgeon });
    }
}