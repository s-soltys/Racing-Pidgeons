import {Component} from 'angular2/core';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    templateUrl: '/client/landing/landing.template.html',
    directives: [RouterLink]  
})
export class LandingPage {
    
}