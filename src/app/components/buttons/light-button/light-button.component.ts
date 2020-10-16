import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-button',
  templateUrl: './light-button.component.html',
  styleUrls: ['./light-button.component.css']
})
export class LightButtonComponent implements OnInit {
  @Input() public buttonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
