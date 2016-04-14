import {Component} from 'angular2/core';
import {PigeonCollection, Pigeon} from '../../../collections/pigeons';
import {Router, RouteParams, RouterLink, CanActivate, ComponentInstruction} from 'angular2/router';
import {MeteorComponent} from 'angular2-meteor';
import {PigeonForm} from '../form/pigeon-form.component';

@Component({
    templateUrl: '/client/pigeon/details/pigeon-details.template.html',
    directives: [RouterLink, PigeonForm]
})
@CanActivate((instruction: ComponentInstruction) => Meteor.user() != null)
export class PigeonDetails extends MeteorComponent {
    pigeon: Pigeon;

    constructor(private params: RouteParams, private router: Router) {
        super();
        
        var pigeonId = params.get('pigeonId');

        this.subscribe('pigeon', pigeonId, () => {
            this.pigeon = PigeonCollection.findOne(pigeonId);
        }, true);
    }
    
    save(pigeon: Pigeon) {
        PigeonCollection.update(pigeon._id, {
            $set: {
                idNumber: pigeon.idNumber,
                color: pigeon.color,
                sex: pigeon.sex,
                father: pigeon.father,
                mother: pigeon.mother
            }
        });
        this.close();
    }
    
    remove (pigeon: Pigeon){
        PigeonCollection.remove({ _id: pigeon._id });
        this.close();
    }
    
    close() {
        this.router.navigate(['/PigeonList']);
    }
    
}