import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public content: string;
  @Input() public textColor: string;
  @Input() public borderColor: string;
  @Input() public backgroundColor: string = "#FFFFFF";
  constructor() { }

  ngOnInit(): void {
  }

}
