import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from '../service/data.service';
import {Subscription} from 'rxjs';
import { CreatePage } from '../create/create.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  books:any;
  sub:Subscription = new Subscription;

  constructor(public modalCtrl:ModalController, private dataService:DataService) {}
  ngOnInit(): void {
    this.getData();
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  async getData(){
    this.sub=this.dataService.getBooks().subscribe((res)=> {
      this.books = res;
      console.log(this.books);
    })
  }

  async gotoCreatePage(){
    const modal = await this.modalCtrl.create({
      component: CreatePage
    })
    return await modal.present();
  }

  async deleteBook(book: any){
    await this.dataService.deleteBook(book);
  }

}
