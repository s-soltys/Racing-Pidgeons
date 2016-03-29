import {Component, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';

// Components
import {PidgeonList} from './pidgeon/list/pidgeon-list.component';
import {PidgeonDetails} from './pidgeon/details/pidgeon-details.component';
import {Dashboard} from './dashboard/dashboard.component';
import {LandingPage} from './landing/landing.component';
import {AccountsUI} from './accounts/accounts.component';

@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, AccountsUI]
})
@RouteConfig([
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/pidgeons', name: 'PidgeonList', component: PidgeonList },
    { path: '/pidgeons/:pidgeonId', name: 'PidgeonDetails', component: PidgeonDetails }
])
class RacingPidgeons {
    user: Meteor.User;
    
    constructor() {
        this.user = Meteor.user();   
    }
}

bootstrap(
    RacingPidgeons,
    [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]
    );