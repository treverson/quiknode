import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-modal-wrapper',
    templateUrl: './modal-wrapper.component.html',
    styleUrls: ['./modal-wrapper.component.css']
})
export class ModalWrapperComponent implements OnInit, OnDestroy {
    @Input() showModal: string;
    @Input() hideClose?: boolean;
    @Output() fnHideModal = new EventEmitter<any>();
    shouldRemoveScrollOff?: boolean;

    constructor() {
    }

    ngOnInit() {
        if ($('html').hasClass('backdrop-scroll-off')) {
            this.shouldRemoveScrollOff = false;
        }
        if (!$('html').hasClass('backdrop-scroll-off')) {
            $('html').addClass('backdrop-scroll-off');
        }

    }

    onHideModal(e) {
        e.preventDefault();
        this.fnHideModal.next();
    }

    ngOnDestroy() {
        if (!this.shouldRemoveScrollOff) {
            $('html').removeClass('backdrop-scroll-off');
        }
    }

}
