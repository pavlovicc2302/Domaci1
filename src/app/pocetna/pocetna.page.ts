import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.page.html',
  styleUrls: ['./pocetna.page.scss'],
})
export class PocetnaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editBook(book: any) {
    // Dodaj logiku za izmenu knjige
    console.log('Izmena knjige:', book);
    // Ovde možeš otvoriti modalni prozor ili navigirati na stranicu za izmenu
  }
  
}
