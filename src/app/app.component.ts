import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public infoCardTitle = "Information";
  public infoCardContent = "info";
  public riskCardTitle ="Skapa riskbedömning";
  public riskCardContent = "edit";
  public showSideNav:boolean = false;
  public buttonText: string = "button";

  toggleShowSideNav() { this.showSideNav =! this.showSideNav; }
}
