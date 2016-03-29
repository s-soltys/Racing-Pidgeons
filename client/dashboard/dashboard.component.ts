import {Component, View, NgZone} from 'angular2/core';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';
import {PidgeonCollection} from '../../collections/pidgeons';

@Component({
    selector: 'dashboard'
})
@View({
    templateUrl: '/client/dashboard/dashboard.template.html',
    directives: [RouterLink]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
    return Meteor.user() != null;
})
export class Dashboard extends MeteorComponent {
    private pidgeonsCount: number;

    constructor(private params: RouteParams, private router: Router, private zone: NgZone) {
        super();
        
        this.subscribe('pidgeons', {}, '', () => {
            zone.run(() => {
                this.pidgeonsCount = PidgeonCollection.find({}).count();
            });
        });
    }
}