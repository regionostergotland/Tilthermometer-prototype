import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input() public content: string;
  @Input() public textColor: string;
  @Input() public borderColor: string;
  @Input() public backgroundColor: string = "#FFFFFF";
  constructor() { }

  ngOnInit(): void {
  }

}
