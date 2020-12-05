import { ActivatedRoute  } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciutats',
  templateUrl: './ciutats.page.html',
  styleUrls: ['./ciutats.page.scss'],
})
export class CiutatsPage implements OnInit {

  constructor( private router: ActivatedRoute ) {}

  ngOnInit() {

    this.capturarCiutat();

  }

  capturarCiutat(){
    /**
     * Capturem el id, en aquest cas ens retornaria el nom, a partir d'aquí ja podries fer la petició al firebase per a què et 
     * retornes la info d'aquesta ciutat! :D
     */
    console.log(this.router.snapshot.params.id);
  }

}
