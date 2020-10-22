import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-static-header-navbar',
  templateUrl: './static-header-navbar.component.html',
  styleUrls: ['./static-header-navbar.component.css']
})
export class StaticHeaderNavBarComponent implements OnInit {
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
