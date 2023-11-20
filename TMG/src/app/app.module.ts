import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { LoginComponent } from './layout/login/login.component';
import { RegisterComponent } from './layout/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimaryTenantComponent } from './layout/primary-tenet/primary-tenant.component';
import { Tenant2Component } from './layout/primary-tenet/tenant2/tenant2.component';
import { Tenant3Component } from './layout/primary-tenet/tenant3/tenant3.component';
import { Tenant4Component } from './layout/primary-tenet/tenant4/tenant4.component';
import { CosignerComponent } from './layout/primary-tenet/cosigner/cosigner.component';
import { ProfileComponent } from './profile/profile.component';
import { TmgUsersComponent } from './profile/tmg-users/tmg-users.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PagenotfoundComponent,
    LoginComponent,
    RegisterComponent,
    PrimaryTenantComponent,
    Tenant2Component,
    Tenant3Component,
    Tenant4Component,
    CosignerComponent,
    ProfileComponent,
    TmgUsersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
