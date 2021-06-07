import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './blocks/login/login.component';
import {TableComponent} from './blocks/table/table.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: TableComponent, canActivate: [AuthGuard]},
    {path: '**', redirectTo: '/'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
