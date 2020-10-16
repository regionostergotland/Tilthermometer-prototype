import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger-button',
  templateUrl: './danger-button.component.html',
  styleUrls: ['./danger-button.component.css']
})
export class DangerButtonComponent implements OnInit {
   @Input() public buttonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
