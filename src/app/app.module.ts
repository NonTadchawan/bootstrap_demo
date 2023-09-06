import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextComponent } from './text/text.component';
import { DisplayComponent } from './display/display.component';
import { TableComponent } from './table/table.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonComponent } from './button/button.component';
import { NavComponent } from './nav/nav.component';
import {AutoSizeInputModule} from "ngx-autosize-input";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DisplayComponent,
    TableComponent,
    AlertsComponent,
    ButtonComponent,
    NavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AutoSizeInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
