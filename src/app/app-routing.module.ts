import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthenticateGuard} from './common/services/auth-service/authenticate.guard';
import {NotAuthenticateGuard} from './common/services/auth-service/not.authenticate.guard';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthenticateGuard]
    }, {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthenticateGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
