import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showSideNav:boolean = false;

  toggleShowSideNav() { this.showSideNav =! this.showSideNav; }
}
