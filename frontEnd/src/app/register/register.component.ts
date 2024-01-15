import { Component } from '@angular/core';
import { User } from '../User';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {

  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router){

  }

  registerUser(){

    if (!this.user.name || !this.user.msisdn || !this.user.email || !this.user.password) {
      this.msg=("Você precisa preencher todos os campos");
    }
    else {
      this._service.registerUserFromRemote(this.user).subscribe({
        next: data => {
          console.log("Sucesso.", data);
          this.msg="Cadastrado com sucesso. Acesse a página de login e seja bem-vindo! :]";

        },
        error: error => {
          console.error("Algum erro aconteceu. Tente novamente!", error);
          this.msg=("Esse email já existe. Tente novamente!");
        }
      })
    }
  }
}
