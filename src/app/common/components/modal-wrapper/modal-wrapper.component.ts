import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as $ from 'jquery';
import {AuthService} from '../../services/auth-service/auth.service';

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
    isDarkMode?: boolean;

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
        if ($('html').hasClass('backdrop-scroll-off')) {
            this.shouldRemoveScrollOff = false;
        }
        if (!$('html').hasClass('backdrop-scroll-off')) {
            $('html').addClass('backdrop-scroll-off');
        }

        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this._auth.uiModeChange.subscribe((isDarkMode) => {
            this.isDarkMode = isDarkMode;
        });

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
