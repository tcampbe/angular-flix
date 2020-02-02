import { Injectable } from '@angular/core';
import { MovieApiServiceService } from './movie-api-service.service';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})

export class MovieServiceService {

  searchResults = [];

  myMovieList = [];
  
  constructor(private movieApi: MovieApiServiceService, 
    private api: ApiServiceService) {}

    getSearchResults() {
      return this.searchResults;
    }

    getMovieList() {
      return this.myMovieList;
    }

    async searchForMovies(searchTerm) {
      let response = await this.movieApi
        .get(`search/multi?query=${searchTerm}`);
      this.searchResults.length = 0;
      this.searchResults.push(...response.results);
    }

    async loadMovieList() {
      let results = await this.api.get(`publicapi/movies`);
      this.myMovieList.length = 0;
      this.myMovieList.push(...results);
    }

    async saveToList(movie) {
      await this.api.post(`publicapi/movies`, movie);
      this.loadMovieList();
    } 
    
}
