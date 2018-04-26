import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {InstanceService} from '../../../common/services/instance-service/instance.service';
import {ToastrService} from '../../../common/services/toastr.service';
import * as _ from 'lodash';
import {AuthService} from '../../../common/services/auth-service/auth.service';
import {Router} from '@angular/router';

interface Instance {
    name?: string;
    description?: string;
    'instance-id'?: string;
    configuration?: {
        validators: {
            http: {
                request?: any;
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
    @Input() instances;
    validatorType: string;
    validateReferer: string[];
    validateToken: string;
    isLoading: boolean;
    isDarkMode: boolean;
    cloneInstance: string;

    constructor(private _instance: InstanceService, private _toastr: ToastrService, private _auth: AuthService,
                private _router: Router) {
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
        this.isLoading = false;
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
        this.cloneInstance = '';
    }

    ngOnInit() {
        this.isDarkMode = this._auth.fnGetIsDarkUiMode();
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
        this.fnShowSuspendModal.next(this.editInstanceObject);
        this.fnHideModal.next();
    }


    fnCreateInstanceClick(instanceObject: Instance, myForm) {
        const validateReferer = _.filter(this.validateReferer, ref => !!ref);
        if (!instanceObject.configuration.validators.http.request) {
            instanceObject.configuration.validators.http.request = [];
        }
        if (this.validateToken) {
            instanceObject.configuration.validators.http.request.push({
                token: this.validateToken,
                type: `validateToken`
            });
        }
        if (!_.isEmpty(validateReferer)) {
            instanceObject.configuration.validators.http.request.push({
                referers: validateReferer,
                type: `validateReferer`
            });
        }
        // update instance
        if (this.editInstanceObject) {
            this.isLoading = true;
            this._instance.fnUpdateInstance(instanceObject)
                .then((response: any) => {
                    this._toastr.fnSuccess('Instance updated successfully.');
                    this.isLoading = false;
                    this.fnHideModal.next({
                        instanceObject,
                        created: false
                    });
                })
                .catch(() => {
                    this.isLoading = false;
                    this._toastr.fnWarning('Update instance failed.');
                });
        } else {
            if (this.cloneInstance && (this.cloneInstance === instanceObject['name']) ||
                _.findIndex(this.instances, ins => ins['name'] === instanceObject['name']) > -1) {
                this._toastr.fnWarning('Please choose a unique name for new instance.');
            } else {
                this.isLoading = true;
                this._instance.fnCreateInstance(instanceObject)
                    .then((response: any) => {
                        this.isLoading = false;
                        this._toastr.fnSuccess('Instance created successfully.');
                        this.fnHideModal.next({
                            instanceObject,
                            created: true
                        });
                        this.cloneInstance = '';
                        this._router.navigate(['/instances']);
                    })
                    .catch((err) => {
                        this.isLoading = false;
                        if (err.status !== 401 && err.status !== 502) {
                            this._toastr.fnWarning('Instance creation failed.');
                        }
                    });
            }
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

    fnCloneInstance() {
        delete this.instanceObj['instance-id'];
        this.cloneInstance = this.instanceObj['name'];
        this.editInstanceObject = null;
    }
}
