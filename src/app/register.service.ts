import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./user";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  private url: string = "http://localhost:8080/user";
  Users: User[] = [];

  registerUsers(user: User): void {
    this.http
      .post(this.url + "/register", user)
      .subscribe(data => console.log(data));
  }
  constructor(private http: HttpClient) {}
}
