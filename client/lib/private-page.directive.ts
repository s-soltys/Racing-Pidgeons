import {Directive} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";
import {MeteorComponent} from 'angular2-meteor';

@Directive({
    selector: '[private-page]'
})
export class PrivatePage {
    user: Meteor.User;
    
    constructor(private router:Router, private location:Location) {
        this.user = Meteor.user();
        
        if (this.user == null)
        {
            this.location.replaceState('/');
            this.router.navigate(['LandingPage']);
        }
    }
}