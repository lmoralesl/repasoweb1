import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  servicio = inject(LoginService)

  email : any
  password : any

  login(usuario: any){
    this.servicio.postLogin(usuario.value).subscribe(u =>{

      if(u.accessToken !=''){
        localStorage.setItem("login", 'true')
        window.location.href = 'privado'
      }

    })

  }

}
