import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tienda';
  toogletab(): void {
    if (document.getElementById("nav-wrapper")) {
      if ((<HTMLDivElement>document.getElementById("nav-wrapper")).style.display == "block") {
        (<HTMLDivElement>document.getElementById("nav-wrapper")).style.display = "none";
      } else {
        (<HTMLDivElement>document.getElementById("nav-wrapper")).style.display = "block";
      }
    }
  }
}
