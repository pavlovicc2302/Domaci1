import { Component, OnInit, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService, Book } from '../service/data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  @Input() book:any;
  number: number=0;
  constructor(public modalCtrl: ModalController, private dataService:DataService) { }

  ngOnInit() {
    console.log(this.book);
  }

  async dismiss(){
    await this.modalCtrl.dismiss();
  }

  async updateBook(){
    await this.dataService.updateBook(this.book);
    this.dismiss();
  }

}
