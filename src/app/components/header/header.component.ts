import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  displayEmail
  constructor(
    private router: Router
  ) { }

  goToLogin(){
    this.router.navigate(['/login'])
  }
  ngOnInit(): void {
    this.displayEmail = localStorage.getItem('email');
  }

}
