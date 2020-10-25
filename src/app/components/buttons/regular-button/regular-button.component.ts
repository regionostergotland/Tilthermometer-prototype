import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-button',
  templateUrl: './regular-button.component.html',
  styleUrls: ['./regular-button.component.css']
})
export class RegularButtonComponent implements OnInit {
  @Input() public btn_text: string;
  @Input() public btn_back: string;
  @Input() public btn_border: string;
  @Input() public btn_color: string;

  constructor() { }
  ngOnInit(): void { }

   getStyle(): Object {
     return {
       backgroundColor: this.btn_back,
       borderColor: this.btn_border,
       color: this.btn_color
     };
   }
}
