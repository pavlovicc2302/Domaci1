import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newBook = {
    title: '',
    author: '',
    publisher: '',
    publishYear: null,
    price: null,
    quantity: null,
    coverImageUrl: '',
  };
  createBook() {
    // Dodaj logiku za kreiranje knjige
    console.log('Kreiranje knjige:', this.newBook);
    // Ovde možeš dodati logiku za slanje podataka na server ili lokalno skladište
    // Nakon uspešnog kreiranja, možeš preusmeriti korisnika nazad na prethodnu stranicu ili na drugu stranicu
    
  }
}
