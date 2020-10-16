import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

const MaterialComponents = 
[
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
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
