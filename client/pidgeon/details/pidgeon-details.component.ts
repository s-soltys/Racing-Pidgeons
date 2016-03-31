import {Component} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';
import {PidgeonForm} from '../form/pidgeon-form.component';

@Component({
    templateUrl: '/client/pidgeon/details/pidgeon-details.template.html',
    directives: [RouterLink, PidgeonForm]
})
@CanActivate((instruction: ComponentInstruction) => Meteor.user() != null)
export class PidgeonDetails extends MeteorComponent {
    pidgeon: Pidgeon;

    constructor(private params: RouteParams, private router: Router) {
        super();
        
        var pidgeonId = params.get('pidgeonId');

        this.subscribe('pidgeon', pidgeonId, () => {
            this.pidgeon = PidgeonCollection.findOne(pidgeonId);
        }, true);
    }
    
}