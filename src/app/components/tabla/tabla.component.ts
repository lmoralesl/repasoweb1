import { Component, inject } from '@angular/core';
import { PersonalService } from '../../service/personal.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject (PersonalService)
  personal : any

  ngOnInit(){
    this.servicio.gettPersonal().subscribe( p => {
      this.personal = p
    })
  }

  eliminar(id:string){

    this.servicio.deletePersona(id).subscribe()

  }


}
