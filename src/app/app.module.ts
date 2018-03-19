import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';

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

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent,
        InstanceComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true},
        AuthService,
        AuthenticateGuard,
        NotAuthenticateGuard,
        ToastrService,
        InstanceService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
