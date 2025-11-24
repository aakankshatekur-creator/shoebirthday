import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suprise',
  imports: [],
  templateUrl: './suprise.html',
  styleUrl: './suprise.css',
})
export class Suprise implements OnInit {
  constructor(private router: Router) {}
ngOnInit(): void {
  setTimeout(()=> {
    this.router.navigateByUrl('/ending');
},61000)
}
}