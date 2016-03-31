import {Component, Input} from 'angular2/core';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';
import {Router, RouterLink} from 'angular2/router';

@Component({
    selector: 'pidgeon-form',
    templateUrl: '/client/pidgeon/form/pidgeon-form.template.html',
    directives: [RouterLink]
})
export class PidgeonForm {
    @Input() pidgeon: Pidgeon;
    
    constructor(private router: Router) {
        
    }

    save(pidgeon: Pidgeon) {
        PidgeonCollection.update(pidgeon._id, {
            $set: {
                number: pidgeon.number,
                color: pidgeon.color,
                sex: pidgeon.sex
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
}