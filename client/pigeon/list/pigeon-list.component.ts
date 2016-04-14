import {Component} from 'angular2/core';
import {PigeonCollection, Pigeon} from '../../../collections/pigeons';
import {RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';
import {DisplayUser} from '../../lib/display-user.pipe';

@Component({
    selector: 'pigeons-list',
    templateUrl: 'client/pigeon/list/pigeon-list.template.html',
    directives: [RouterLink],
    pipes: [DisplayUser]
})
@CanActivate((next: ComponentInstruction, prev: ComponentInstruction) => {
    let isUserPresent: boolean = Meteor.user() != null;
    return isUserPresent;
})
export class PigeonList extends MeteorComponent {
    user: Meteor.User;
    pigeons: Mongo.Cursor<Pigeon>;
    sortField: ReactiveVar<string> = new ReactiveVar<string>('serialNumber');
    sortOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
    numberSearch: ReactiveVar<string> = new ReactiveVar<string>('');
    subscription: Meteor.SubscriptionHandle;
    
    constructor () {
        super();
        
        this.autorun(() => {  
            this.user = Meteor.user();
            
            let options = this.createOptions();
            
            this.subscription = this.subscribe('pigeons', options, this.numberSearch.get(), () => {
                this.pigeons = PigeonCollection.find({}, options);
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
    
    get pigeonsCount():number {
        return (this.pigeons != null) ? this.pigeons.count() : 0;
    }
}