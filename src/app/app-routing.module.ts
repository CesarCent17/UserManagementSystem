import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  {path: 'usuarios', component:ListUserComponent},
  {path: '', redirectTo:'usuarios', pathMatch:'full'},
  {path: 'crear-usuario', component:CreateUserComponent},
  {path: 'actualizar-usuario/:id', component:UpdateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
