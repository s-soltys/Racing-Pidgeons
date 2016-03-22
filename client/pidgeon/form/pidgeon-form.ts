import {Component, View} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Pidgeons} from '../../../collections/pidgeons';

@Component({
    selector: 'pidgeon-form'
})
@View({
    templateUrl: 'client/pidgeon/form/pidgeon-form.html'
})
export class PidgeonForm {
    pidgeonForm: ControlGroup;

    constructor() {
        var fb = new FormBuilder();
        this.pidgeonForm = fb.group({
            number: ['', Validators.required],
            color: [''],
            sex: ['', Validators.required],
            race: ['']
        });
    };

    save(pidgeon) {
        if (!this.pidgeonForm.valid) return;
        Pidgeons.insert(pidgeon);
        this.clear();
    };

    clear() {
        for (var key in this.pidgeonForm.controls) {
            var control = this.pidgeonForm.controls[key];
            (<Control>control).updateValue('');
        };
    };
}