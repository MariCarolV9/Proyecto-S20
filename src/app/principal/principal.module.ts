import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsuarioComponent
  ]
})
export class PrincipalModule { }
