import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {PidgeonForm} from '../form/pidgeon-form';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';

@Component({
    selector: 'pidgeons-list'
})
@View({
    templateUrl: 'client/pidgeon/list/pidgeon-list.html',
    directives: [PidgeonForm, RouterLink, AccountsUI]
})
export class PidgeonList extends MeteorComponent {
    pidgeons: Mongo.Cursor<Pidgeon>;
    
    constructor () {
        super();
        this.subscribe('pidgeons', () => {
            this.pidgeons = PidgeonCollection.find();
        }, true);
    }
    
    remove (pidgeon: Pidgeon){
        PidgeonCollection.remove({ _id: pidgeon._id });
    }
}