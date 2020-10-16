import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollow-button',
  templateUrl: './hollow-button.component.html',
  styleUrls: ['./hollow-button.component.css']
})
export class HollowButtonComponent implements OnInit {
  @Input() public buttonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
