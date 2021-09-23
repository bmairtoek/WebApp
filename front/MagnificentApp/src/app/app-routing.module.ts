import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';
import { SecretComponent } from './secret/secret.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
    ]
  },
  { path: 'secret', component: SecretComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
