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
    @Output() fnShowSuspendModal =  new EventEmitter<any>();
    @Input() editInstanceObject;
    validatorType: string;
    validateReferer: string[];
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
        this.validateReferer = [''];
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
                            this.validateReferer = validateReferer.referers;
                        }
                    }
                }
            }, 0);
        }
    }

    showSuspendModal(e) {
        e.preventDefault();
        this.fnShowSuspendModal.next();
    }


    fnCreateInstanceClick(instanceObject: Instance, myForm) {
        const validateReferer = _.filter(this.validateReferer, ref => !!ref);
        if (this.validatorType  === 'validateToken' && this.validateToken) {
            instanceObject.configuration.validators.http.request = [
                {
                    token: this.validateToken,
                    type: `validateToken`
                }
            ];
        } else if (this.validatorType === 'validateReferer' && !_.isEmpty(validateReferer)) {
            instanceObject.configuration.validators.http.request = [
                {
                    referers: validateReferer,
                    type: `validateReferer`
                }
            ];
        }

        // update instance
        if (this.editInstanceObject) {
            this._instance.fnUpdateInstance(instanceObject)
                .then((response: any) => {
                    this._toastr.fnSuccess('Instance updated successfully.');
                    this.fnHideModal.next();
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
                .catch((err) => {
                    if (err.status !== 401 && err.status !== 502) {
                        this._toastr.fnWarning('Instance creation failed.');
                    }
                });
        }
    }

    clearValidatorText(event) {
        event.stopPropagation();
        event.preventDefault();
        this.validateToken = '';
    }

    clearValidatorReferer(event, index) {
        event.stopPropagation();
        event.preventDefault();
        if (this.validateReferer.length > 1) {
            this.validateReferer.splice(index, 1);
        } else {
            this.validateReferer = [''];
        }
    }

    addReferer(event) {
        event.stopPropagation();
        event.preventDefault();
        this.validateReferer.unshift('');
    }

    trackByIndex(index: number, value: number) {
        return index;
    }

}
