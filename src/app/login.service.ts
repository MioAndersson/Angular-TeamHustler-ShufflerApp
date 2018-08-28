import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private url: string = "http://localhost:8080/user";
  Users: User[] = [];

  getUsers(): Observable<User> {
    return this.http.get<User>(this.url);
  }
  loginUsers(user: User): Observable<boolean> {
    return this.http.post<boolean>(this.url + "/login", user);
  }

  constructor(private http: HttpClient) {}
}
