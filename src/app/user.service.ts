import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "https://localhost:7209/user/list";

  constructor(private httpClient:HttpClient) { }

  getUserList():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }

  createUser(usuario:User): Observable<Object>{
    return this.httpClient.post("https://localhost:7209/user/create", usuario)
  }

  updateUser(id:number, usuario:User):Observable<Object>{
    return this.httpClient.put(`https://localhost:7209/user/${id}`, usuario)
  }

  getUserId(id:number):Observable<User>{
    return this.httpClient.get<User>(`https://localhost:7209/user/${id}`);
  }

  deleteUser(id:number):Observable<Object>{
    return this.httpClient.delete(`https://localhost:7209/user/${id}`);
  }
}
