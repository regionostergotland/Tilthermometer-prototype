import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { CardComponent } from './components/card/card.component';
import { HeaderNavBarComponent } from './components/header-navbar/header-navbar.component';
import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { MenuPageComponentComponent } from './containers/menu-page-component/menu-page-component.component';
import { StatisticsPageComponentComponent } from './containers/statistics-page-component/statistics-page-component.component';
import { TableComponent } from './components/table/table.component';
import { FilledButtonComponent } from './components/buttons/filled-button/filled-button.component';
import { TrashButtonComponent } from './components/buttons/trash-button/trash-button.component';
import { HollowButtonComponent } from './components/buttons/hollow-button/hollow-button.component';
import { LightButtonComponent } from './components/buttons/light-button/light-button.component';
import { DangerButtonComponent } from './components/buttons/danger-button/danger-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderNavBarComponent,
    InfoBarComponent,
    MenuPageComponentComponent,
    StatisticsPageComponentComponent,
    TableComponent,
    FilledButtonComponent,
    TrashButtonComponent,
    HollowButtonComponent,
    LightButtonComponent,
    DangerButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
