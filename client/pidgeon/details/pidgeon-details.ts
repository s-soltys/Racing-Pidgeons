import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'pidgeon-details'
})
@View({
    templateUrl: '/client/pidgeon/details/pidgeon-details.html',
    directives: [RouterLink]
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

    save(pidgeon: Pidgeon) {
        PidgeonCollection.update(pidgeon._id, {
            $set: {
                number: pidgeon.number,
                color: pidgeon.color,
                sex: pidgeon.sex
            }
        }, null, this.close.bind(this));
    }
    
    remove (pidgeon: Pidgeon){
        PidgeonCollection.remove({ _id: pidgeon._id });
    }
    
    close() {
        this.router.navigate(['/PidgeonList']);
    }
    
}