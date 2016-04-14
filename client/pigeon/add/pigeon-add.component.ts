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
export class PigeonAdd extends MeteorComponent {
    pigeon: Pigeon;

    constructor(private params: RouteParams, private router: Router) {
        super();
        
        this.pigeon = {
            idNumber: null,
            sex: null,
            color: null,
            owner: null,
            mother: null,
            father: null
        };
    }
    
    save(pigeon: Pigeon) {
        pigeon.owner = Meteor.userId();
        var pigeonId = PigeonCollection.insert(pigeon);
        this.close();
    }
    
    close() {
        this.router.navigate(['/PigeonList']);
    }
    
}