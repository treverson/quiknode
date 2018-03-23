import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-single-instance',
    templateUrl: './single-instance.component.html',
    styleUrls: ['./single-instance.component.css'],
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({display: 'block'})),
            state('hidden', style({display: 'none'})),
            transition('shown => hidden', animate('0.3s 600ms ease-out')),
            transition('hidden => shown', animate('0.1s 100ms ease-in')),
        ])
    ]
})
export class SingleInstanceComponent implements OnInit {
    @Input() instance: any;
    @Output() fnShowCreateModal =  new EventEmitter<any>();
    @Output() fnShowSuspendModal =  new EventEmitter<any>();
    visibilityState: String = 'hidden';

    constructor() {
    }

    ngOnInit() {
    }

    fadeInFadeOut() {
        if (this.visibilityState === 'hidden') {
            this.visibilityState = 'shown';
        } else {
            this.visibilityState = 'hidden';
        }
    }

    showSuspendModal(e) {
        e.preventDefault();
        this.fnShowSuspendModal.next();
    }

    showCreateModal(e) {
        e.preventDefault();
        this.fnShowCreateModal.next(this.instance);

    }

}
