import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-risk-page',
  templateUrl: './risk-page.component.html',
  styleUrls: ['./risk-page.component.css']
})
export class RiskPageComponent implements OnInit {
  assessmentForm = new FormGroup({
    one1a: new FormControl(),
    one1b: new FormControl(),
    one1c: new FormControl(),
    one1d: new FormControl(),
    one1e: new FormControl(),
    one2a: new FormControl(),
    one2b: new FormControl(),
    one2c: new FormControl(),
    one2d: new FormControl(),
    one2e: new FormControl(),
    one3c: new FormControl(),
    one3d: new FormControl(),
    one3e: new FormControl(),
    two1c: new FormControl(),
    two1d: new FormControl(),
    two1e: new FormControl(),
    two2c: new FormControl(),
    two3d: new FormControl(),
    two3e: new FormControl(),
    three1: new FormControl(),
    three2: new FormControl(),
    foura1: new FormControl(),
    foura2: new FormControl(),
    fourb1: new FormControl(),
    fourb2: new FormControl(),
    five1: new FormControl(),
    five2: new FormControl(),
    five3: new FormControl(),
    five4: new FormControl(),
    extra: new FormControl()
});

  constructor() { }

  ngOnInit(): void { }

  submitValues() {

  }

}
