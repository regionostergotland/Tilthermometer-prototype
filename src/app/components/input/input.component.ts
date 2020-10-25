import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  minValue: number = 0;
  maxValue: number = 99;
  @Input() public inputNumber: number = 0;
  @Output() public emittNumber: EventEmitter<number> = new EventEmitter();
  @Input() public inputColor: string = "#000000"; 

  constructor() { 

  }

  ngOnInit(): void { 

  }

  emittInputNumber() {
    this.emittNumber.emit(this.inputNumber);
  }

  validateAndEmitt(): void {
    if(this.inputNumber <= this.maxValue && this.inputNumber >= this.minValue) {
      this.emittInputNumber();
      }
    else {
      this.inputNumber = 0;
      }
    }

    increment(): void { 
      if(this.inputNumber < this.maxValue) {
        this.inputNumber++;
        this.emittInputNumber();
      }
    }
    decrement(): void {
      if(this.inputNumber > this.minValue) {
        this.inputNumber--;
        this.emittInputNumber();
      }
    }
  }

