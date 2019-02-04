import { Component, OnInit } from '@angular/core';
declare let App;

@Component({
  selector: 'app-auth-sidebar',
  templateUrl: './auth-sidebar.component.html',
  styleUrls: ['./auth-sidebar.component.scss']
})
export class AuthSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => App.initialLoadPage(), 100);
  }

}
