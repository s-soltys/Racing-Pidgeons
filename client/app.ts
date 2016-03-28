import {Component, View, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';

// Components
import {PidgeonList} from 'client/pidgeon/list/pidgeon-list.component';
import {PidgeonDetails} from 'client/pidgeon/details/pidgeon-details.component';
import {Dashboard} from 'client/dashboard/dashboard.component';
import {LandingPage} from 'client/landing/landing.component';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, AccountsUI]
})
@RouteConfig([
    { path: '/', name: 'LandingPage', component: LandingPage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/pidgeons', name: 'PidgeonList', component: PidgeonList },
    { path: '/pidgeons/:pidgeonId', name: 'PidgeonDetails', component: PidgeonDetails }
])
class RacingPidgeons { }

bootstrap(
    RacingPidgeons,
    [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]
    );