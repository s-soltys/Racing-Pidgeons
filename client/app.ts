import {Component, View, NgZone, provide} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig, APP_BASE_HREF} from 'angular2/router';
import {PidgeonList} from 'client/pidgeon/list/pidgeon-list';
import {PidgeonDetails} from 'client/pidgeon/details/pidgeon-details';

@Component({
    selector: 'app'
})
@View({
    template: '<router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', as: 'PidgeonList', component: PidgeonList },
    { path: '/pidgeon/:pidgeonId', as: 'PidgeonDetails', component: PidgeonDetails }
])
class RacingPidgeons { }

bootstrap(
    RacingPidgeons,
    [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]
    );