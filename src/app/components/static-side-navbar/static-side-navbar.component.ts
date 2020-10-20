import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-static-side-navbar',
  templateUrl: './static-side-navbar.component.html',
  styleUrls: ['./static-side-navbar.component.css']
})
export class StaticSideNavbarComponent implements OnInit {
  @Output() public eventEmitter = new EventEmitter();
  @Input() public showFull: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav() {
    this.showFull =! this.showFull;
  }

}
