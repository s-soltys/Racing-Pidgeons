import {Component, View} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';
import {DisplayUser} from '../../lib/display-user.pipe';

@Component({
    selector: 'pidgeons-list'
})
@View({
    templateUrl: 'client/pidgeon/list/pidgeon-list.template.html',
    directives: [RouterLink],
    pipes: [DisplayUser]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
    let isUserPresent: boolean = Meteor.user() != null;
    return isUserPresent;
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
    
    search (searchtext: string) {
        this.numberSearch.set(searchtext);
    }
}