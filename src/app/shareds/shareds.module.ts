import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthNavbarComponent } from './components/auth-navbar/auth-navbar.component';
import { AuthSidebarComponent } from './components/auth-sidebar/auth-sidebar.component';
import { AuthContentComponent } from './components/auth-content/auth-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
    declarations: [AuthNavbarComponent, AuthSidebarComponent, AuthContentComponent],
    imports: [
        CommonModule, RouterModule, ReactiveFormsModule, ModalModule.forRoot()
    ],
    exports: [
        AuthNavbarComponent, AuthSidebarComponent, AuthContentComponent, ReactiveFormsModule, ModalModule
    ]
})
export class SharedsModule { }
