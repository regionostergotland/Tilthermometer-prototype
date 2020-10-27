import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-risk-page',
  templateUrl: './risk-page.component.html',
  styleUrls: ['./risk-page.component.css']
})
export class RiskPageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  assessmentForm = this.formBuilder.group({
    one1a: ['', Validators.required],
    one1b: ['', Validators.required],
    one1c: ['', Validators.required],
    one1d: ['', Validators.required],
    one1e: ['', Validators.required],
    one2a: ['', Validators.required],
    one2b: ['', Validators.required],
    one2c: ['', Validators.required],
    one2d: ['', Validators.required],
    one2e: ['', Validators.required],
    one3c: ['', Validators.required],
    one3d: ['', Validators.required],
    one3e: ['', Validators.required],
    two1c: ['', Validators.required],
    two1d: ['', Validators.required],
    two1e: ['', Validators.required],
    two2c: ['', Validators.required],
    two3d: ['', Validators.required],
    two3e: ['', Validators.required],
    three1: ['', Validators.required],
    three2: ['', Validators.required],
    foura1: ['', Validators.required],
    foura2: ['', Validators.required],
    fourb1: ['', Validators.required],
    fourb2: ['', Validators.required],
    five1: ['', Validators.required],
    five2: ['', Validators.required],
    five3: ['', Validators.required],
    five4: ['', Validators.required],
    extra: ['', Validators.required],
  });

  inputNames: string[] = [
    "one1a",
    "one1b",
    "one1c",
    "one1d",
    "one1e",
    "one2a",
    "one2b",
    "one2c",
    "one2d",
    "one2e",
    "one3c",
    "one3d",
    "one3e",
    "two1c",
    "two1d",
    "two1e",
    "two2c",
    "two3d",
    "two3e",
    "three1",
    "three2",
    "foura1",
    "foura2",
    "fourb1",
    "fourb2",
    "five1",
    "five2",
    "five3",
    "five4",
    "extra"
  ]

  ngOnInit(): void { }

  changeInputValue(event: number, inputName: string): void {
    if(this.assessmentForm.contains(inputName))
    this.assessmentForm.get(inputName).setValue(event);
  }

  throwValues() {
    console.log("Throwing values");
    for(let i = 0; i < this.inputNames.length; i++) {
      this.assessmentForm.get(this.inputNames[i]).setValue(0);
    }
  }

  saveValues() {
    
  }

  saveAndSignValues() {

  }

}
