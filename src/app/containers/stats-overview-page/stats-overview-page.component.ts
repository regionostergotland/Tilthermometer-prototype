import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-overview-page',
  templateUrl: './stats-overview-page.component.html',
  styleUrls: ['./stats-overview-page.component.css']
})
export class StatsOverviewPageComponent implements OnInit {

  public showSideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

 
  openSideNav() {}
}
