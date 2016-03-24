import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {PidgeonForm} from '../form/pidgeon-form';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';

@Component({
    selector: 'pidgeons-list'
})
@View({
    templateUrl: 'client/pidgeon/list/pidgeon-list.html',
    directives: [PidgeonForm, RouterLink, AccountsUI]
})
export class PidgeonList {
    pidgeons: Mongo.Cursor<Pidgeon>;
    
    constructor () {
        this.pidgeons = PidgeonCollection.find();
    }
}