import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  collectionName = 'users';
  collectionName2= 'empresa';

  constructor(
    private firestore: AngularFirestore
  ) { }

  create_user(record) {
    return this.firestore.collection(this.collectionName).add(record);
  }

  read_users() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  update_user(recordID, record) {
    this.firestore.doc(this.collectionName + '/' + recordID).update(record);
  }

  delete_user(record_id) {
    this.firestore.doc(this.collectionName + '/' + record_id).delete();
  }
  create_empresa(record) {
    return this.firestore.collection(this.collectionName2).add(record);
  }

  read_empresa() {
    return this.firestore.collection(this.collectionName2).snapshotChanges();
  }

  update_empresa(recordID, record) {
    this.firestore.doc(this.collectionName2 + '/' + recordID).update(record);
  }

  delete_empresa(record_id) {
    this.firestore.doc(this.collectionName2 + '/' + record_id).delete();
  }

}
