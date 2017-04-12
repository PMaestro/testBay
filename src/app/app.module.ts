import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InitComponent } from './init/init.component';

import { routing, appRoutingProviders } from './app.router';
import { Auth } from './service/auth.service';
import {AuthGuard} from './service/auth.guard';
//add the providers
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,Auth,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
