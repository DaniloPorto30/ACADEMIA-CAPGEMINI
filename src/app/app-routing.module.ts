import { QuestaoTresComponent } from './questao-tres/questao-tres.component';
import { QuestaoDoisComponent } from './questao-dois/questao-dois.component';
import { QuestaoUmComponent } from './questao-um/questao-um.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'questao-um',
  component: QuestaoUmComponent,
},
{
  path: 'questao-dois',
  component: QuestaoDoisComponent,
},
{
  path: 'questao-tres',
  component: QuestaoTresComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
