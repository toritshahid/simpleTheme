import { Component } from '@angular/core';
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dark';
  constructor(private service: ThemeService){

  }
  selectTheme(){
    this.service.selectTheme()
  }
}
