import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {ToastrService} from '../../../common/services/toastr.service';
import * as _ from 'lodash';

interface Instance {
    name?: string;
    description?: string;
    'instance-id'?: string;
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
    @Input() editInstanceObject;
    validatorType: string;
    validateReferer: string;
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
        this.validateReferer = '';
        this.validateToken = '';
    }

    ngOnInit() {
        if (this.editInstanceObject) {
            setTimeout(() => {
                const { name, configuration } = this.editInstanceObject;
                this.instanceObj.name = name;
                this.instanceObj['instance-id'] = this.editInstanceObject['instance-id'];
                if (configuration && configuration.validators &&
                    configuration.validators.http && configuration.validators.http.request) {
                    if (!_.isEmpty(configuration.validators.http.request)) {
                        const validateToken = _.find(configuration.validators.http.request, req => req.type === 'validateToken');
                        const validateReferer = _.find(configuration.validators.http.request, req => req.type === 'validateReferer');
                        if (validateToken) {
                            this.validatorType = validateToken.type;
                            this.validateToken = validateToken.token;
                        }
                        if (validateReferer) {
                            this.validatorType = validateReferer.type;
                            this.validateReferer = validateReferer.referers.join(',');
                        }
                    }
                }
            }, 0);
        }
    }

    fnCreateInstanceClick(instanceObject: Instance, myForm) {
        if (this.validatorType  === 'validateToken' && this.validateToken) {
            instanceObject.configuration.validators.http.request = [
                {
                    token: this.validateToken,
                    type: `validateToken`
                }
            ];
        } else if (this.validatorType === 'validateReferer' && this.validateReferer) {
            instanceObject.configuration.validators.http.request = [
                {
                    referers: this.validateReferer.split(','),
                    type: `validateReferer`
                }
            ];
        }

        // update instance
        if (this.editInstanceObject) {
            this._instance.fnUpdateInstance(instanceObject)
                .then((response: any) => {
                    this._toastr.fnSuccess('Instance updated successfully.');
                    this.fnHideModal.next(true);
                })
                .catch(() => {
                    this._toastr.fnWarning('Update instance failed.');
                });
        } else {
            // create instance
            this._instance.fnCreateInstance(instanceObject)
                .then((response: any) => {
                    this._toastr.fnSuccess('Instance created successfully.');
                    this.fnHideModal.next(true);
                })
                .catch(() => {
                    this._toastr.fnWarning('Instance creation failed.');
                });
        }
    }

    clearValidatorText(event) {
        event.stopPropagation();
        event.preventDefault();
        this.validateToken = '';
        this.validateReferer = '';
    }

}
