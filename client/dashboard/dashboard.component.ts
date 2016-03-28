import {Component, View} from 'angular2/core';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'dashboard'
})
@View({
    templateUrl: '/client/dashboard/dashboard.template.html',
    directives: [RouterLink]
})
@CanActivate((instruction: ComponentInstruction) => Meteor.user() != null)
export class Dashboard extends MeteorComponent {
    constructor(private params: RouteParams, private router: Router) {
        super();
    }
}