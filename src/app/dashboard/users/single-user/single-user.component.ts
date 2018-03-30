import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-single-user',
    templateUrl: './single-user.component.html',
    styleUrls: ['./single-user.component.css'],
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({display: 'block'})),
            state('hidden', style({display: 'none'})),
            transition('shown => hidden', animate('0.3s 600ms ease-out')),
            transition('hidden => shown', animate('0.1s 100ms ease-in')),
        ])
    ]
})
export class SingleUserComponent implements OnInit {
    @Input() user: any;
    @Output() fnShowUserModal =  new EventEmitter<any>();
    @Output() fnShowDeleteModal =  new EventEmitter<any>();
    visibilityState: String;

    constructor() {
        this.visibilityState = 'hidden';
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

    showUserModal(e) {
        e.preventDefault();
        this.fnShowUserModal.next(this.user);
    }

    showDeleteModal(e) {
        e.preventDefault();
        this.fnShowDeleteModal.next(this.user);
    }

}
