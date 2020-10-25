import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 99;
  inputNumber: number = 0;
  @Input() inputColor: string = "#000000"; 
  @Input() formName: string;
  @Input() public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void { 
    if(this.inputNumber < this.maxValue) {
      this.inputNumber++;
    }
  }
  subtract(): void {
    if(this.inputNumber > this.minValue) {
      this.inputNumber--;
    }
  }
}
