import {Component, View} from 'angular2/core';
import {InjectUser} from 'meteor-accounts';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {MeteorComponent} from 'angular2-meteor';
import {PidgeonCollection, Pidgeon} from '../../../collections/pidgeons';

@Component({
    selector: 'pidgeon-form'
})
@View({
    templateUrl: 'client/pidgeon/form/pidgeon-form.html'
})
@InjectUser()
export class PidgeonForm extends MeteorComponent {
    pidgeonForm: ControlGroup;

    constructor() {
        super();
        
        var fb = new FormBuilder();
        this.pidgeonForm = fb.group({
            number: ['', Validators.required],
            color: [''],
            sex: ['', Validators.required],
            race: ['']
        });
    };

    save(pidgeon: Pidgeon) {
        if (!this.pidgeonForm.valid) return;
        
        if (Meteor.userId() != null){   
            pidgeon.owner = Meteor.userId();
            PidgeonCollection.insert(pidgeon);
            this.clear();
        } else {
            alert("User is not logged in!");
        }
    };

    clear() {
        for (var key in this.pidgeonForm.controls) {
            var control = this.pidgeonForm.controls[key];
            (<Control>control).updateValue('');
        };
    };
}