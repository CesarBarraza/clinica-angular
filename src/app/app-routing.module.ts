import { NgModule } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';
import { SelectivePreloadingStrategyService } from './componentes/shared/selective-preloading-strategy.service';

const routes: Routes = [
  { 
    path: ' ', component: MenuComponent 
  },
  { 
    path: 'user', 
    loadChildren: () => import('./componentes/user/user.module').then(m => m.UserModule)
  },
  {
    path:'paciente',
   loadChildren: () => import('./componentes/pacientes/paciente.module').then(m => m.PacienteModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: SelectivePreloadingStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
