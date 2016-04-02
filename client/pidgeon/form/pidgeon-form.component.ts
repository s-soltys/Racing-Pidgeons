import {Component, Input} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {Router, RouterLink} from 'angular2/router';
import {SexSelector} from '../../lib/display/sex-selector.component';
import {PidgeonSelector} from '../../lib/pidgeon-selector/pidgeon-selector.component';

@Component({
    selector: 'pidgeon-form',
    templateUrl: '/client/pidgeon/form/pidgeon-form.template.html',
    directives: [RouterLink, SexSelector, PidgeonSelector]
})
export class PidgeonForm {
    @Input() pidgeon: Pidgeon;
    
    constructor(private router: Router) {
        
    }

    save(pidgeon: Pidgeon) {
        PidgeonCollection.update(pidgeon._id, {
            $set: {
                idNumber: pidgeon.idNumber,
                color: pidgeon.color,
                sex: pidgeon.sex,
                father: pidgeon.father,
                mother: pidgeon.mother
            }
        });
        this.close();
    }
    
    remove (pidgeon: Pidgeon){
        PidgeonCollection.remove({ _id: pidgeon._id });
        this.close();
    }
    
    close() {
        this.router.navigate(['/PidgeonList']);
    }
    
    setSex(sex: string){
        this.pidgeon.sex = sex;
        //this.pidgeon = Object.assign({}, this.pidgeon, { sex: sex });
    }
    
    setFather(idNumber: string){
        this.pidgeon.father = idNumber;
    }
    
    setMother(idNumber: string){
        this.pidgeon.mother = idNumber;
    }
}