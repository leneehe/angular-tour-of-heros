import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  // inputs: ['hero'] //alternative to @Input() method
})


export class HeroDetailComponent implements OnInit {
  @Input()  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
