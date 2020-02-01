import { Component, OnInit, Input } from "@angular/core";
import { MovieServiceService } from "../services/movie-service.service";

@Component({
  selector: "app-list-toggle",
  templateUrl: "./list-toggle.component.html",
  styleUrls: ["./list-toggle.component.css"]
})
export class ListToggleComponent implements OnInit {
  @Input() movie;
  constructor(private movieService: MovieServiceService) {}

  ngOnInit() {}
  saveMovieToList() {
    this.movieService.saveToList(this.movie);
  }
}
