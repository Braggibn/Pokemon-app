import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router,
    private authservice: AuthService) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['/']);
 }
 logut(){
  this.authservice.logout().then(() =>{
    this.router.navigate(['/login'])
  });
 }
}
