import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images = [
    { src: 'assets/img/ecol1.jpg', alt: '' },
    { src: 'assets/img/ecol2.jpg', alt: '' },
    { src: 'assets/img/ecol3.jpg', alt: '' },
    
  ];
  
  
}
