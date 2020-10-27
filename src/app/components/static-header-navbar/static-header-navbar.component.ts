import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-static-header-navbar',
  templateUrl: './static-header-navbar.component.html',
  styleUrls: ['./static-header-navbar.component.css']
})
export class StaticHeaderNavBarComponent implements OnInit {
  @Output() public emitShowSide = new EventEmitter();
  @Output() public emitHasLoggedOut = new EventEmitter();
  public showSideNav: boolean = false;
  public text: string = 'Logga ut';
  public showUserInfo: boolean = false;
  public userHasLoggedOut: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.showSideNav =! this.showSideNav; 
    this.emitShowSide.emit(this.showSideNav);
   }

   toggleShowUserInfo(): void {
     this.showUserInfo =! this.showUserInfo;
   }

   hasLoggedOut(): void {
     this.userHasLoggedOut = true;
     this.emitHasLoggedOut.emit(this.userHasLoggedOut);
   }

}
