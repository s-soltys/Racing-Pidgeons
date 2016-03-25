import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {PidgeonForm} from '../form/pidgeon-form';
import {RouterLink} from 'angular2/router';
import {AccountsUI} from 'meteor-accounts-ui';
import {MeteorComponent} from 'angular2-meteor';
import {DisplayUser} from '../../lib/display-user.pipe';

@Component({
    selector: 'pidgeons-list'
})
@View({
    templateUrl: 'client/pidgeon/list/pidgeon-list.html',
    directives: [PidgeonForm, RouterLink, AccountsUI],
    pipes: [DisplayUser]
})
export class PidgeonList extends MeteorComponent {
    user: Meteor.User;
    pidgeons: Mongo.Cursor<Pidgeon>;
    sortField: ReactiveVar<string> = new ReactiveVar<string>('number');
    sortOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
    numberSearch: ReactiveVar<string> = new ReactiveVar<string>('');
    subscription: Meteor.SubscriptionHandle;
    
    constructor () {
        super();
        
        this.autorun(() => {  
            this.user = Meteor.user();
            
            let options = this.createOptions();
            
            this.subscription = this.subscribe('pidgeons', options, this.numberSearch.get(), () => {
                this.pidgeons = PidgeonCollection.find({}, options);
            }, true);
        });
    }
    
    setSortField(sortFieldName: string) {
        this.sortField.set(sortFieldName);
    }
    
    createOptions():any {
        var sort: any = {};
        sort[this.sortField.get()] = this.sortOrder.get();
        return { sort: sort };
    }
    
    remove (pidgeon: Pidgeon){
        PidgeonCollection.remove({ _id: pidgeon._id });
    }
    
    search (searchtext: string) {
        this.numberSearch.set(searchtext);
    }
}