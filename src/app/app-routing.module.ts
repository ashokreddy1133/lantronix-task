import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';


const routes: Routes = [
  { path: 'ui', 
  loadChildren: () => import('./modules/ui/ui.module').then(m => m.UiModule),
   canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
