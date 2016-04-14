import {Component, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';

// Components
import {PigeonList} from './pigeon/list/pigeon-list.component';
import {PigeonDetails} from './pigeon/details/pigeon-details.component';
import {PigeonAdd} from './pigeon/add/pigeon-add.component';
import {Dashboard} from './dashboard/dashboard.component';
import {LandingPage} from './landing/landing.component';
import {AccountsForm} from './accounts/accounts.component';

@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, AccountsForm]
})
@RouteConfig([
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/pigeons', name: 'PigeonList', component: PigeonList },
    { path: '/pigeons/:pigeonId', name: 'PigeonDetails', component: PigeonDetails },
    { path: '/pigeons/add', name: 'PigeonAdd', component: PigeonAdd }
])
class RacingPigeons {
    user: Meteor.User;
    
    constructor() {
        this.user = Meteor.user();   
    }
}

bootstrap(
    RacingPigeons,
    [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]
    );