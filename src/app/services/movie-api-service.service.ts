import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable(
/*   {
  providedIn: 'root'
}
 */)

export class MovieApiServiceService {

  constructor(private httpClient: HttpClient) {}

  url = "https://api.themoviedb.org/3/";

  async get(path, options?): Promise<any> {
    return await this.httpClient
      .get(this.url + path, options)
      .toPromise();
  }

          /*   &api_key=yourkey  
          example ---  .get(this.url 
          path + "&api_key=a917e025b6c202b9d096152592a6a5ad", options)
          .toPromise();
          */

}
