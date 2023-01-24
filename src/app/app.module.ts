import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TabellaComponent,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
