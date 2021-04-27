import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {

  registroForm: FormGroup;

  constructor( private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.registroForm = this.fb.group({
      nombre:   ['', Validators.required ],
      correo:   ['', [Validators.required, Validators.email ] ],
      password: ['', Validators.required ],
    });
  }
  crearUsuario(){
    if(this.registroForm.invalid){ return;}
    const { nombre, correo, password } = this.registroForm.value;
    console.log(this.registroForm.value)
    this.authService.crearUsuario(nombre , correo , password).then( credenciale =>{
      console.log(credenciale);
      this.router.navigate(['/']);
    })
    .catch(err => console.error(err))
  }
}
