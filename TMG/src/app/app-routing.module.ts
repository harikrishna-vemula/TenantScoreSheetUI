import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { PrimaryTenantComponent } from './layout/primary-tenet/primary-tenant.component';
import { Tenant2Component } from './layout/primary-tenet/tenant2/tenant2.component';
import { Tenant3Component } from './layout/primary-tenet/tenant3/tenant3.component';
import { Tenant4Component } from './layout/primary-tenet/tenant4/tenant4.component';
import { CosignerComponent } from './layout/primary-tenet/cosigner/cosigner.component';
import { ProfileComponent } from './profile/profile.component';
import { TmgUsersComponent } from './profile/tmg-users/tmg-users.component';

 

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'primary-tenant', component: PrimaryTenantComponent },
  { path: 'tenant2', component: Tenant2Component },
  { path: 'tenant3', component: Tenant3Component },
  { path: 'tenant4', component: Tenant4Component },
  { path: 'cosigner', component: CosignerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tmg-users', component: TmgUsersComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
