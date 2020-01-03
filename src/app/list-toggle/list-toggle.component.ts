import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-toggle',
  templateUrl: './list-toggle.component.html',
  styleUrls: ['./list-toggle.component.css']
})
export class ListToggleComponent implements OnInit {
  @Input() movie;
  constructor() { }

  ngOnInit() {
  }

}
