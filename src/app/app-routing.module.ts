import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AuthenticateGuard} from './common/services/auth-service/authenticate.guard';
import {NotAuthenticateGuard} from './common/services/auth-service/not.authenticate.guard';
import {MainComponent} from './main/main.component';
import {UsersComponent} from './dashboard/users/users.component';
import {InstanceComponent} from './dashboard/instance/instance.component';
import {SecurityComponent} from './security/security.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NotAuthenticateGuard]
    }, {
        path: '',
        component: MainComponent,
        canActivate: [AuthenticateGuard],
        children: [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'users', component: UsersComponent},
            {path: 'instances', component: InstanceComponent},
            {path: 'security', component: SecurityComponent},
            {path: 'test', component: TestComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
