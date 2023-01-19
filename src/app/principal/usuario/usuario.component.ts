import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

// Crear instancia de UserServices
constructor(private userService: UserserviceService){}
mostrar = true;
// Ejecutar el metodo getUsersAll del servicio al cargar el componente
  listado = new Array();
  ngOnInit(){
    if(this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
      }

  this.userService.getUsersAllInterceptor().subscribe({
    next: (response: any) => {this.listado = response.body; console.log(response)},
    error: (e) => console.error(e),
    complete: () => console.info("La API devolcio todos los registros")
  });

}

}











