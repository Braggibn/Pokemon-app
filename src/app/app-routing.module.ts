import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: 'home', component: TableComponent},
  {path: 'pokeDetail', component: DetailsComponent},
  {path: '', pathMatch: 'full', redirectTo : 'home'},
  {path: '**', pathMatch: 'full', redirectTo : 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
