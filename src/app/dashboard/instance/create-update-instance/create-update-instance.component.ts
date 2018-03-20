import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-create-update-instance',
    templateUrl: './create-update-instance.component.html',
    styleUrls: ['./create-update-instance.component.css']
})
export class CreateUpdateInstanceComponent implements OnInit {

    @Input() showModal: string;
    @Output() onHideModal = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
    }

    hideModal() {
        this.onHideModal.next();
    }

}
