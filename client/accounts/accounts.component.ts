import {Component, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Router} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';

// Components
import {DisplayUser} from '../lib/display-user.pipe';

@Component({
    selector: 'accounts',
    templateUrl: 'client/accounts/accounts.template.html',
    pipes: [DisplayUser]
})
export class AccountsUI extends MeteorComponent {
    user: Meteor.User;

    constructor(private router: Router, private zone: NgZone) {
        super();

        this.autorun(() => {
            this.user = Meteor.user();
        });
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

    logout() {
        Meteor.logout(err => {
            if (err) alert(err);
            else this.router.navigate(['/LandingPage']);
        });
    }
}