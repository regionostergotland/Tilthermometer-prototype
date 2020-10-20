import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-card',
  templateUrl: './large-card.component.html',
  styleUrls: ['./large-card.component.css']
})
export class LargeCardComponent implements OnInit {
@Input() public cardTitle: string;
@Input() public cardContent: string;

  constructor() { }

  ngOnInit(): void {
  }

}
