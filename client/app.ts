import {Component, View, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF, RouteConfig} from 'angular2/router';
import {PidgeonList} from 'client/pidgeon/list/pidgeon-list';
import {PidgeonDetails} from 'client/pidgeon/details/pidgeon-details';
import {Dashboard} from 'client/dashboard/dashboard.component';
import {AccountsUI} from 'meteor-accounts-ui';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: [ROUTER_DIRECTIVES, AccountsUI]
})
@RouteConfig([
    { path: '/', name: 'Dashboard', component: Dashboard },
    { path: '/pidgeons', name: 'PidgeonList', component: PidgeonList },
    { path: '/pidgeons/:pidgeonId', name: 'PidgeonDetails', component: PidgeonDetails }
])
class RacingPidgeons { }

bootstrap(
    RacingPidgeons,
    [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]
    );