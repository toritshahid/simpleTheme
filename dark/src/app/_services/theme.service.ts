import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      var element = document.body;
      element.classList.toggle("dark-mode");
   }
  }
  selectTheme() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
}
