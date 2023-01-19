import { Component } from '@angular/core';
import { PostserviceService } from 'src/app/services/postservice.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

// Crear instancia de PostServices
constructor(private userService: PostserviceService){}

mostrar = true;

  listado = new Array();

  ngOnInit(){
    if(this.mostrar){
      this.mostrar = false;
    }else{
      this.mostrar = true;
      }

  this.userService.getPostAllInterceptor().subscribe({
    next: (response: any) => {this.listado = response.body; console.log(response)},
    error: (e) => console.error(e),
    complete: () => console.info("La API devolvio todos los registros")
  });

}
}
