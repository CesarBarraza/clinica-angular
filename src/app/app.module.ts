import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AlertModule } from 'ngx-alerts';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 3000, positionX: 'right', positionY: 'top'})
  ],
  providers: [
    /*{ provide: HTTP_INTERCEPTORS, useClass: LoginIntercepService, multi: true }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
