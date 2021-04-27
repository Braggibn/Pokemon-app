import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { TableComponent } from './components/table/table.component';
import { Page404Component } from './page404/page404.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'pokeCare', component: DetailsComponent , canActivate:[AuthGuard]},
  {path: '', component: TableComponent, canActivate:[AuthGuard]},
  {path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
