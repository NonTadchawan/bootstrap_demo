import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TextComponent} from "./text/text.component";
import {DisplayComponent} from "./display/display.component";
import {TableComponent} from "./table/table.component";
import {AlertsComponent} from "./alerts/alerts.component";
import {ButtonComponent} from "./button/button.component";
import {NavComponent} from "./nav/nav.component";
import {MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {
    path: "display",
    component: DisplayComponent
  },
  {
    path: "text",
    component: TextComponent
  },
  {
    path:"table",
    component:TableComponent
  },
  {
    path:"alert",
    component:AlertsComponent
  },
  {
    path:"button",
    component:ButtonComponent
  },
  {
   path:"nav",
   component:NavComponent
  },
  {
    path:"menu",
    component:MenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
