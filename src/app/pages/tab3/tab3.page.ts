import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  darkMode: boolean;
  effectOption:string;

  constructor() {
    // Establecer el modo segun el modo dark o light que tiene 
    // el navegador o el dispositivo movil
    //const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    //if(prefersDark.matches) document.body.classList.toggle('dark');

    this.darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    this.effectOption = localStorage.getItem('slideShowEffect') || 'slideOptsCube';
  }

  cambiarTheme() {
    this.darkMode = !this.darkMode;
    localStorage.setItem('darkMode', typeof this.darkMode == 'string' ? JSON.parse(this.darkMode) : this.darkMode);
    document.body.classList.toggle('dark');
  }

  getEffect(value: string) {
    localStorage.setItem('slideShowEffect', value);
  }
}
