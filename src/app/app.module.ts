import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { TabellaComponent } from './components/tabella/tabella.component';
import { DettaglioComponent } from './components/dettaglio/dettaglio.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "tabella", component: TabellaComponent},
  {path: "form", component: FormComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TabellaComponent,
    DettaglioComponent,
    NavbarComponent
  ],
  imports: [

    [RouterModule.forRoot(routes)],
    BrowserModule,
    FormsModule,
  ],

  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
