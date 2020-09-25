import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  public pages: any = [
    {name: 'Acasa', url: ''},
    {name:'Intrebari frecvente', url: '/faq'},
    {name: 'Contact', url: '/contact'},
    {name: 'Admin', url: '/admin'},
  ];

  

  ngOnInit(): void {
  }

}
