import {Component, NgZone} from 'angular2/core';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';
import {PigeonCollection} from '../../collections/pigeons';

@Component({
    selector: 'dashboard',
    templateUrl: '/client/dashboard/dashboard.template.html',
    directives: [RouterLink]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
    return Meteor.user() != null;
})
export class Dashboard extends MeteorComponent {
    constructor(private params: RouteParams, private router: Router, private zone: NgZone) {
        super();
    }
}