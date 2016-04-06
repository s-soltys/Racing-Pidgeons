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
export class PidgeonAdd extends MeteorComponent {
    pidgeon: Pidgeon;

    constructor(private params: RouteParams, private router: Router) {
        super();
        
        this.pidgeon = {
            idNumber: null,
            sex: null,
            color: null,
            owner: null,
            mother: null,
            father: null
        };
    }
    
    save(pidgeon: Pidgeon) {
        pidgeon.owner = Meteor.userId();
        var pidgeonId = PidgeonCollection.insert(pidgeon);
        this.close();
    }
    
    close() {
        this.router.navigate(['/PidgeonList']);
    }
    
}