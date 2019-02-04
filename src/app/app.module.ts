import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedsModule } from './shareds/shareds.module';
import { LoginComponent } from './components/login/login.component';
import { MembersComponent } from './components/members/members.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberCreateComponent } from './components/members/member-create/member-create.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, MembersComponent, CustomersComponent, MemberCreateComponent],
  imports: [BrowserModule, AppRoutingModule, SharedsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

// Root Layout
