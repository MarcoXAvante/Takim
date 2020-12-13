import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  const id;
  const id2;
  constructor( private router: Router,
    private _router: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.capturarCiutat();
  }
  capturarCiutat(){
    this.id = this._router.snapshot.params.id;
    this.id2 = this._router.snapshot.params.categoria;
    console.log(this.id2)
  }
  colorA() {
    document.getElementById("fruita").style.backgroundColor="#ffffff";
    document.getElementById("carn").style.backgroundColor="#d9d9d9";
    document.getElementById("peix").style.backgroundColor="#a6a6a6";
    document.getElementById("pa").style.backgroundColor="#717273";
    document.getElementById("super").style.backgroundColor="#4d5157";
    document.getElementById("llistataf2201").style.display='block'
    document.getElementById("llistatac2201").style.display='none'
    document.getElementById("llistatap2201").style.display='none'
    document.getElementById("llistatapa2201").style.display='none'
    document.getElementById("llistatas2201").style.display='none'
  }
  colorB() {
    document.getElementById("fruita").style.backgroundColor="#d9d9d9";
    document.getElementById("carn").style.backgroundColor="#ffffff";
    document.getElementById("peix").style.backgroundColor="#d9d9d9";
    document.getElementById("pa").style.backgroundColor="#a6a6a6";
    document.getElementById("super").style.backgroundColor="#717273";
    document.getElementById("llistataf2201").style.display='none'
    document.getElementById("llistatac2201").style.display='block'
    document.getElementById("llistatap2201").style.display='none'
    document.getElementById("llistatapa2201").style.display='none'
    document.getElementById("llistatas2201").style.display='none'
  }
  colorC() {
    document.getElementById("fruita").style.backgroundColor="#a6a6a6";
    document.getElementById("carn").style.backgroundColor="#d9d9d9";
    document.getElementById("peix").style.backgroundColor="#ffffff";
    document.getElementById("pa").style.backgroundColor="#d9d9d9";
    document.getElementById("super").style.backgroundColor="#a6a6a6";
    document.getElementById("llistataf2201").style.display='none'
    document.getElementById("llistatac2201").style.display='none'
    document.getElementById("llistatap2201").style.display='block'
    document.getElementById("llistatapa2201").style.display='none'
    document.getElementById("llistatas2201").style.display='none'
  }
  colorD() {
    document.getElementById("fruita").style.backgroundColor="#717273";
    document.getElementById("carn").style.backgroundColor="#a6a6a6";
    document.getElementById("peix").style.backgroundColor="#d9d9d9";
    document.getElementById("pa").style.backgroundColor="#ffffff";
    document.getElementById("super").style.backgroundColor="#d9d9d9";
    document.getElementById("llistataf2201").style.display='none'
    document.getElementById("llistatac2201").style.display='none'
    document.getElementById("llistatap2201").style.display='none'
    document.getElementById("llistatapa2201").style.display='block'
    document.getElementById("llistatas2201").style.display='none'
  }
  colorE() {
    document.getElementById("fruita").style.backgroundColor="#4d5157";
    document.getElementById("carn").style.backgroundColor="#717273";
    document.getElementById("peix").style.backgroundColor="#a6a6a6";
    document.getElementById("pa").style.backgroundColor="#d9d9d9";
    document.getElementById("super").style.backgroundColor="#ffffff";
    document.getElementById("llistataf2201").style.display='none'
    document.getElementById("llistatac2201").style.display='none'
    document.getElementById("llistatap2201").style.display='none'
    document.getElementById("llistatapa2201").style.display='none'
    document.getElementById("llistatas2201").style.display='block'
  }
  backClicked() {
    this.location.back();
  }
}
