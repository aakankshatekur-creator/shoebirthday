import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  constructor(private route: Router) {}
open(){
  this.route.navigate(['/memories']);
}
}
