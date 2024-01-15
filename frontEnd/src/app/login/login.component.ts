
import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = new User();

  msg='';
userModel: any;
password: any;

  constructor(private _service : RegistrationService, private _router : Router){

  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe({
      next: data => {
        console.log("Sucesso.", data);
        this._router.navigate(['/home'])

      },
      error: error => {
        console.error("Credenciais erradas.", error);
        this.msg="Credenciais erradas. Digite um email e senha válidos.";
      }
  })
  }

}
