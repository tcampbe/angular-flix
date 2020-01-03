import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  loadSearch(){
        /* this is so th search will only be done on enter key 
        if (this.props.loadSearch && e.key === "Enter" && this.state.searchTerm) {
          this.props.loadSearch(this.state.searchTerm);
        }
        */
  }

}
