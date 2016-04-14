import {Component, Input, Output, EventEmitter, ElementRef, ViewEncapsulation} from 'angular2/core';
import {PigeonCollection, Pigeon} from '../../../collections/pigeons';
import {MeteorComponent} from 'angular2-meteor'

@Component({
    encapsulation: ViewEncapsulation.Emulated,
    selector: 'pigeon-selector',
    templateUrl: '/client/lib/pigeon-selector/pigeon-selector.template.html'
})
export class PigeonSelector extends MeteorComponent {
    @Input() pigeonNumber: string;
    @Output() pigeonNumberChange = new EventEmitter<string>();
    
    isFocused: boolean;
    pigeons: Mongo.Cursor<Pigeon>;
    numberSearch: ReactiveVar<string> = new ReactiveVar<string>('');
    
    constructor(){
        super();
        
        this.autorun(() => {
            var options = { limit: 3, sort: { 'idNumber': 1 } };
            
            var numberRegex = { '$regex': '.*' + (this.numberSearch.get() || '') + '.*', '$options': 'i' };
            
            this.subscribe('pigeons', options, this.numberSearch.get(), () => {
                this.pigeons = PigeonCollection.find({
                    $and: [{ idNumber: numberRegex }]
                }, options);
            }, true);
        });
    }
    
    focus(){
        this.isFocused = true;
    }
    
    blur(){
        setTimeout(() => this.isFocused = false, 100);
    }
    
    changePigeonNumber(newNumber: string){
        this.numberSearch.set(newNumber);
        this.pigeonNumberChange.emit(newNumber);
    }
    
}