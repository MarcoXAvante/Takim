
import { ActivatedRoute, Router  } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ciutats',
  templateUrl: './ciutats.page.html',
  styleUrls: ['./ciutats.page.scss'],
})
export class CiutatsPage implements OnInit {
  const id;
  constructor( private _router: ActivatedRoute,
    private router:Router, 
    private location: Location ) {}

  ngOnInit() {

    this.capturarCiutat();

  }

  capturarCiutat(){
    /**
     * Capturem el id, en aquest cas ens retornaria el nom, a partir d'aquí ja podries fer la petició al firebase per a què et 
     * retornes la info d'aquesta ciutat! :D
     */
    this.id = this._router.snapshot.params.id;
  }
  backClicked() {
    this.location.back();
  }
  redirAjuntament() {
    this.router.navigate(['categories', {categoria: "Ajuntament", id: this._router.snapshot.params.id} ])
  }
  redirAlimentacio() {
    this.router.navigate(['categories', {categoria: "Alimentació", id: this._router.snapshot.params.id}])
  }
  redirBars() {
    this.router.navigate(['categories', {categoria: "Bars", id: this._router.snapshot.params.id}])
  }
  redirBotigues() {
    this.router.navigate(['categories', {categoria: "Botigues", id: this._router.snapshot.params.id}])
  }
}