import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HelpComponent} from './help/help.component';
const routes:Routes=[{
    path:'login',
    component:LoginComponent
  },
  {
    path:'help',
    component:HelpComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
