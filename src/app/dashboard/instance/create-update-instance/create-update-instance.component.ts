import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {ToastrService} from '../../../common/services/toastr.service';

interface Instance {
    name?: string;
    description?: string;
    configuration?: {
        validators: {
            http: {
                request?: [
                    {
                        'instance-validate-http-request-referer'?: {
                            type?: string;
                            referers?: string[];
                            permitNullReferer?: boolean;
                        }
                        'instance-validate-http-request-token'?: {
                            type?: string;
                            token?: string;
                        }
                    }]
            }
        }
    };
}

@Component({
    selector: 'app-create-update-instance',
    templateUrl: './create-update-instance.component.html',
    styleUrls: ['./create-update-instance.component.css']
})
export class CreateUpdateInstanceComponent implements OnInit {
    instanceObj: Instance;
    @Output() fnHideModal = new EventEmitter<any>();
    constructor(private _instance: InstanceService, private _toastr: ToastrService) {
        this.instanceObj = {
            name: '',
            description: '',
            configuration: {
                validators: {
                    http: {
                        request: null,
                    }
                }
            }
        };
    }

    ngOnInit() {
    }

    fnCreateInstanceClick(instanceObject: Instance, myForm) {
        this._instance.fnCreateInstance(instanceObject)
            .then((response: any) => {
                this._toastr.fnSuccess('Instance created.');
                this.fnHideModal.next(true);
            })
            .catch(() => {
                this._toastr.fnWarning('Instance creation failed.');
            });
    }

}
