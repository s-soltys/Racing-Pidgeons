import {Component, Input} from 'angular2/core';
import {PigeonCollection, Pigeon} from '../../../collections/pigeons';
import {Router, RouterLink} from 'angular2/router';
import {SexSelector} from '../../lib/display/sex-selector.component';
import {PigeonSelector} from '../../lib/pigeon-selector/pigeon-selector.component';

@Component({
    selector: 'pigeon-form',
    templateUrl: '/client/pigeon/form/pigeon-form.template.html',
    directives: [RouterLink, SexSelector, PigeonSelector]
})
export class PigeonForm {
    @Input() pigeon: Pigeon;
    
    constructor(private router: Router) {
        
    }
    
    setSex(sex: string){
        this.pigeon.sex = sex;
        //this.pigeon = Object.assign({}, this.pigeon, { sex: sex });
    }
    
    setFather(idNumber: string){
        this.pigeon.father = idNumber;
    }
    
    setMother(idNumber: string){
        this.pigeon.mother = idNumber;
    }
}