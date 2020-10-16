import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filled-button',
  templateUrl: './filled-button.component.html',
  styleUrls: ['./filled-button.component.css']
})
export class FilledButtonComponent implements OnInit {
  @Input() public buttonText: string;
  constructor() { }

  ngOnInit(): void {
  }

}
