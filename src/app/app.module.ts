import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { StaticHeaderNavBarComponent } from './components/static-header-navbar/static-header-navbar.component';
import { StaticSideNavbarComponent } from './components/static-side-navbar/static-side-navbar.component';
import { MenuPageComponent } from './containers/menu-page/menu-page.component';
import { StatsDepPageComponent } from './containers/stats-dep-page/stats-dep-page.component';
import { RiskPageComponent } from './containers/risk-page/risk-page.component';
import { StatsOverviewPageComponent } from './containers/stats-overview-page/stats-overview-page.component';

import { InfoBarComponent } from './components/info-bar/info-bar.component';
import { TableComponent } from './components/table/table.component';
import { DangerButtonComponent } from './components/buttons/danger-button/danger-button.component';
import { RegularButtonComponent } from './components/buttons/regular-button/regular-button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';

const pages = [
  RiskPageComponent,
  StatsDepPageComponent,
  StatsOverviewPageComponent,
  MenuPageComponent
];

const staticComponents = [
  StaticHeaderNavBarComponent,
  StaticSideNavbarComponent
];

const components = [
  TableComponent,
  DangerButtonComponent,
  RegularButtonComponent,
  InputComponent,
  CardComponent,
  InfoBarComponent
]

@NgModule({
  declarations: [
    AppComponent,
    pages,
    staticComponents,
    components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
