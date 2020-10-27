import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogOutPageComponent } from './containers/log-out-page/log-out-page.component';
import { RiskPageComponent } from './containers/risk-page/risk-page.component';
import { MenuPageComponent } from './containers/menu-page/menu-page.component';
import { StatsDepPageComponent } from './containers/stats-dep-page/stats-dep-page.component';
import { StatsOverviewPageComponent } from './containers/stats-overview-page/stats-overview-page.component';

const routes: Routes = [
  {path: "", component: RiskPageComponent},
  {path: "menu", component: MenuPageComponent},
  {path: "overview", component: StatsOverviewPageComponent},
  {path: "department", component: StatsDepPageComponent},
  {path: "risk", component: RiskPageComponent},
  {path: "logout", component: LogOutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
