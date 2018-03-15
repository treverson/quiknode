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

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: InterceptorProvider, multi: true},
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
