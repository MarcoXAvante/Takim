import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { debounceTime } from "rxjs/operators";
interface TownData {
  Nom: string;
  Comarca: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public searchControl: FormControl;
  isTownAvailable = false;  
  townList = [];
  townData: TownData;
  townForm: FormGroup;
  filterTerm: string;
  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    public fb: FormBuilder) { 
      this.townData = {} as TownData;
      this.searchControl = new FormControl();
    }
  ngOnInit() {
    this.firestore.collection('municipis').snapshotChanges().subscribe(data => {
      this.townList = data.map(e => {
        return {
          Nom: e.payload.doc.data()['Nom'],
          Comarca: e.payload.doc.data()['Comarca'],
        }
      })
      this.townList.sort((a,b) => a.Nom.localeCompare(b.Nom));
      console.log(this.townList);
    })
    this.setfilterTown("");
    this.searchControl.valueChanges
    .pipe(debounceTime(700))
    .subscribe(search => {
      this.setfilterTown(search);
    })
  }

  prova(town) {
    // Afegim el nom de la ciutat a la ruta (però aconsello posar un id o uuid)
    this.router.navigate(['ciutats', { id: town.Nom}])
  }
  filterTown(searchTerm) {
  return this.townList.filter(town => {
    return town.Nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  })
  }
  setfilterTown(searchTerm) {
    this.townList = this.filterTown(searchTerm)
  }
}
