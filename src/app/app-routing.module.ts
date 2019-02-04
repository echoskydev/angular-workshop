import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MembersComponent } from './components/members/members.component';
import { CustomersComponent } from './components/customers/customers.component';
import { MemberCreateComponent } from './components/members/member-create/member-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'members', component: MembersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'member-create', component: MemberCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
