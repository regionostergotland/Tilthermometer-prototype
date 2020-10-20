import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-dep-page',
  templateUrl: './stats-dep-page.component.html',
  styleUrls: ['./stats-dep-page.component.css']
})
export class StatsDepPageComponent implements OnInit {
  public Test:string = "Test";
  constructor() { }

  ngOnInit(): void {
  }

}
