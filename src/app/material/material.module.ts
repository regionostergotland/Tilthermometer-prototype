import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = 
[
  MatIconModule,
  MatToolbarModule,
  MatTableModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports:
   [
    CommonModule,
    MaterialComponents
  ],
  exports: 
  [
    MaterialComponents
  ]
})
export class MaterialModule { }
