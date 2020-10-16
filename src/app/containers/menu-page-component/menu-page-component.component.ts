import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-page-component',
  templateUrl: './menu-page-component.component.html',
  styleUrls: ['./menu-page-component.component.css']
})
export class MenuPageComponentComponent implements OnInit {
  public infoCardTitle = "Information";
  public infoCardContent = "info";
  public riskCardTitle ="Skapa riskbedömning";
  public riskCardContent = "edit";

  constructor() { }

  ngOnInit(): void {
  }

}
