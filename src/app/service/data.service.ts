import { Injectable } from '@angular/core';

import {collection, Firestore, collectionData, doc} from '@angular/fire/firestore';

export interface Task{
  id?:number;
  author:string;
  price:string;
  publishYear:number;
  publisher:string;
  title:string;
  quantity:number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore) { }

  getTasks(){
    const tasksRef=collection(this.firestore,'books');
    return collectionData(tasksRef,{idField:'id'});
  }
}
