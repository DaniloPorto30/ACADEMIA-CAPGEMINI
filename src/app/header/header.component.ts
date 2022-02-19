import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  login: string = "/assets/img/logo.png";
  logo: string = "/assets/img/logo.png";
  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    const nav = document.getElementById('nav');
    nav?.classList.toggle('active');
  }
  fechar(){
    const nav = document.getElementById('nav');
    nav?.classList.toggle('active');
}

logout(): void {
  this.logout();
}
}
