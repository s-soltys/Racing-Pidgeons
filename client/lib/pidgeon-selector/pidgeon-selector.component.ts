import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {MeteorComponent} from 'angular2-meteor'

@Component({
    selector: 'pidgeon-selector',
    templateUrl: '/client/lib/pidgeon-selector/pidgeon-selector.template.html'
})
export class PidgeonSelector extends MeteorComponent {
    @Input() pidgeonNumber: string;
    @Output() pidgeonNumberChange = new EventEmitter<string>();
    
    pidgeons: Mongo.Cursor<Pidgeon>;
    numberSearch: ReactiveVar<string> = new ReactiveVar<string>('');
    
    constructor(){
        super();
        
        this.autorun(() => {
            var options = { limit: 3, sort: { 'idNumber': 1 } };
            
            var numberRegex = { '$regex': '.*' + (this.numberSearch.get() || '') + '.*', '$options': 'i' };
            
            this.subscribe('pidgeons', options, this.numberSearch.get(), () => {
                this.pidgeons = PidgeonCollection.find({
                    $and: [{ idNumber: numberRegex }]
                }, options);
            }, true);
        });
    }
    
    changePidgeonNumber(newNumber: string){
        this.numberSearch.set(newNumber);
        this.pidgeonNumberChange.emit(newNumber);
    }
    
}