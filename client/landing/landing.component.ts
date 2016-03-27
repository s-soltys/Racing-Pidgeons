import {Component, View} from 'angular2/core';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    
})
@View({
    templateUrl: '/client/landing/landing.html',
    directives: [RouterLink]
})
export class LandingPage extends MeteorComponent {
    constructor() {
        super();
    }
}