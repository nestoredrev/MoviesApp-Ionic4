import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo:string;
  @Input() showBackButton: boolean;
  @Input() searchFavorites: boolean;

  constructor(private router: Router) {
    
  }

  ngOnInit() {}

    
  buscar( termino:string ) {
    

    let texto = termino.trim();
    if(texto.length === 0) {
      return;
    }

    const url = this.router.url;
    this.router.navigate([`${url}/buscar`, texto]);
        
  }

}
