import {Injectable} from '@angular/core';
import * as Toastr from 'toastr';

@Injectable()
export class ToastrService {

    constructor() {
        Toastr.options = {
            'closeButton': false,
            'debug': false,
            'newestOnTop': false,
            'progressBar': true,
            'positionClass': 'toast-position',
            'preventDuplicates': false,
            'onclick': null,
            'showDuration': '30000000',
            'hideDuration': '1000',
            // 'timeOut': '3000',
            'extendedTimeOut': '1000',
            'showEasing': 'swing',
            'hideEasing': 'linear',
            'showMethod': 'fadeIn',
            'hideMethod': 'fadeOut'
        };
    }

    /**
     * Success message
     * @param {string} message
     * @param {string} title
     * */
    fnSuccess(message: string, title?: string) {
        Toastr['success'](message, title);
    }


    /**
     * Info message
     * @param {string} message
     * @param {string} title
     * */
    fnInfo(message: string, title?: string) {
        Toastr['info'](message, title);
    }

    /**
     * Warning message
     * @param {string} message
     * @param {string} title
     * */
    fnWarning(message: string, title?: string) {
        Toastr['warning'](message, title);
    }

    /**
     * Error message
     * @param {string} message
     * @param {string} title
     * */
    fnError(message: string, title?: string) {
        Toastr['error'](message, title);
    }
}
