import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public title:string = "Site-ul studentului UPT";

  public description: any = "Acest website este destinat studentilor de la Universitatea Politehnica Timisoara. Studentii isi pot vedea notele de la materia Fizica";
  constructor() { }

  ngOnInit(): void {
  }

}
