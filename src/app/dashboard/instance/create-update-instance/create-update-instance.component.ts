import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
                            type?: string;
                            referers?: string[];
                            permitNullReferer?: boolean;
                            token?: string;
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
    @Input() instanceObject;
    validatorType: string;
    validateReferrer: string;
    validateToken: string;
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
        this.validatorType = 'validateToken';
    }

    ngOnInit() {
    }

    fnCreateInstanceClick(instanceObject: Instance, myForm) {
        if (this.validatorType  === 'validateToken' && this.validateToken) {
            instanceObject.configuration.validators.http.request = [
                {
                    token: this.validateToken,
                    type: `validateToken`
                }
            ];
        } else if (this.validatorType === 'validateReferrer' && this.validateReferrer) {
            instanceObject.configuration.validators.http.request = [
                {
                    token: this.validateReferrer,
                    type: `validateReferer`
                }
            ];
        }
        this._instance.fnCreateInstance(instanceObject)
            .then((response: any) => {
                this._toastr.fnSuccess('Instance created.');
                this.fnHideModal.next(true);
            })
            .catch(() => {
                this._toastr.fnWarning('Instance creation failed.');
            });
    }

    clearValidatorText(event) {
        event.stopPropagation();
        event.preventDefault();
        this.validateToken = '';
        this.validateReferrer = '';
    }

}
