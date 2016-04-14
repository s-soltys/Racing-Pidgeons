import {Component, Input, Output, EventEmitter, ElementRef, OnInit} from 'angular2/core';
import {PigeonCollection, Pigeon} from '../../../collections/pigeons';

@Component({
    selector: 'sex-selector',
    template: `
        <select class="form-control" #selectedSex (change)="setSex(selectedSex.value)">
            <option *ngFor="#sexType of sexTypes">
                {{ sexType }}
            </option>
        </select>`
})
export class SexSelector implements OnInit {
    @Output() select = new EventEmitter<string>();
    sexTypes = ['Male', 'Female', 'Unknown'];
    
    constructor(private element: ElementRef){
        
    }
    
    ngOnInit(){
        console.log(this.element.nativeElement.children[0].value);
        this.element.nativeElement.children[0].value = 'Female';
    }

    setSex(sex: string) {
        this.select.emit(sex);
    }

}