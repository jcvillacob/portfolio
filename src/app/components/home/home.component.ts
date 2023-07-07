import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  init: boolean = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init = true;
    }, 500);
  }

}
