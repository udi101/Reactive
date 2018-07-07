import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    const data = new FormData();
    data.append('name', 'ef');
    const headers: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'th4sa4ds53bsd3'
    });
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users', { headers: headers });
  }
}
