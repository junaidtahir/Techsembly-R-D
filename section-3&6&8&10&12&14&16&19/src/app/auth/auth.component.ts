import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService){}

  onSwitchMode(){
    this.isLoginMode = this.isLoginMode ? false : true;
  }

  onSubmit(form: NgForm){
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponse>;

    this.isLoading = true;

    if(this.isLoginMode){
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(resData =>{
      this.isLoading = false;
      console.log(resData)
    }, errorMessage => {
      this.isLoading = false;
      this.error = errorMessage
      console.log(errorMessage)
    });
    form.reset();
  }
}
