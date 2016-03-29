import {Component, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Router} from 'angular2/router';

// Components
import {DisplayUser} from '../lib/display-user.pipe';

@Component({
    selector: 'accounts',
    templateUrl: 'client/accounts/accounts.template.html',
    pipes: [DisplayUser]
})
export class AccountsUI {
    user: Meteor.User;

    constructor(private router: Router, private zone: NgZone) {
        this.user = Meteor.user();
    }

    login(email: string, password: string) {
        Meteor.loginWithPassword(email, password, (err) => {
            this.zone.run(() => {
                this.user = Meteor.user();
                if (err) alert(err);
                else this.router.navigate(['/Dashboard']);
            });
        });
    }

    register(email: string, password: string) {
        let credentials = { email: email, password: password };

        Accounts.createUser(credentials, (err) => {
            this.zone.run(() => {
                this.user = Meteor.user();
                if (err) alert(err);
                else this.router.navigate(['/Dashboard']);
            });
        });
    }

    logout() {
        Meteor.logout(err => {
            this.zone.run(() => {
                this.user = Meteor.user();
                if (err) alert(err);
                else this.router.navigate(['/LandingPage']);
            });
        });
    }
}