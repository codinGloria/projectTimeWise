import { User } from './../../user';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user = new User();

  constructor(private _service : RegisterService){

  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
    data => console.log("Sucesso.") ,
    error => console.log("Erro.")
    )
  }

}
