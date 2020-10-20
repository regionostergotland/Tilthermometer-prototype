import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogOutPageComponent } from './containers/log-out-page/log-out-page.component';
import { MenuPageComponentComponent } from './containers/menu-page-component/menu-page-component.component';
import { StatsDepPageComponent } from './containers/stats-dep-page/stats-dep-page.component';
import { StatsOverviewPageComponentComponent } from './containers/stats-overview-page-component/stats-overview-page-component.component';
import { SmallCardComponent } from './components/small-card/small-card.component';

const routes: Routes = [
  {path: "", component: StatsDepPageComponent},
  {path: "menupage", component: MenuPageComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
