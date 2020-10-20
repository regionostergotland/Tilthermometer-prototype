import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-overview-page-component',
  templateUrl: './stats-overview-page-component.component.html',
  styleUrls: ['./stats-overview-page-component.component.css']
})
export class StatsOverviewPageComponentComponent implements OnInit {

  public showSideNav: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

 
  openSideNav() {}
}
