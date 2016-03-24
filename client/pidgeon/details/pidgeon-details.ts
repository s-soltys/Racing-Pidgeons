import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';

@Component({
  selector: 'pidgeon-details'
})
@View({
  templateUrl: '/client/pidgeon/details/pidgeon-details.html',
  directives: [RouterLink]
})
@CanActivate((instruction: ComponentInstruction) => Meteor.user() != null)
export class PidgeonDetails {
    pidgeon: Pidgeon;
    
    constructor (params: RouteParams) {
        var pidgeonId = params.get('pidgeonId');
        this.pidgeon = PidgeonCollection.findOne(pidgeonId);
    }
    
    save (pidgeon: Pidgeon){
        PidgeonCollection.update(pidgeon._id, { $set: pidgeon });
    }
}