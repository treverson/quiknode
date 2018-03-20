import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-modal-wrapper',
    templateUrl: './modal-wrapper.component.html',
    styleUrls: ['./modal-wrapper.component.css']
})
export class ModalWrapperComponent implements OnInit {
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
