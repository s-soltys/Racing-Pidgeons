import {Component, Input} from 'angular2/core';
import {Pidgeon} from '../../../collections/pidgeons';

@Component({
    selector: 'pidgeon-form',
    templateUrl: '/client/pidgeon/form/pidgeon-form.template.html'
})
export class PidgeonForm {
    @Input() pidgeon: Pidgeon;
}