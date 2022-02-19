import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { QuestaoUmComponent } from './questao-um/questao-um.component';
import { QuestaoDoisComponent } from './questao-dois/questao-dois.component';
import { QuestaoTresComponent } from './questao-tres/questao-tres.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    QuestaoUmComponent,
    QuestaoDoisComponent,
    QuestaoTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
