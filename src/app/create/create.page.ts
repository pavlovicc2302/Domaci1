import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  bookTitle!:string;
  bookAuthor:string;
  bookPublisher:string;
  bookPublishYear:number;
  bookDescription:string;
  bookQuantity:number;
  bookPrice:string;

  constructor(public modalCtrl:ModalController, private dataservice:DataService) { }

  ngOnInit() {
  }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  async addBook(){
    await this.dataservice.addBook({
      title: this.bookTitle,
      author: this.bookAuthor,
      publisher: this.bookPublisher,
      price: this.bookPrice,
      publishYear: this.bookPublishYear,
      quantity: this.bookQuantity,
      description: this.bookDescription
    });

    this.dismiss();
  }

}
