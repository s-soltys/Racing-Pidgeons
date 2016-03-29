import {Component} from 'angular2/core';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    templateUrl: '/client/landing/landing.template.html',
    directives: [RouterLink]  
})
export class LandingPage extends MeteorComponent {
    constructor(private router: Router) {
        super();
    }
    
    login(email: string, password: string) {
        Meteor.loginWithPassword(email, password, (err) => {
            if (err) alert(err);
            else this.router.navigate(['/Dashboard']);
        });
    }
    
    register(email: string, password: string) {
        let credentials = { email: email, password: password };
        
        Accounts.createUser(credentials, (err) => {
            if (err) alert(err);
            else this.router.navigate(['/Dashboard']);
        });
    }
}