import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.css']
})
export class HeaderNavBarComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter();
  public showSideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.showSideNav =! this.showSideNav; 
    this.eventEmitter.emit(this.showSideNav);
   }

}
