import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memories',
  imports: [],
  templateUrl: './memories.html',
  styleUrl: './memories.css',
})
export class Memories {
  constructor( private route: Router) {}
suprise(){
 this.route.navigate(['/suprise']);
}
}