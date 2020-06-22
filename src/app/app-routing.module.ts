import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./login-signup/login-signup.module').then(n => n.LoginSignupModule)
  },
  {
    path:'user/:id/:emailID',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
