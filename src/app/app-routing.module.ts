import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LotofacilComponent } from './components/lotofacil/lotofacil.component';
import { MegasenaComponent } from './components/megasena/megasena.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'megasena',component: MegasenaComponent},
  { path: 'lotofacil', component:LotofacilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
