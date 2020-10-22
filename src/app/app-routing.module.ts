import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageComponent } from './containers/menu-page/menu-page.component';
import { StatsDepPageComponent } from './containers/stats-dep-page/stats-dep-page.component';
import { StatsOverviewPageComponent } from './containers/stats-overview-page/stats-overview-page.component';

const routes: Routes = [
  {path: "", component: StatsDepPageComponent},
  {path: "menu", component: MenuPageComponent},
  {path: "overview", component: StatsOverviewPageComponent},
  {path: "department", component: StatsDepPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
