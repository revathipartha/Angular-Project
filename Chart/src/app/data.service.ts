import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class UserData {
  userId:string|undefined;
  id:string|undefined;
  title:string|undefined;
  body:string|undefined;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPosts():Observable<UserData>{
    return this.http.get<UserData>('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(id: any): Observable<UserData>{
    return this.http.get<UserData>(`https://jsonplaceholder.typicode.com/posts/${id}`)
  };

  getData(row:any):Observable<UserData>{
    return this.http.get<UserData>('https://jsonplaceholder.typicode.com/posts/1')
  }
  getDelete(row:any):Observable<UserData>{
    return this.http.delete<UserData>('https://jsonplaceholder.typicode.com/posts/1')
  }
  getEdit(formvalue: any):Observable<any>{

    console.log(formvalue)
    
    return this.http.patch<any>(`https://jsonplaceholder.typicode.com/posts/S{formvalue.id}`, {body: formvalue.body})
  }
}
