import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-button',
  templateUrl: './regular-button.component.html',
  styleUrls: ['./regular-button.component.css']
})
export class RegularButtonComponent implements OnInit {
  @Input() public btn_text: string;
  @Input() public btn_background: string;
  @Input() public btn_borderColor: string;
  @Input() public btn_color: string = "#FFFFFF";

  constructor() { }
  ngOnInit(): void { }

  getStyle() {
    return {
      background: this.btn_background,
      borderColor: this.btn_borderColor,
      color: this.btn_color
    };
  }
}
