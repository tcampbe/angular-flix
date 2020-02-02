import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
/* {
  providedIn: "root"
  } */
export class ApiServiceService {
  constructor(private httpClient: HttpClient) {}

  url = "https://ce-authenticated-backend.herokuapp.com/";

  async get(path, options?): Promise<any> {
    return await this.httpClient.get(this.url + path, options).toPromise();
  }

  async post(path, data, options?): Promise<any> {
    const httpOptions = {
      headears: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return await this.httpClient
      .post(this.url + path, data, httpOptions)
      .toPromise();
  }
}
