import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavBarComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter();
  public showSideNav: boolean = false;
  public text: string = 'Logga ut';
  public showUserInfo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.showSideNav =! this.showSideNav; 
    this.eventEmitter.emit(this.showSideNav);
   }

   toggleShowUserInfo(): void {
     this.showUserInfo =! this.showUserInfo;
     console.log(this.showUserInfo);
   }

}
