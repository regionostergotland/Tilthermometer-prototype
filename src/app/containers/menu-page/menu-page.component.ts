import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  public infoCardTitle = "Information";
  public infoCardContent = "info";
  public riskCardTitle ="Skapa riskbedömning";
  public riskCardContent = "edit";

  constructor() { }

  ngOnInit(): void {
  }

}
