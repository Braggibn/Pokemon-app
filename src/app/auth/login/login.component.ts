import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required ],
    });
  }

  onLogin(){
    if(this.loginForm.invalid){ return;}
    const { email, password } = this.loginForm.value;
    console.log(this.loginForm.value)
    this.authService.loginUsuario( email , password).then( credenciale =>{
      console.log(credenciale);
      this.router.navigate(['/']);
    })
    .catch(err => console.error(err))
  }

}
