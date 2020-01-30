import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private httpClient: HttpClient) {}

  url = "https://api.themoviedb.org/3/";

  async get(path, options) {
    return await this.httpClient
      .get(this.url + path, options)
      .toPromise();
  }
/*   &api_key=yourkey
 */
}
