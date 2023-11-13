import { Injectable } from '@angular/core';

import {collection, Firestore, collectionData, doc, addDoc, deleteDoc} from '@angular/fire/firestore';

export interface Book{
  id?:number;
  author:string;
  price:string;
  publishYear:number;
  publisher:string;
  title:string;
  quantity:number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore:Firestore) { }

  getBooks(){
    const booksRef=collection(this.firestore,'books');
    return collectionData(booksRef,{idField:'id'});
  }

  addBook(book:Book){
    const booksRef = collection(this.firestore,'books');
    return addDoc(booksRef,book);
  }

  deleteBook(book:Book){
    const bookRef=doc(this.firestore,`books/${book.id}`);
    return deleteDoc(bookRef);
  }
}
