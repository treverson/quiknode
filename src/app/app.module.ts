import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeaderComponent} from './header/header.component';

import {InterceptorProvider} from './common/interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthService } from './common/services/auth-service/auth.service';
import {AuthenticateGuard} from './common/services/auth-service/authenticate.guard';
import {NotAuthenticateGuard} from './common/services/auth-service/not.authenticate.guard';
import {ToastrService} from './common/services/toastr.service';
import { InstanceComponent } from './dashboard/instance/instance.component';
import {InstanceService} from './common/services/instance-service/instance.service';
import { CreateUpdateInstanceComponent } from './dashboard/instance/create-update-instance/create-update-instance.component';
import { ModalWrapperComponent } from './common/components/modal-wrapper/modal-wrapper.component';
import { SuspendInstanceComponent } from './dashboard/instance/suspend-instance/suspend-instance.component';
import { AnalyticsComponent } from './dashboard/analytics/analytics/analytics.component';
import { SingleInstanceComponent } from './dashboard/instance/single-instance/single-instance.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CreateUpdateUserComponent } from './dashboard/users/create-update-user/create-update-user.component';
import { SingleUserComponent } from './dashboard/users/single-user/single-user.component';
import { UserService } from './common/services/user-service/user.service';
import { DeleteUserComponent } from './dashboard/users/delete-user/delete-user.component';
import { MainComponent } from './main/main.component';
import { MyAccountComponent } from './dashboard/my-account/my-account.component';
import { AddApiKeyComponent } from './security/api-key/add-api-key/add-api-key.component';
import { ApiKeyService } from './common/services/api-key-service/api-key.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        InstanceComponent,
        CreateUpdateInstanceComponent,
        ModalWrapperComponent,
        SuspendInstanceComponent,
        AnalyticsComponent,
        SingleInstanceComponent,
        UsersComponent,
        CreateUpdateUserComponent,
        SingleUserComponent,
        DeleteUserComponent,
        MainComponent,
        MyAccountComponent,
        AddApiKeyComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true},
        AuthService,
        AuthenticateGuard,
        NotAuthenticateGuard,
        ToastrService,
        InstanceService,
        UserService,
        ApiKeyService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
