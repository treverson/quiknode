import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-single-user',
    templateUrl: './single-user.component.html',
    styleUrls: ['./single-user.component.css'],
})
export class SingleUserComponent implements OnInit {
    @Input() user: any;
    @Input() viewType: any;
    @Output() fnShowUserModal =  new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    showUserModal(e) {
        e.preventDefault();
        this.fnShowUserModal.next(this.user);
    }
}
