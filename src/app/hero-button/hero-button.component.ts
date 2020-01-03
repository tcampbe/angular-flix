import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-button',
  templateUrl: './hero-button.component.html',
  styleUrls: ['./hero-button.component.css']
})
export class HeroButtonComponent implements OnInit {
  @Input() text
  primary
  constructor() { }

  ngOnInit() {
  }

}
